import React from 'react'

import { Box } from '@mui/material'
import DishSearchBar from './Filtering/DishSearchBar'
import DishSortingSelect from './Filtering/DishSortingSelect'
import DishItemsGrid from './DishItemsGrid/DishItemsGrid'

const MainPageCenterBlock = () => {
    return (
        <Box sx={{ width: 760 }}>
            <DishSearchBar />
            <DishSortingSelect />
            <DishItemsGrid />
        </Box>
    )
}

export default MainPageCenterBlock
