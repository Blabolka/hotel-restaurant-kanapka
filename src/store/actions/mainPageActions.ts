import api from '@api/index'

import { MainPageTypes } from '../types'
import { DishInfo, DishCartInfo } from '@components/Dishes/dishItemUtils'
import { DELIVERY_MODE_VALUES } from '@pages/MainPage/RightBlock/Delivery/deliveryModeSwitcherUtils'
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
        const stringOfDishes = window.localStorage.getItem('cart-selected-dishes')

        if (stringOfDishes) {
            const dishes = JSON.parse(stringOfDishes)

            if (Array.isArray(dishes) && dishes.length) {
                const dishesIds = dishes.map((dish) => dish.id)
                api.dishes.getDishesByIdList(dishesIds).then((requestData) => {
                    const filteredDishes = requestData.data.reduce((memo: DishCartInfo[], item: DishInfo) => {
                        const itemFromCart = dishes.find((dish) => dish.id === item.id)
                        if (itemFromCart) {
                            memo.push({ ...item, count: itemFromCart.count })
                        }

                        return memo
                    }, [])
                    dispatch(setCart({ ...mainPage.cart, dishes: filteredDishes }))
                })
            }
        }
    }
}

export const setCart = (state) => ({
    type: MainPageTypes.SET_CART,
    payload: state,
})
export const setCartDeliveryMode = (state: DELIVERY_MODE_VALUES) => ({
    type: MainPageTypes.SET_CART_DELIVERY_MODE,
    payload: state,
})
export const setCartDeliveryDate = (state: Date | null) => ({
    type: MainPageTypes.SET_CART_DELIVERY_DATE,
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

export const setDishInfo = (id: number, field: string, value: string) => ({
    type: MainPageTypes.SET_DISH_INFO,
    payload: {
        id,
        field,
        value,
    },
})
