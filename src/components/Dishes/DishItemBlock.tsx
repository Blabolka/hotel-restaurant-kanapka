import React from 'react'

import { Box, Stack } from '@mui/material'
import IconButtonCustom from '@components/Overrides/IconButtonCustom'

import TestImage from '@assets/img/test-dish-image.png'
import AddDishIcon from '@assets/img/add-dish-icon.svg'

import { DishInfo } from './dishItemUtils'
interface DishBlockItemProps {
    dishInfo: DishInfo
}

const DishItemBlock = ({ dishInfo }: DishBlockItemProps) => {
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
                    <IconButtonCustom aria-label="add-dish">
                        <img draggable={false} src={AddDishIcon} alt="Add Dish Icon" />
                    </IconButtonCustom>
                </Stack>
            </Stack>
        </Box>
    )
}

export default DishItemBlock
