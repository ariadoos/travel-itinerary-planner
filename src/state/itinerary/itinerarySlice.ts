import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FiltersFormData, Itinerary, LoadingState } from "@/model/system";
import { fetchOpenAIResponse } from "@/services/openaiApi";
import { getPromptMessages } from "@/lib/prompt";

interface ItineraryState {
    itineraries: Itinerary[]
    status: LoadingState
    errorMessage?: string
}

const initialState: ItineraryState = {
    itineraries: [],
    status: LoadingState.Idle
}

const itinerarySlice = createSlice({
    name: 'itinerary',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchItineraries.pending, (state) => {
                state.status = LoadingState.Loading;
            })
            .addCase(fetchItineraries.fulfilled, (state, action) => {
                state.status = LoadingState.Success;
                state.itineraries = action.payload ?? []; 
            })
            .addCase(fetchItineraries.rejected, (state, action) => {
                state.status = LoadingState.Failed;
                state.errorMessage = String(action.payload); // Store error message
            });
    },
})

export const fetchItineraries = createAsyncThunk(
    'itinerary/getItineraries',
    async({ dateRange, searchText }: FiltersFormData, thunkAPI) => {
        try {
            const itineraries = await fetchOpenAIResponse(getPromptMessages(searchText, dateRange))

            return itineraries
        } catch (error) {
            if (error instanceof Error) {
                return thunkAPI.rejectWithValue(error.message)
            }
            return thunkAPI.rejectWithValue('An unknown error occurred')
        }
    }
)

export default itinerarySlice.reducer