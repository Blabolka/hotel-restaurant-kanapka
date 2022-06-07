import { MainPageTypes } from '../types'

export const setDishes = (state) => ({
    type: MainPageTypes.SET_DISHES,
    payload: state,
})

export const setPagination = (state: number) => ({
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
