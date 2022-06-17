import { Column, Data } from '@components/CustomTable/CustomTable'
import { PopularDishInfo } from '@components/Dishes/dishItemUtils'
import { formatDate } from '@utils/dateUtils'

export const getColumns = (): Column[] => {
    return [
        {
            id: 'dishes',
            label: 'Страви',
        },
        {
            id: 'bill',
            label: 'Рахунок',
        },
        {
            id: 'urgent',
            label: 'Термінове',
        },
        {
            id: 'done',
            label: 'Виконане',
        },
        {
            id: 'orderedAt',
            label: 'Дата замовлення',
        },
        {
            id: 'expectedAt',
            label: 'Дата очікування',
        },
    ]
}

interface OrderInfo {
    id: number
    dishes: PopularDishInfo[]
    bill: number
    urgent: boolean
    done: boolean
    orderedAt: number
    expectedAt: number
}
const getOrderDishesInfoString = (dishes: PopularDishInfo[]) => {
    const dishNames = dishes.map((popularDish) => `${popularDish.timesOrdered}x(${popularDish.dish.name})`)
    return dishNames.join(', ')
}
const getOrderBillInfoString = (bill: number) => {
    return `₴${bill.toFixed(1)}`
}

export const getRows = (orders: OrderInfo[]): Data[] => {
    return orders.map((item) => {
        const { id, dishes, bill, urgent, done, orderedAt, expectedAt } = item

        return {
            id,
            dishes: getOrderDishesInfoString(dishes),
            bill: getOrderBillInfoString(bill),
            urgent: String(urgent),
            done: String(done),
            orderedAt: formatDate(orderedAt),
            expectedAt: formatDate(expectedAt),
        }
    })
}
