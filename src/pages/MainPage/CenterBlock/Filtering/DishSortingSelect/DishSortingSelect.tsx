import React from 'react'

import { useAppDispatch, useAppSelector } from '@hooks'
import { setSortingSelect } from '@redux-actions/mainPageActions'

import { FormControl, MenuItem } from '@mui/material'
import SelectCustom from '@components/Overrides/SelectCustom'

import { SORTING_SELECT_VALUES } from './dishSortingSelectUtils'

export default function DishSortingSelect() {
    const dispatch = useAppDispatch()
    const sortingSelectValue = useAppSelector((state) => state.mainPage.sortingSelectValue)

    const onSelectChange = (event) => {
        dispatch(setSortingSelect(event.target.value))
    }

    return (
        <FormControl sx={{ minWidth: 240 }}>
            <SelectCustom value={sortingSelectValue} onChange={onSelectChange}>
                {sortingMenuItems.map((item, index) => {
                    return (
                        <MenuItem key={index} value={item.value}>
                            {item.name}
                        </MenuItem>
                    )
                })}
            </SelectCustom>
        </FormControl>
    )
}

const sortingMenuItems = [
    {
        value: SORTING_SELECT_VALUES.ASC,
        name: 'Від дешевих до дорогих',
    },
    {
        value: SORTING_SELECT_VALUES.DESC,
        name: 'Від дорогих до дешевих',
    },
]
