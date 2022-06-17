import { DishInfo, PopularDishInfo } from '@components/Dishes/dishItemUtils'
import { SORTING_SELECT_VALUES } from '@pages/MainPage/CenterBlock/Filtering/DishSortingSelect/dishSortingSelectUtils'

export interface IPaginationParams {
    page: number
    size: number
}

export interface IGetAllDishesPaginatedParams extends IPaginationParams {
    name: string
    sort: SORTING_SELECT_VALUES
}

export interface IGetAllDishesPaginatedResponse {
    content: DishInfo[]
    totalPages: number
}

export interface IGetPopularDishesPaginatedResponse {
    content: PopularDishInfo[]
    totalPages: number
}
