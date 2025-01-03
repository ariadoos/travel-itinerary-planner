import TogglePanel from "@/components/common/TogglePanel"
import Filters from "@/components/home/Filters"

export default function Landing() {      
    return (
        <main className="flex flex-col sm:flex-row gap-5 lg:ml-[10%] lg:mr-[10%] p-5">
            <section className="min-w-full sm:min-w-80 rounded-lg border border-border border-solid shadow-sm p-2.5 bg-card max-h-max">
                <div className="filters">
                    <TogglePanel title="Filters" value="item-1" setDefaultValue={true}>
                        <Filters></Filters>
                    </TogglePanel>
                </div>

            </section>

            <section className="main-container w-full">
                <div className="w-full"> 
                    {/* Vertical timeline placeholder */}
                </div>
            </section>
        </main>
    )
}