import { OrdersTypes } from '../types'
import api from '@api/index'

interface GetOrdersAsyncParams {
    page: number
}
export const getOrdersAsync = (params: GetOrdersAsyncParams, paginationCallback) => {
    return (dispatch) => {
        const { page } = params

        api.orders
            .getAllOrdersPaginated(
                { page, size: 6 },
                {
                    urgent: null,
                    confirmed: null,
                    cancelled: null,
                    done: null,
                    orderedAtFrom: null,
                    orderedAtTo: null,
                    expectedAtFrom: null,
                    expectedAtTo: null,

                    sortBy: ['orderedAt'],
                    sortOrder: ['DESC'],
                },
            )
            .then((response) => {
                dispatch(setOrders(response.data.content))
                paginationCallback(response.data.totalPages)
            })
    }
}

export const setOrders = (state) => ({
    type: OrdersTypes.SET_ORDERS,
    payload: state,
})
