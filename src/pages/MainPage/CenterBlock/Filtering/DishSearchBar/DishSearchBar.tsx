import React from 'react'

import { useAppDispatch, useAppSelector, useDebounce, useDidMountEffect } from '@hooks'
import { setSearch, getDishesAsync, resetPagination } from '@redux-actions/mainPageActions'

import TextFieldCustom from '@components/Overrides/TextFieldCustom'

import SearchIcon from '@mui/icons-material/Search'
import { InputAdornment } from '@mui/material'

const DishSearchBar = () => {
    const dispatch = useAppDispatch()
    const searchValue = useAppSelector((state) => state.mainPage.search)

    const onInputChange = (event) => {
        dispatch(setSearch(event.target.value))
    }

    const debouncedSearch = useDebounce(searchValue, 300)
    useDidMountEffect(() => {
        if (typeof debouncedSearch === 'string') {
            dispatch(resetPagination())
            dispatch(getDishesAsync())
        }
    }, [debouncedSearch])

    return (
        <TextFieldCustom
            fullWidth
            placeholder="Введіть назву страви..."
            value={searchValue}
            onChange={onInputChange}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon fontSize="small" />
                    </InputAdornment>
                ),
            }}
        />
    )
}

export default DishSearchBar
