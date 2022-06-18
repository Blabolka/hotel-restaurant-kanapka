interface IPaginationParams {
    page: number
    size: number
}
export type IGetAllOrdersPaginatedParams = IPaginationParams

export interface IGetAllOrdersPaginatedBody {
    urgent?: boolean | null
    confirmed?: boolean | null
    cancelled?: boolean | null
    done?: boolean | null

    orderedAtFrom: null
    orderedAtTo: null
    expectedAtFrom: null
    expectedAtTo: null

    sortBy: string[]
    sortOrder: string[]
}

export interface IGetAllOrdersPaginatedResponse {
    content: []
    totalPages: number
}

interface OrderDishesInfo {
    [key: string]: number
}

export interface ICreateOrderBody {
    guestId: number
    phone: string
    expectedDate: Date | null
    dishes: OrderDishesInfo
}
