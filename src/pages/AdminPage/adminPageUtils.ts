import { TabItem } from '@components/TabContainer/tabContainerUtils'
import menu from '@assets/img/menu.svg'
// import category from '@assets/img/category.svg'
import order from '@assets/img/order.svg'
import statistics from '@assets/img/statistics.svg'

export const getTabItems = (): TabItem[] => [
    {
        image: menu,
        alt: 'Menu',
        iconPosition: 'start',
        label: 'Меню',
    },
    // {
    //     image: category,
    //     alt: 'Category',
    //     iconPosition: 'start',
    //     label: 'Категорії',
    // },
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
