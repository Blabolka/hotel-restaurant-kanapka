import { MainPageTypes } from '../types'

import { DishInfo, DishCartInfo } from '@components/Dishes/dishItemUtils'
import { SORTING_SELECT_VALUES } from '@pages/MainPage/CenterBlock/Filtering/DishSortingSelect/dishSortingSelectUtils'

interface initialStateTypes {
    dishes: DishInfo[]
    cart: { dishes: DishCartInfo[]; deliveryDate: Date }
    pagination: { page: number; totalPages: number }
    search: string
    sortingSelectValue: SORTING_SELECT_VALUES
    dishType: string
}

const initialState: initialStateTypes = {
    dishes: [],
    cart: {
        dishes: [],
        deliveryDate: new Date(),
    },
    pagination: {
        page: 1,
        totalPages: 1,
    },
    search: '',
    sortingSelectValue: SORTING_SELECT_VALUES.ASC,
    dishType: '',
}

const paginationReducer = (state = initialState, action) => {
    switch (action.type) {
        case MainPageTypes.SET_DISHES: {
            return { ...state, dishes: action.payload }
        }

        case MainPageTypes.SET_CART: {
            const dishes = action.payload.dishes.map((dish) => ({ id: dish.id, count: dish.count }))
            window.localStorage.setItem('cart-selected-dishes', JSON.stringify(dishes))
            return { ...state, cart: action.payload }
        }

        case MainPageTypes.SET_PAGINATION: {
            return { ...state, pagination: action.payload }
        }
        case MainPageTypes.RESET_PAGINATION: {
            return { ...state, pagination: initialState.pagination }
        }

        case MainPageTypes.SET_SEARCH: {
            return { ...state, search: action.payload }
        }

        case MainPageTypes.SET_SORTING_SELECT: {
            return { ...state, sortingSelectValue: action.payload }
        }

        case MainPageTypes.SET_DISH_TYPE: {
            return { ...state, dishType: action.payload }
        }

        default: {
            return state
        }
    }
}

export default paginationReducer
