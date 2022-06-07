export enum SORTING_SELECT_VALUES {
    ASC = 'asc',
    DESC = 'desc',
}

export const sortingMenuItems = [
    {
        value: SORTING_SELECT_VALUES.ASC,
        name: 'Від дешевих до дорогих',
    },
    {
        value: SORTING_SELECT_VALUES.DESC,
        name: 'Від дорогих до дешевих',
    },
]
