import React from 'react'

import { Stack } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { createStyles, makeStyles } from '@mui/styles'

import RemoveDishFromCartImage from '@assets/img/remove-cart-dish.svg'

import { DishCartInfo } from './dishItemUtils'
interface DishItemCartProps {
    dishInfo: DishCartInfo
    onCounterDecreaseClick?: (id: number) => void
    onCounterIncreaseClick?: (id: number) => void
    onDishItemRemoveClick?: (id: number) => void
}

export default function DishItemCart({
    dishInfo,
    onCounterDecreaseClick = () => false,
    onCounterIncreaseClick = () => false,
    onDishItemRemoveClick = () => false,
}: DishItemCartProps) {
    const classes = useStyles()

    return (
        <Stack flexDirection="row" gap="10px">
            <Stack className={classes.imageContainer}>
                <img src={dishInfo.imagePath} alt={`${dishInfo.name} Image`} />
            </Stack>
            <Stack flexDirection="column" gap="8px" width="100%" marginTop="6px">
                <span>{dishInfo.name}</span>
                <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
                    <Stack className={classes.dishCountChanger}>
                        <IconButton
                            className={classes.colorPrimary}
                            size="small"
                            sx={{ p: 0 }}
                            onClick={() => onCounterDecreaseClick(dishInfo.id)}
                        >
                            <RemoveIcon fontSize="small" />
                        </IconButton>
                        <span>{dishInfo.count}</span>
                        <IconButton
                            className={classes.colorPrimary}
                            size="small"
                            sx={{ p: 0 }}
                            onClick={() => onCounterIncreaseClick(dishInfo.id)}
                        >
                            <AddIcon fontSize="small" />
                        </IconButton>
                    </Stack>
                    <Stack flexDirection="row" gap="16px" alignItems="center">
                        <span>₴{dishInfo.price}</span>
                        <IconButton sx={{ p: 0 }} onClick={() => onDishItemRemoveClick(dishInfo.id)}>
                            <img src={RemoveDishFromCartImage} alt="Remove Dish Icon" />
                        </IconButton>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

const useStyles = makeStyles(() =>
    createStyles({
        imageContainer: {
            minWidth: '80px',
            maxWidth: '80px',
            maxHeight: '60px',
            alignItems: 'center',
            justifyContent: 'center',

            '& img': {
                height: '100%',
                maxWidth: '100%',
                userSelect: 'none',
            },
        },
        dishCountChanger: {
            flexDirection: 'row',
            gap: '4px',
            alignItems: 'center',
            backgroundColor: '#F8AC1B',
            borderRadius: '20px',

            '& .MuiButtonBase-root': {
                backgroundColor: '#FFFFFF',
                transform: 'scale(0.8)',
            },

            '& span': {
                color: '#FFFFFF',
                fontSize: '10px',
            },
        },
        colorPrimary: {
            color: '#F8AC1B',
        },
    }),
)
