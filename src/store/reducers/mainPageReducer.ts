import { MainPageTypes } from '../types'

import { SORTING_SELECT_VALUES } from '@pages/MainPage/CenterBlock/Filtering/DishSortingSelect/dishSortingSelectUtils'

interface initialStateTypes {
    dishes: object[]
    pagination: { page: number }
    search: string
    sortingSelectValue: SORTING_SELECT_VALUES
}

const initialState: initialStateTypes = {
    dishes: [],
    pagination: {
        page: 1,
    },
    search: '',
    sortingSelectValue: SORTING_SELECT_VALUES.ASC,
}

const paginationReducer = (state = initialState, action) => {
    switch (action.type) {
        case MainPageTypes.SET_DISHES: {
            return { ...state, dishes: action.payload }
        }

        case MainPageTypes.SET_PAGINATION: {
            return { ...state, pagination: { page: action.payload } }
        }

        case MainPageTypes.SET_SEARCH: {
            return { ...state, search: action.payload }
        }

        case MainPageTypes.SET_SORTING_SELECT: {
            return { ...state, sortingSelectValue: action.payload }
        }

        default: {
            return state
        }
    }
}

export default paginationReducer
