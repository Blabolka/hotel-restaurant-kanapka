import React from 'react'

import { Stack } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

import DishItemsCart from './DishItemsCart/DishItemsCart'

export default function MainPageCartRightBlock() {
    const classes = useStyles()

    return (
        <Stack className={classes.root}>
            <DishItemsCart />
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
        },
    }),
)
