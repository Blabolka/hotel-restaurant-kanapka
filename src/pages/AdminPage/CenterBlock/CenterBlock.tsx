import React from 'react'
import { Stack } from '@mui/material'
import DishSearchBar from '@pages/MainPage/CenterBlock/Filtering/DishSearchBar/DishSearchBar'
import DishSortingSelect from '@pages/MainPage/CenterBlock/Filtering/DishSortingSelect/DishSortingSelect'
import FormRow from '@pages/AdminPage/FormRow/FormRow'

export default function CenterBlock() {
    return (
        <Stack direction="column" gap="30px" alignItems="center">
            <Stack direction="column" gap="20px" minWidth={760}>
                <Stack direction="row" gap="20px">
                    <DishSearchBar />
                    <DishSortingSelect />
                </Stack>
                <FormRow />
            </Stack>
        </Stack>
    )
}
