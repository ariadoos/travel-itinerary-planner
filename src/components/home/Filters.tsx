import { Input } from "@/components/ui/input"
import DatePickerWithRange from "../common/DatePickerWithRange"
import { Button } from "../ui/button"

export default function Filters() {
    return (
        <div className="flex flex-col pl-2.5 pr-2.5 gap-5">
            <Input type="email" placeholder="Email" />
            
            <DatePickerWithRange />

            <Button type="submit">Apply</Button>
        </div>
    )
}