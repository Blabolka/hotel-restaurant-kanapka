import React from 'react'

import { MenuItem } from '@mui/material'

import SelectCustom from '@components/Overrides/SelectCustom'

const sortingMenuItems = [
    {
        value: 'fromCheapToExpensive',
        name: 'Від дешевих до дорогих',
    },
    {
        value: 'fromExpensiveToCheap',
        name: 'Від дорогих до дешевих',
    },
]

const DishSortingSelect = () => {
    return (
        <SelectCustom value={sortingMenuItems[0].value}>
            {sortingMenuItems.map((item, index) => {
                return (
                    <MenuItem key={index} value={item.value}>
                        {item.name}
                    </MenuItem>
                )
            })}
        </SelectCustom>
    )
}

export default DishSortingSelect
