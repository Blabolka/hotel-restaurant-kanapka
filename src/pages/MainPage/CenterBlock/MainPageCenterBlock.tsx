import React from 'react'

import { Stack } from '@mui/material'
import DishSearchBar from './Filtering/DishSearchBar/DishSearchBar'
import DishSortingSelect from './Filtering/DishSortingSelect/DishSortingSelect'
import DishItemsGrid from './DishItemsGrid/DishItemsGrid'
import DishPagination from './Filtering/DishPagination/DishPagination'

const MainPageCenterBlock = () => {
    return (
        <Stack direction="column" gap="30px" alignItems="center">
            <Stack direction="column" gap="20px">
                <Stack direction="row" gap="20px">
                    <DishSearchBar />
                    <DishSortingSelect />
                </Stack>
                <DishItemsGrid />
            </Stack>
            <DishPagination />
        </Stack>
    )
}

export default MainPageCenterBlock
