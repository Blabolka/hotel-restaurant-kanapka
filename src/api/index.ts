import basicAxios from 'axios'

const serverBaseUrl: string = process.env.SERVER_BASE_URL || ''

const axios = serverBaseUrl ? basicAxios.create({ baseURL: serverBaseUrl }) : basicAxios

import { getDishesApi } from './dishes/dishesApi'

const api = {
    dishes: getDishesApi(axios),
}

export default api
