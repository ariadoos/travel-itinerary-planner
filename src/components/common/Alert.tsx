import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"

export default function AlertMessageBox({title, description}: {
    title: string,
    description: string
}) {
    return (
        <Alert className="border-red-300">
            <Terminal className="h-4 w-4" />
            <AlertTitle>{title}</AlertTitle>
            <AlertDescription>
               {description}
            </AlertDescription>
        </Alert>

    )
}