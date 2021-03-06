import React from 'react'
import { Box, Stack } from '@mui/material'

import TestImage from '@assets/img/image.png'

interface DishInfo {
    imagePath: string
    name: string
    description: string
    weight: number
    price: number
}

interface DishBlockItemProps {
    dishInfo: DishInfo
}

const DishBlockItem = ({ dishInfo }: DishBlockItemProps) => {
    return (
        <Box
            sx={{
                width: 240,
                backgroundColor: '#FFFFFF',
                px: '20px',
                pb: '15px',
                borderRadius: '20px',
            }}
        >
            <Stack direction="column" spacing={1}>
                <img src={TestImage} alt="Test image" />
                <Box sx={{ height: 34 }}>
                    <span className="font-weight-medium">{dishInfo.name}</span>
                </Box>
                <span className="color-secondary font-size-10px">{dishInfo.description}</span>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <span className="color-secondary font-size-10px">{dishInfo.weight} г</span>
                    <span className="color-primary font-size-20px font-weight-medium">
                        ₴{dishInfo.price.toFixed(1)}
                    </span>
                    <button>+</button>
                </Stack>
            </Stack>
        </Box>
    )
}

export default DishBlockItem
