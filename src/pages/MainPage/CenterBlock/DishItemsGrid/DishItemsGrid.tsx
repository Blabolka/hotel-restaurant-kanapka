import React from 'react'

import { useAppSelector } from '@hooks'

import { Stack } from '@mui/material'
import DishItemBlock from '@components/Dishes/DishItemBlock'
import { DishInfo } from '@components/Dishes/dishItemUtils'

const DishItemsGrid = () => {
    const dishes: DishInfo[] = useAppSelector((state) => state.mainPage.dishes)

    return (
        <Stack direction="row" flexWrap="wrap" gap="20px">
            {dishes.map((item, index) => {
                return <DishItemBlock key={index} dishInfo={item} />
            })}
        </Stack>
    )
}

export default DishItemsGrid
