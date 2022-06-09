import React from 'react'

import { Stack } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

import DishItemsCart from './DishItemsCart/DishItemsCart'
import Delivery from '@pages/MainPage/RightBlock/Delivery/Delivery'
import CartSum from './CartSum/CartSum'
import OrderConfirm from '@pages/MainPage/RightBlock/OrderConfirm/OrderConfirm'

export default function MainPageCartRightBlock() {
    const classes = useStyles()

    return (
        <Stack className={classes.root}>
            <DishItemsCart />
            <Delivery />
            <CartSum />
            <OrderConfirm />
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
