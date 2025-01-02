import TogglePanel from "@/components/common-components/TogglePanel"
import Filters from "@/components/home/Filters"

export default function Landing() {
    return (
        <main className="flex flex-col sm:flex-row gap-5 lg:ml-[10%] lg:mr-[10%] p-5">
            <section className="min-w-full sm:min-w-80 rounded-lg border border-border border-solid shadow-sm p-2.5">
                <div className="filters">
                    <TogglePanel value="item-1" setDefaultValue={true}>
                        <Filters></Filters>
                    </TogglePanel>
                </div>

            </section>

            <section className="main-container">
                <div style={{ width: '500px' }}> TODO: list layout </div>
            </section>
        </main>
    )
}