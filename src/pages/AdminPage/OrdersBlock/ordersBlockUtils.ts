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
            id: 'confirmed',
            label: 'Підтверджене',
        },
        {
            id: 'cancelled',
            label: 'Відмінене',
        },
        {
            id: 'done',
            label: 'Виконане',
        },
        {
            id: 'orderedAt',
            label: 'Дата замовлення',
            minWidth: 150,
        },
        {
            id: 'expectedAt',
            label: 'Дата очікування',
            minWidth: 150,
        },
    ]
}

interface OrderInfo {
    id: number
    dishes: PopularDishInfo[]
    bill: number
    urgent: boolean
    confirmed: boolean
    cancelled: boolean
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
        const { id, dishes, bill, urgent, confirmed, cancelled, done, orderedAt, expectedAt } = item

        return {
            id,
            dishes: getOrderDishesInfoString(dishes),
            bill: getOrderBillInfoString(bill),
            urgent: String(urgent),
            confirmed: String(confirmed),
            cancelled: String(cancelled),
            done: String(done),
            orderedAt: formatDate(orderedAt),
            expectedAt: formatDate(expectedAt),
        }
    })
}
