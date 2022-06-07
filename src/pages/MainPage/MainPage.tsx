import React, { useEffect } from 'react'

import { useAppDispatch } from '@hooks'
import { getDishesAsync } from '@redux-actions/mainPageActions'

import CenterBlock from './CenterBlock/MainPageCenterBlock'
import { createStyles, makeStyles } from '@mui/styles'
import { Box } from '@mui/material'
import Menu from '@components/Menu/Menu'

export default function MainPage() {
    const classes = useStyles()
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getDishesAsync())
    }, [])

    return (
        <Box className={classes.root}>
            <Box className={classes.container}>
                <Menu />
                <CenterBlock />
                <Box className={classes.orderContainer}>Right side</Box>
            </Box>
        </Box>
    )
}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: '1360px',
            margin: '40px auto',
        },
        container: {
            display: 'flex',
            gap: '20px',
        },
        orderContainer: {
            minWidth: '360px',
            background: 'white',
            borderRadius: '30px',
        },
    }),
)
