import api from '@api/index'

import { MainPageTypes } from '../types'
import { DishInfo } from '@components/Dishes/dishItemUtils'

import { PAGINATION_SIZE_PER_PAGE } from '@pages/MainPage/mainPageUtils'

export const getDishesAsync = () => {
    return (dispatch, getState) => {
        const { mainPage } = getState()

        api.dishes
            .getAllDishesPaginated({
                page: mainPage.pagination.page - 1,
                size: PAGINATION_SIZE_PER_PAGE,
                name: mainPage.search,
                sort: mainPage.sortingSelectValue,
            })
            .then((requestData) => {
                dispatch(setDishes(requestData.data.content))
                dispatch(setPagination({ ...mainPage.pagination, totalPages: requestData.data.totalPages }))
            })
    }
}

export const setDishes = (state: DishInfo[]) => ({
    type: MainPageTypes.SET_DISHES,
    payload: state,
})

export const resetPagination = () => ({
    type: MainPageTypes.RESET_PAGINATION,
})
export const setPagination = (state) => ({
    type: MainPageTypes.SET_PAGINATION,
    payload: state,
})

export const setSearch = (state: string) => ({
    type: MainPageTypes.SET_SEARCH,
    payload: state,
})

export const setSortingSelect = (state: string) => ({
    type: MainPageTypes.SET_SORTING_SELECT,
    payload: state,
})
