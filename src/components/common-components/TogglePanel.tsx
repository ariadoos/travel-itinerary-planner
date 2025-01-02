import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { ReactNode } from "react"

export default function TogglePanel({ children, value, setDefaultValue }: { children: ReactNode, value: string, setDefaultValue: boolean }) {
    return (<Accordion type="single" defaultValue={setDefaultValue ? value : ''} collapsible>
        <AccordionItem value={value}>
            <AccordionTrigger>Filters</AccordionTrigger>
            <AccordionContent >
                {children}
            </AccordionContent>
        </AccordionItem>
    </Accordion>)
}