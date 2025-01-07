import { configureStore } from '@reduxjs/toolkit';
import itineraryReducer from './itinerary/itinerarySlice';

const store = configureStore({
    reducer: {
        itinerary: itineraryReducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;