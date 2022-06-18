import { PAGE_TYPES } from '../types'

import { DishInfo, DishCartInfo } from '@components/Dishes/dishItemUtils'
import { DELIVERY_MODE_VALUES } from '@pages/MainPage/RightBlock/Delivery/deliveryModeSwitcherUtils'
import { SORTING_SELECT_VALUES } from '@pages/MainPage/CenterBlock/Filtering/DishSortingSelect/dishSortingSelectUtils'

import { getMinDeliveryDate } from '@utils/dateUtils'

interface initialStateTypes {
    dishes: DishInfo[]
    cart: { dishes: DishCartInfo[]; deliveryMode: DELIVERY_MODE_VALUES; deliveryDate: Date }
    pagination: { page: number; totalPages: number }
    search: string
    sortingSelectValue: SORTING_SELECT_VALUES
    dishType: string
}

const initialState: initialStateTypes = {
    dishes: [],
    cart: {
        dishes: [],
        deliveryMode: DELIVERY_MODE_VALUES.AS_SOON_AS_POSSIBLE,
        deliveryDate: getMinDeliveryDate(),
    },
    pagination: {
        page: 1,
        totalPages: 1,
    },
    search: '',
    sortingSelectValue: SORTING_SELECT_VALUES.ASC,
    dishType: '',
}

const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case PAGE_TYPES.SET_DISHES: {
            return { ...state, dishes: action.payload }
        }

        case PAGE_TYPES.SET_CART: {
            const dishes = action.payload.dishes.map((dish) => ({ id: dish.id, count: dish.count }))
            window.localStorage.setItem('cart-selected-dishes', JSON.stringify(dishes))
            return { ...state, cart: action.payload }
        }
        case PAGE_TYPES.SET_CART_DELIVERY_MODE: {
            return { ...state, cart: { ...state.cart, deliveryMode: action.payload } }
        }
        case PAGE_TYPES.SET_CART_DELIVERY_DATE: {
            return { ...state, cart: { ...state.cart, deliveryDate: action.payload } }
        }

        case PAGE_TYPES.SET_PAGINATION: {
            return { ...state, pagination: action.payload }
        }
        case PAGE_TYPES.RESET_PAGINATION: {
            return { ...state, pagination: initialState.pagination }
        }

        case PAGE_TYPES.SET_SEARCH: {
            return { ...state, search: action.payload }
        }

        case PAGE_TYPES.SET_SORTING_SELECT: {
            return { ...state, sortingSelectValue: action.payload }
        }

        case PAGE_TYPES.SET_DISH_TYPE: {
            return { ...state, dishType: action.payload }
        }

        case PAGE_TYPES.ADD_DISH_INFO: {
            return {
                ...state,
                dishes: [
                    {
                        id: 0,
                        name: '',
                        description: '',
                        weight: 0,
                        price: 0,
                        imagePath: '',
                        dishType: 'pizza',
                    },
                    ...state.dishes,
                ],
            }
        }

        case PAGE_TYPES.SET_DISH_INFO: {
            return {
                ...state,
                dishes: state.dishes.map((dish: DishInfo) => {
                    if (dish.id === action.payload.id) {
                        return { ...dish, [action.payload.field]: action.payload.value }
                    }
                    return dish
                }),
            }
        }

        case PAGE_TYPES.REMOVE_DISH_INFO: {
            return { ...state, dishes: state.dishes.filter((item) => item.id !== 0) }
        }

        case PAGE_TYPES.RESET_STATE: {
            return { ...initialState }
        }

        default: {
            return state
        }
    }
}

export default pageReducer
