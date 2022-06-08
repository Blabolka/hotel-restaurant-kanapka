import React from 'react'

import { Stack } from '@mui/material'

import BasketIcon from '@assets/img/basket-icon.svg'
import { createStyles, makeStyles } from '@mui/styles'

export default function EmptyState() {
    const classes = useStyles()

    return (
        <Stack className={classes.root}>
            <Stack className={classes.container}>
                <img className={classes.imageContainer} src={BasketIcon} alt="Empty Cart Image" />
                <span className="color-secondary">Додай сюди все, що захочеш</span>
            </Stack>
        </Stack>
    )
}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: '100%',
            height: '100%',
            opacity: 0.5,
            alignItems: 'center',
            justifyContent: 'center',
        },
        container: {
            maxWidth: '130px',
            gap: '18px',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
        },
        imageContainer: {
            maxWidth: '80px',
        },
    }),
)
