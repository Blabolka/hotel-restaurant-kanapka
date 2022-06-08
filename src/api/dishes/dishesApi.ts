import { AxiosResponse, AxiosStatic } from 'axios'
import { IGetAllDishesPaginatedParams, IGetDishesResponse, IGetAllDishesPaginatedResponse } from './dishesApiUtils'

export const getDishesApi = (axios: AxiosStatic) => {
    const getDishesByIdList = (body: number[]): Promise<AxiosResponse<IGetDishesResponse>> => {
        return axios.get('/dishes/internal', { data: JSON.stringify(body) })
    }

    const getAllDishesPaginated = (
        params: IGetAllDishesPaginatedParams,
    ): Promise<AxiosResponse<IGetAllDishesPaginatedResponse>> => axios.get('/dishes', { params })

    const getDishesByTypePaginated = (
        dishType: string,
        params: IGetAllDishesPaginatedParams,
    ): Promise<AxiosResponse<IGetAllDishesPaginatedResponse>> => axios.get(`/dishes/${dishType}`, { params })

    return {
        getDishesByIdList,
        getAllDishesPaginated,
        getDishesByTypePaginated,
    }
}
