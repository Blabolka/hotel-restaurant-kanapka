import { AxiosResponse, AxiosInstance } from 'axios'
import { ICreateOrderBody } from '@api/orders/ordersApiUtils'

export const getOrdersApi = (axios: AxiosInstance) => {
    const createOrder = (body: ICreateOrderBody): Promise<AxiosResponse<void>> => {
        return axios.post('/order', { ...body })
    }

    return {
        createOrder,
    }
}
