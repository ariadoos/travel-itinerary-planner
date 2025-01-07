import { Input } from "@/components/ui/input"
import { startOfDay } from "date-fns"
import { Loader2 } from "lucide-react"
import { useState } from "react"
import { DateRange } from "react-day-picker"
import * as system from '../../model/system'
import DatePickerWithRange from "../common/DatePickerWithRange"
import { Button } from "../ui/button"

interface FiltersProps {
    onApplySearchFilter: (formData: system.FiltersFormData) => void;
    isLoading: boolean
}
/**
 * Filters component for the itinerary planner application.
 * 
 * This component provides a form with inputs for selecting a date range and entering a search text.
 * It includes validation for the form fields and displays error messages if the validation fails.
 * 
 * @param {function} props.onApplySearchFilter - Function to call when the form is submitted with valid data.
 * 
 * @returns {JSX.Element} The rendered Filters component.
 */
export default function Filters({ onApplySearchFilter, isLoading = false }: FiltersProps) {
    const [formData, setFormData] = useState<system.FiltersFormData>({ dateRange: undefined, searchText: '' })
    const [errors, setErrors] = useState<{ searchText?: string, dateRange?: string }>({})

    const handleDateSelection = (date: DateRange | undefined): void => {
        const dateRange = {
            from: date?.from?.toISOString(),
            to: date?.to?.toISOString()
        }

        setFormData((prevFromData) => ({ ...prevFromData, dateRange }))
    }

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }

    const validateForm = (): boolean => {
        const newErrors: { searchText?: string, dateRange?: string } = {}
        const currentDate = new Date().toISOString()

        if (!formData.searchText) {
            newErrors.searchText = "Search text cannot be empty"
        }

        if (formData.dateRange) {
            if (formData.dateRange.from && startOfDay(formData.dateRange.from) < startOfDay(currentDate)) {
                newErrors.dateRange = "Start date cannot be in the past"
            }
            if (formData.dateRange.from && formData.dateRange.to && formData.dateRange.from > formData.dateRange.to) {
                newErrors.dateRange = "Start date cannot be after end date"
            }
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()

        if (validateForm() && !isLoading) {
            onApplySearchFilter(formData)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col pl-2.5 pr-2.5 gap-5">
                <div className="flex flex-col gap-1">
                    <Input className={`${errors?.searchText ? 'border-red-500 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0' : ''}`} type="text" placeholder="City or Country name"
                        name="searchText" value={formData.searchText} onChange={handleSearch} />

                    {errors.searchText && <span className="text-red-500">{errors.searchText}</span>}

                </div>

                <div className="flex flex-col gap-1">
                    <DatePickerWithRange onDateSelected={handleDateSelection}
                        isError={errors.dateRange ? true : false}
                    />

                    {errors.dateRange && <span className="text-red-500">{errors.dateRange}</span>}
                </div>

                <Button type="submit" disabled={isLoading}>{
                    isLoading ? (<>
                        <Loader2 className="animate-spin" />
                        Please wait</>) : 'Apply'}</Button>
            </div>
        </form>
    )
}