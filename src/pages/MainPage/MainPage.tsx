import React from 'react'

import CenterBlock from './CenterBlock/MainPageCenterBlock'
import { createStyles, makeStyles } from '@mui/styles'
import { Box } from '@mui/material'
import Menu from '@components/Menu/Menu'

export default function MainPage() {
    const classes = useStyles()

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
