import { Location } from 'react-router-dom'

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

export const getCurrentTabByPath = (location: Location): number => {
    const lastPartOfPath = location.pathname.split('/').pop()
    switch (lastPartOfPath) {
        case 'orders':
            return 1
        case 'statistics':
            return 2
        default:
            return 0
    }
}
