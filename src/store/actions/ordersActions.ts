import { OrdersTypes } from '../types'
import api from '@api/index'

export interface RequestFilteringParams {
    [key: string]: boolean | null
}

interface GetOrdersAsyncParams {
    page: number
    filteringParams: RequestFilteringParams
}
export const getOrdersAsync = (params: GetOrdersAsyncParams, paginationCallback) => {
    return (dispatch) => {
        const { page, filteringParams } = params

        api.orders
            .getAllOrdersPaginated(
                { page, size: 6 },
                {
                    ...filteringParams,
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
