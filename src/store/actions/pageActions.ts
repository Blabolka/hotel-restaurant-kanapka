import api from '@api/index'

import { PAGE_TYPES } from '../types'
import { DishInfo, DishCartInfo } from '@components/Dishes/dishItemUtils'
import { DELIVERY_MODE_VALUES } from '@pages/MainPage/RightBlock/Delivery/deliveryModeSwitcherUtils'
import { PAGINATION_SIZE_PER_PAGE } from '@pages/MainPage/mainPageUtils'
import { dishTypes } from '@components/TabContainer/tabContainerUtils'
import { EnqueueSnackbarType } from '@pages/AdminPage/MenuBlock/menuBlockUtils'

export const getDishesAsync = () => {
    return (dispatch, getState) => {
        const { page } = getState()

        const params = {
            page: page.pagination.page - 1,
            size: PAGINATION_SIZE_PER_PAGE,
            name: page.search,
            sort: page.sortingSelectValue,
        }

        page.dishType === dishTypes[0]
            ? api.dishes.getAllDishesPaginated(params).then((requestData) => {
                  dispatch(setDishes(requestData.data.content))
                  dispatch(setPagination({ ...page.pagination, totalPages: requestData.data.totalPages }))
              })
            : api.dishes.getDishesByTypePaginated(page.dishType, params).then((requestData) => {
                  dispatch(setDishes(requestData.data.content))
                  dispatch(setPagination({ ...page.pagination, totalPages: requestData.data.totalPages }))
              })
    }
}

export const updateDishByIdAsync =
    (id: string | number, params: any, enqueueSnackbar: EnqueueSnackbarType, onSuccessAction: () => void) =>
    (dispatch) => {
        api.dishes
            .updateDishById(id, params)
            .then((response) => {
                if (response.status === 200) {
                    enqueueSnackbar('Страва була успішно оновлена!', {
                        variant: 'success',
                        autoHideDuration: 2000,
                    })
                    onSuccessAction()
                    dispatch(getDishesAsync())
                }
            })
            .catch(() => {
                enqueueSnackbar('Перевірте правильність введених даних!', {
                    variant: 'error',
                    autoHideDuration: 2000,
                })
            })
    }

export const addDishAsync =
    (params: any, enqueueSnackbar: EnqueueSnackbarType, onSuccessAction: () => void) => (dispatch) => {
        api.dishes
            .addDish(params)
            .then((response) => {
                if (response.status === 200) {
                    enqueueSnackbar('Страва була успішно додана!', {
                        variant: 'success',
                        autoHideDuration: 2000,
                    })
                    onSuccessAction()
                    dispatch(getDishesAsync())
                }
            })
            .catch(() => {
                // dispatch(removeDishInfo())
                enqueueSnackbar('Перевірте правильність введених даних!', {
                    variant: 'error',
                    autoHideDuration: 2000,
                })
            })
    }

export const deleteDishByIdAsync = (id: string | number, enqueueSnackbar: EnqueueSnackbarType) => (dispatch) => {
    api.dishes
        .deleteDishById(id)
        .then(() => {
            enqueueSnackbar('Страву було успішно видалено!', {
                variant: 'success',
                autoHideDuration: 2000,
            })
            dispatch(getDishesAsync())
        })
        .catch(() => {
            enqueueSnackbar('При видаленні страви сталася помилка!', {
                variant: 'error',
                autoHideDuration: 2000,
            })
        })
}

export const setDishes = (state: DishInfo[]) => ({
    type: PAGE_TYPES.SET_DISHES,
    payload: state,
})

export const getCartDishesFromLocalStorageAsync = () => {
    return (dispatch, getState) => {
        const { page } = getState()
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
                    dispatch(setCart({ ...page.cart, dishes: filteredDishes }))
                })
            }
        }
    }
}

export const setCart = (state) => ({
    type: PAGE_TYPES.SET_CART,
    payload: state,
})
export const setCartDeliveryMode = (state: DELIVERY_MODE_VALUES) => ({
    type: PAGE_TYPES.SET_CART_DELIVERY_MODE,
    payload: state,
})
export const setCartDeliveryDate = (state: Date | null) => ({
    type: PAGE_TYPES.SET_CART_DELIVERY_DATE,
    payload: state,
})

export const resetPagination = () => ({
    type: PAGE_TYPES.RESET_PAGINATION,
})
export const setPagination = (state) => ({
    type: PAGE_TYPES.SET_PAGINATION,
    payload: state,
})

export const setSearch = (state: string) => ({
    type: PAGE_TYPES.SET_SEARCH,
    payload: state,
})

export const setSortingSelect = (state: string) => ({
    type: PAGE_TYPES.SET_SORTING_SELECT,
    payload: state,
})

export const setDishesType = (state: string) => ({
    type: PAGE_TYPES.SET_DISH_TYPE,
    payload: state,
})

export const resetState = () => ({
    type: PAGE_TYPES.RESET_STATE,
})

export const addDishInfo = () => ({
    type: PAGE_TYPES.ADD_DISH_INFO,
})

export const setDishInfo = (id: number, field: string, value: string) => ({
    type: PAGE_TYPES.SET_DISH_INFO,
    payload: {
        id,
        field,
        value,
    },
})

export const removeDishInfo = () => ({
    type: PAGE_TYPES.REMOVE_DISH_INFO,
})
