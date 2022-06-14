import { TabItem } from '@components/TabContainer/tabContainerUtils'
import menu from '@assets/img/menu.svg'
import order from '@assets/img/order.svg'
import statistics from '@assets/img/statistics.svg'

export const getTabItems = (): TabItem[] => [
    {
        image: menu,
        alt: 'Menu',
        iconPosition: 'start',
        label: 'Меню',
    },
    {
        image: order,
        alt: 'Order',
        iconPosition: 'start',
        label: 'Замовлення',
    },
    {
        image: statistics,
        alt: 'Statistics',
        iconPosition: 'start',
        label: 'Статистика',
    },
]
