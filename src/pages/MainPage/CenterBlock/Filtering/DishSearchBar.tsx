import React from 'react'

import TextFieldCustom from '@components/Overrides/TextFieldCustom'

import SearchIcon from '@mui/icons-material/Search'
import { InputAdornment } from '@mui/material'

const DishSearchBar = () => {
    return (
        <TextFieldCustom
            placeholder="Введіть назву страви..."
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
