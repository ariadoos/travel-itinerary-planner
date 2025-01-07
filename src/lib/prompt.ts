import { DateRange, OpenAiMessage } from "@/model/system";

export function getPromptMessages(searchText: string, dateRange: DateRange | undefined ): OpenAiMessage[] {
    const systemPrompt = "You are a travel planner. Your task is to give a itinerary plan for a city or country for one or more days. The city and date range will be provided as input. Provide atleast the top 10 things to visit on that city or country. \n For example, If the city is Paris and the date range is only one day, then return list of top 10 places that includes the title of the place and description of that place in json format. \n Sample format of json output is [{title: 'Effiel tower', descripton: 'Some desc...'}, ...]"

    const dateRangePromptText = dateRange?.to ? `Please provide the itinerary plan from ${dateRange.from} to ${dateRange.to}` : `Please Provide the intinerary plan for date ${dateRange?.from}`

    const userPrompt  = `You are looking at the travel itinerary plan for city or country ${searchText}. ${dateRangePromptText}. Return the output in the json format which includes list of title and description.`

    return [
        {
            role: 'system', 'content': systemPrompt
        },
        {
            role: 'user', content: userPrompt
        }
    ]
}