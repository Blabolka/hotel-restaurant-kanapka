export interface FilteringParams {
    urgent: boolean | null
    confirmed: boolean | null
    cancelled: boolean | null
    done: boolean | null
}

export const getDefaultFilteringState = (): FilteringParams => {
    return {
        urgent: null,
        confirmed: null,
        cancelled: null,
        done: null,
    }
}
