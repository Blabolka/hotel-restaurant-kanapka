export interface DishInfo {
    id: number
    imagePath: string
    name: string
    description: string
    weight: number
    price: number
}

export interface DishCartInfo extends DishInfo {
    count: number
}
