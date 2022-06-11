import React from 'react'

import { useAppDispatch, useAppSelector } from '@hooks'
import { setSortingSelect, resetPagination, getDishesAsync } from '@redux-actions/mainPageActions'

import { FormControl, MenuItem } from '@mui/material'
import SelectCustom from '@components/Overrides/SelectCustom'

import { sortingMenuItems } from './dishSortingSelectUtils'

export default function DishSortingSelect() {
    const dispatch = useAppDispatch()
    const sortingSelectValue = useAppSelector((state) => state.mainPage.sortingSelectValue)

    const onSelectChange = (event) => {
        dispatch(setSortingSelect(event.target.value))
        dispatch(resetPagination())
        dispatch(getDishesAsync())
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
