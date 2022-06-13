import { PopularDishInfo } from '@components/Dishes/dishItemUtils'
import { Column, Data } from '@pages/AdminPage/CustomTable/CustomTable'

export const getColumns = (): Column[] => {
    return [
        {
            id: 'name',
            label: 'Назва',
        },
        {
            id: 'description',
            label: 'Опис',
        },
        {
            id: 'weight',
            label: 'Вага',
        },
        {
            id: 'price',
            label: 'Ціна',
        },
        {
            id: 'timesOrdered',
            label: 'Кількість замовлень',
            minWidth: 200,
        },
    ]
}

export const getRows = (popularDishes: PopularDishInfo[]): Data[] => {
    return popularDishes.map((item) => {
        const { timesOrdered } = item
        const { id, name, description, weight, price } = item.dish

        const rowDataObject: Data = { id, name, description, weight, price, timesOrdered }
        return rowDataObject
    })
}
