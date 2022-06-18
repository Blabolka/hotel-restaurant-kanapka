import api from '@api/index'
import { AxiosResponse } from 'axios'

export const exportPopularDishesAsync = () => () => {
    api.dishes.exportPopularDishes().then((response: AxiosResponse) => {
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', 'popular_dishes.xlsx')
        document.body.appendChild(link)
        link.click()
    })
}
