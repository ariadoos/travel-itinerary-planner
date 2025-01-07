import { Itinerary, OpenAiMessage } from '@/model/system';
import OpenAI from 'openai'

const apiKey = import.meta.env.VITE_OPENAI_API_KEY

// TODO: move this to backend api
const client = new OpenAI({
    apiKey,
    dangerouslyAllowBrowser: true
})

export const fetchOpenAIResponse = async (messages: OpenAiMessage[], model =  'gpt-4o-mini'): Promise<Itinerary[] | undefined> => {
    try {
        const response = await client.chat.completions.create({
            messages,
            model,
            response_format: { type: "json_object" },
        })

        const responseContent = response.choices[0].message.content
        const parsedContent = responseContent ? JSON.parse(responseContent): undefined
        return parsedContent?.itinerary ?? undefined

    } catch (error) {
        console.error('Error fetching OpenAI response:', error);
        throw error;
    }
};