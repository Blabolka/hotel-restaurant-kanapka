import { AxiosResponse, AxiosInstance } from 'axios'
import { DishInfo } from '@components/Dishes/dishItemUtils'
import {
    IGetAllDishesPaginatedParams,
    IGetAllDishesPaginatedResponse,
    IGetPopularDishesPaginatedResponse,
    IPaginationParams,
} from './dishesApiUtils'

export const getDishesApi = (axios: AxiosInstance) => {
    const getDishesByIdList = (body: number[]): Promise<AxiosResponse<DishInfo[]>> => {
        return axios.get(`/dishes/internal/${body.join(',')}`)
    }

    const getAllDishesPaginated = (
        params: IGetAllDishesPaginatedParams,
    ): Promise<AxiosResponse<IGetAllDishesPaginatedResponse>> => axios.get('/dishes', { params })

    const getDishesByTypePaginated = (
        dishType: string,
        params: IGetAllDishesPaginatedParams,
    ): Promise<AxiosResponse<IGetAllDishesPaginatedResponse>> => axios.get(`/dishes/${dishType}`, { params })

    const getPopularDishesPaginated = (
        params: IPaginationParams,
    ): Promise<AxiosResponse<IGetPopularDishesPaginatedResponse>> => axios.get('/admin/orders/popular', { params })

    const updateDishById = (id: string | number, params: any): Promise<AxiosResponse> =>
        axios.patch(`/admin/dishes/${id}`, params.data, { headers: { 'Content-Type': 'multipart/form-data' } })

    const deleteDishById = (id: string | number) => axios.delete(`/admin/dishes/${id}`)

    const exportPopularDishes = (): Promise<AxiosResponse> =>
        axios.get('/admin/orders/popular/export', { responseType: 'blob' })

    return {
        getDishesByIdList,
        getAllDishesPaginated,
        getDishesByTypePaginated,
        getPopularDishesPaginated,
        updateDishById,
        deleteDishById,
        exportPopularDishes,
    }
}
