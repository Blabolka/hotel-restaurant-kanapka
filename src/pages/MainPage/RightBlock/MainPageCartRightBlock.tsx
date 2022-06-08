import React from 'react'

import { Stack } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

import DishItemsCart from './DishItemsCart/DishItemsCart'
import CartSum from './CartSum/CartSum'

export default function MainPageCartRightBlock() {
    const classes = useStyles()

    return (
        <Stack className={classes.root}>
            <DishItemsCart />
            <CartSum />
        </Stack>
    )
}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            minWidth: '360px',
            padding: '20px',
            background: 'white',
            borderRadius: '30px',
            gap: '25px',
        },
    }),
)
