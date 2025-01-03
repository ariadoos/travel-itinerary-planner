import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { ReactNode } from "react"

export default function TogglePanel({ children, title, value, setDefaultValue }: { children: ReactNode, title: string, value: string, setDefaultValue: boolean }) {
    return (<Accordion type="single" defaultValue={setDefaultValue ? value : ''} collapsible>
        <AccordionItem value={value}>
            <AccordionTrigger>{title}</AccordionTrigger>
            <AccordionContent >
                {children}
            </AccordionContent>
        </AccordionItem>
    </Accordion>)
}