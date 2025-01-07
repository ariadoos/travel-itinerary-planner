import TogglePanel from "@/components/common/TogglePanel"
import VerticalTimeline from "@/components/common/VerticalTimeline"
import Filters from "@/components/home/Filters"
import { FiltersFormData } from "@/model/system"
import { fetchItineraries } from "@/state/itinerary/itinerarySlice"
import { AppDispatch, RootState } from "@/state/store"
import { useDispatch, useSelector } from "react-redux"

export default function Landing() {
    const {itineraries, status, errorMessage}  = useSelector((state: RootState) => state.itinerary)
    const dispatch:  AppDispatch = useDispatch()

    const handleSearchFilter = (filters: FiltersFormData) => {
        dispatch(fetchItineraries(filters))
    }

    return (
        <main className="flex flex-col sm:flex-row gap-5 lg:ml-[10%] lg:mr-[10%] p-5">
            <section className="min-w-full sm:min-w-80 rounded-lg border border-border border-solid shadow-sm p-2.5 bg-card max-h-max">
                <div className="filters">
                    <TogglePanel title="Filters" value="item-1" setDefaultValue={true}>
                        <Filters onApplySearchFilter={handleSearchFilter}></Filters>
                    </TogglePanel>
                </div>

            </section>

            <section className="main-container w-full">
                <div className="w-full"> 
                    <VerticalTimeline items={itineraries}></VerticalTimeline>
                </div>
            </section>
        </main>
    )
}