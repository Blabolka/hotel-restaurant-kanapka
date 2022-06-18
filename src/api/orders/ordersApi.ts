import { AxiosResponse, AxiosInstance } from 'axios'
import {
    IGetAllOrdersPaginatedParams,
    IGetAllOrdersPaginatedBody,
    ICreateOrderBody,
    IGetAllOrdersPaginatedResponse,
} from '@api/orders/ordersApiUtils'

export const getOrdersApi = (axios: AxiosInstance) => {
    const getAllOrdersPaginated = (
        params: IGetAllOrdersPaginatedParams,
        body: IGetAllOrdersPaginatedBody,
    ): Promise<AxiosResponse<IGetAllOrdersPaginatedResponse>> => {
        return axios.post('/admin/orders', body, { params })
    }

    const createOrder = (body: ICreateOrderBody): Promise<AxiosResponse<void>> => {
        return axios.post('/order', { ...body })
    }

    return {
        getAllOrdersPaginated,
        createOrder,
    }
}
