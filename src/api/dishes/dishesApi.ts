import { AxiosResponse } from 'axios'
import { IGetAllDishesPaginatedParams, IGetAllDishesPaginatedResponse } from './dishesApiUtils'

export const getDishesApi = (axios) => {
    const getAllDishesPaginated = (
        params: IGetAllDishesPaginatedParams,
    ): Promise<AxiosResponse<IGetAllDishesPaginatedResponse>> => {
        return axios.get('/dishes', { params })
    }

    return {
        getAllDishesPaginated,
    }
}
