import { DishInfo } from '@components/Dishes/dishItemUtils'
import { SORTING_SELECT_VALUES } from '@pages/MainPage/CenterBlock/Filtering/DishSortingSelect/dishSortingSelectUtils'

export interface IGetAllDishesPaginatedParams {
    page: number
    size: number
    name: string
    sort: SORTING_SELECT_VALUES
}

export interface IGetAllDishesPaginatedResponse {
    content: DishInfo[]
    totalPages: number
}
