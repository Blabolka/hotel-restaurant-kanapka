import infinity from '@assets/img/infinity.svg'
import lunch from '@assets/img/lunch.svg'
import soup from '@assets/img/soup.svg'
import sandwich from '@assets/img/sandwich.svg'
import pizza from '@assets/img/pizza.svg'
import salad from '@assets/img/salad.svg'
import dessert from '@assets/img/dessert.svg'
import drink from '@assets/img/drink.svg'
import { TabItem } from '@components/TabContainer/tabContainerUtils'

export const PAGINATION_SIZE_PER_PAGE = 6

export const getTabItems = (): TabItem[] => [
    {
        image: infinity,
        alt: 'All',
        iconPosition: 'start',
        label: 'Всі',
    },
    {
        image: lunch,
        alt: 'Lunch',
        iconPosition: 'start',
        label: 'Ланчі',
    },
    {
        image: soup,
        alt: 'Soup',
        iconPosition: 'start',
        label: 'Супи',
    },
    {
        image: sandwich,
        alt: 'Sandwich',
        iconPosition: 'start',
        label: 'Канапки',
    },
    {
        image: pizza,
        alt: 'Pizza',
        iconPosition: 'start',
        label: 'Піцка',
    },
    {
        image: salad,
        alt: 'Salad',
        iconPosition: 'start',
        label: 'Салати',
    },
    {
        image: dessert,
        alt: 'Dessert',
        iconPosition: 'start',
        label: 'Десерти',
    },
    {
        image: drink,
        alt: 'Drink',
        iconPosition: 'start',
        label: 'Напої',
    },
]
