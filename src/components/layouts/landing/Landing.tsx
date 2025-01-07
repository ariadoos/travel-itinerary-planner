import AlertMessageBox from "@/components/common/Alert"
import TogglePanel from "@/components/common/TogglePanel"
import VerticalTimeline from "@/components/common/VerticalTimeline"
import Filters from "@/components/home/Filters"
import { Skeleton } from "@/components/ui/skeleton"
import { FiltersFormData, LoadingState } from "@/model/system"
import { fetchItineraries } from "@/state/itinerary/itinerarySlice"
import { AppDispatch, RootState } from "@/state/store"
import { useDispatch, useSelector } from "react-redux"

export default function Landing() {
    const { itineraries, status, errorMessage } = useSelector((state: RootState) => state.itinerary)
    const dispatch: AppDispatch = useDispatch()

    const handleSearchFilter = (filters: FiltersFormData) => {
        dispatch(fetchItineraries(filters))
    }

    const loadingState = LoadingState

    const isItinerariesAvailable = () => itineraries.length > 0 && status !== loadingState.Idle

    const isLoading = () => status === loadingState.Loading

    return (
        <main className={`flex sm:flex-row gap-5 lg:ml-[10%] lg:mr-[10%] p-5 ${!isItinerariesAvailable() && !isLoading() ? 'flex-row items-center justify-center' : 'flex-col'}`}>
            <section className="min-w-full sm:min-w-80 rounded-lg border border-border border-solid shadow-sm p-2.5 bg-card max-h-max">
                <div className="filters">
                    <TogglePanel title="Filters" value="item-1" setDefaultValue={true}>
                        <Filters onApplySearchFilter={handleSearchFilter} isLoading={loadingState.Loading === status}></Filters>
                    </TogglePanel>
                </div>

            </section>

            {(isItinerariesAvailable() || isLoading()) &&
                <section className="main-container w-full">
                    {status === loadingState.Success ? (
                        <div className="w-full">
                            <VerticalTimeline items={itineraries}></VerticalTimeline>
                        </div>
                    ) : isLoading() ? (
                        Array.from({ length: 6 }).map((_, index) => (
                            <Skeleton key={index} className="w-full h-12 mb-1"></Skeleton>
                        ))
                    ) : status === loadingState.Failed ? (
                        <AlertMessageBox title='Error!' description={errorMessage ?? 'Error while fetching data. Please try again later.'}></AlertMessageBox>
                    ) : null}
                </section>
            }
        </main>
    )
}