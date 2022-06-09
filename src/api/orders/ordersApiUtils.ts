interface OrderDishesInfo {
    [key: string]: number
}

export interface ICreateOrderBody {
    guestId: number
    phone: string
    expectedDate: Date | null
    dishes: OrderDishesInfo
}
