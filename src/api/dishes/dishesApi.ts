import { AxiosResponse } from 'axios'
import { IGetAllDishesPaginatedParams, IGetAllDishesPaginatedResponse } from './dishesApiUtils'

export const getDishesApi = (axios) => {
    const getAllDishesPaginated = (
        params: IGetAllDishesPaginatedParams,
    ): Promise<AxiosResponse<IGetAllDishesPaginatedResponse>> => axios.get('/dishes', { params })

    const getDishesByTypePaginated = (
        dishType: string,
        params: IGetAllDishesPaginatedParams,
    ): Promise<AxiosResponse<IGetAllDishesPaginatedResponse>> => axios.get(`/dishes/${dishType}`, { params })

    return {
        getAllDishesPaginated,
        getDishesByTypePaginated,
    }
}
