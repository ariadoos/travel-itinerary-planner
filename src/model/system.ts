
export interface FiltersFormData {
    dateRange: DateRange | undefined,
    searchText: string
}

export interface DateRange {
    from?: string,
    to?: string
}

export enum LoadingState {
    Loading = 'loading',
    Success = 'success',
    Failed = 'failed',
    Idle = 'idle'
}

export interface Itinerary {
    title: string
    description: string
}

export interface OpenAiMessage {
    role: 'user' | 'system'
    content: string
}
