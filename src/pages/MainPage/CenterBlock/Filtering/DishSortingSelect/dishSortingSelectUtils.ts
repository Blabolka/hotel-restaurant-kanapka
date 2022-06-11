export enum SORTING_SELECT_VALUES {
    ASC = 'asc',
    DESC = 'desc',
}

export const sortingMenuItems = [
    {
        value: SORTING_SELECT_VALUES.ASC,
        name: 'від дешевих до дорогих',
    },
    {
        value: SORTING_SELECT_VALUES.DESC,
        name: 'від дорогих до дешевих',
    },
]
