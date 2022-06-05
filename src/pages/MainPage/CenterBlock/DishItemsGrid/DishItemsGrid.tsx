import React from 'react'

import { Stack } from '@mui/material'
import DishItemBlock from '@components/Dishes/DishItemBlock'

const MOCKS = [
    {
        imagePath: 'test',
        name: 'Курячі шашлички',
        description: '5 шматочків курячої грудки маринують і приправляють 24 години, обсмажені на шампурі.',
        weight: 450,
        price: 230,
    },
    {
        imagePath: 'test',
        name: 'Салат зі смаженими кальмарами',
        description: '5 шматочків курячої грудки маринують і приправляють 24 години, обсмажені на шампурі.',
        weight: 450,
        price: 230,
    },
    {
        imagePath: 'test',
        name: 'Курячі шашлички',
        description: '5 шматочків курячої грудки маринують і приправляють 24 години, обсмажені на шампурі.',
        weight: 450,
        price: 230,
    },
    {
        imagePath: 'test',
        name: 'Курячі шашлички',
        description: '5 шматочків курячої грудки маринують і приправляють 24 години, обсмажені на шампурі.',
        weight: 450,
        price: 230,
    },
    {
        imagePath: 'test',
        name: 'Курячі шашлички',
        description: '5 шматочків курячої грудки маринують і приправляють 24 години, обсмажені на шампурі.',
        weight: 450,
        price: 230,
    },
    {
        imagePath: 'test',
        name: 'Курячі шашлички',
        description: '5 шматочків курячої грудки маринують і приправляють 24 години, обсмажені на шампурі.',
        weight: 450,
        price: 230,
    },
]

const DishItemsGrid = () => {
    return (
        <Stack direction="row" flexWrap="wrap" gap="20px">
            {MOCKS.map((item, index) => {
                return <DishItemBlock key={index} dishInfo={item} />
            })}
        </Stack>
    )
}

export default DishItemsGrid
