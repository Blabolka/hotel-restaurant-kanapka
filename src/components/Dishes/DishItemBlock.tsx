import React from 'react'

import { Box, Stack } from '@mui/material'
import IconButtonCustom from '@components/Overrides/IconButtonCustom'

import { createStyles, makeStyles } from '@mui/styles'

import AddDishIcon from '@assets/img/add-dish-icon.svg'

import { DishInfo } from './dishItemUtils'
interface DishBlockItemProps {
    dishInfo: DishInfo
}

export default function DishItemBlock({ dishInfo }: DishBlockItemProps) {
    const classes = useStyles()

    return (
        <Box
            sx={{
                width: 240,
                backgroundColor: '#FFFFFF',
                p: '20px',
                borderRadius: '20px',
            }}
        >
            <Stack height="100%" direction="column" justifyContent="space-between">
                <Stack gap={1}>
                    <Stack className={classes.imageContainer}>
                        <img src={dishInfo.imagePath} alt={`${dishInfo.name} Image`} />
                    </Stack>
                    <Box sx={{ minHeight: 34 }}>
                        <span className="font-weight-medium">{dishInfo.name}</span>
                    </Box>
                    <Box sx={{ minHeight: 36, lineHeight: '12px' }}>
                        <span className="color-secondary font-size-10px">{dishInfo.description}</span>
                    </Box>
                </Stack>
                <Stack direction="row" justifyContent="space-between" alignItems="center" marginTop={1}>
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

const useStyles = makeStyles(() =>
    createStyles({
        imageContainer: {
            height: 160,
            alignItems: 'center',
            justifyContent: 'center',

            '& img': {
                height: '100%',
                maxWidth: '100%',
            },
        },
    }),
)
