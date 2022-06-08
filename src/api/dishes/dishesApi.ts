import { AxiosResponse, AxiosStatic } from 'axios'
import { DishInfo } from '@components/Dishes/dishItemUtils'
import { IGetAllDishesPaginatedParams, IGetAllDishesPaginatedResponse } from './dishesApiUtils'

export const getDishesApi = (axios: AxiosStatic) => {
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

    return {
        getDishesByIdList,
        getAllDishesPaginated,
        getDishesByTypePaginated,
    }
}
