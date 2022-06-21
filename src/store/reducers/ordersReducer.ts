import { OrdersTypes } from '../types'
import { PopularDishInfo } from '@components/Dishes/dishItemUtils'

interface initialStateTypes {
    orders: PopularDishInfo[]
}

const initialState: initialStateTypes = {
    orders: [],
}

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case OrdersTypes.SET_ORDERS: {
            return { ...state, orders: action.payload }
        }
        default: {
            return state
        }
    }
}

export default ordersReducer
