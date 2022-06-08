import api from '@api/index'

import { MainPageTypes } from '../types'
import { DishInfo } from '@components/Dishes/dishItemUtils'

import { PAGINATION_SIZE_PER_PAGE } from '@pages/MainPage/mainPageUtils'
import { dishTypes } from '@components/TabContainer/tabContainerUtils'

export const getDishesAsync = () => {
    return (dispatch, getState) => {
        const { mainPage } = getState()

        const params = {
            page: mainPage.pagination.page - 1,
            size: PAGINATION_SIZE_PER_PAGE,
            name: mainPage.search,
            sort: mainPage.sortingSelectValue,
        }

        mainPage.dishType === dishTypes[0]
            ? api.dishes.getAllDishesPaginated(params).then((requestData) => {
                  dispatch(setDishes(requestData.data.content))
                  dispatch(setPagination({ ...mainPage.pagination, totalPages: requestData.data.totalPages }))
              })
            : api.dishes.getDishesByTypePaginated(mainPage.dishType, params).then((requestData) => {
                  dispatch(setDishes(requestData.data.content))
                  dispatch(setPagination({ ...mainPage.pagination, totalPages: requestData.data.totalPages }))
              })
    }
}

export const setDishes = (state: DishInfo[]) => ({
    type: MainPageTypes.SET_DISHES,
    payload: state,
})

export const getCartDishesFromLocalStorageAsync = () => {
    return (dispatch, getState) => {
        const { mainPage } = getState()
        const stringOfDishIds = window.localStorage.getItem('cart-selected-dishes')

        if (stringOfDishIds) {
            const dishIds = JSON.parse(stringOfDishIds)

            if (Array.isArray(dishIds) && dishIds.length) {
                api.dishes.getDishesByIdList(dishIds).then((requestData) => {
                    dispatch(setCart({ ...mainPage.cart, dishes: requestData.data }))
                })
            }
        }
    }
}

export const setCart = (state: DishInfo[]) => ({
    type: MainPageTypes.SET_CART,
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

export const setDishesType = (state: string) => ({
    type: MainPageTypes.SET_DISH_TYPE,
    payload: state,
})
