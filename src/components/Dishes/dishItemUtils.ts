export interface DishInfo {
    id: number
    imagePath: string
    name: string
    description: string
    weight: number
    price: number
    dishType: string
}

export interface PopularDishInfo {
    timesOrdered: number
    dish: DishInfo
}

export interface DishCartInfo extends DishInfo {
    count: number
}
