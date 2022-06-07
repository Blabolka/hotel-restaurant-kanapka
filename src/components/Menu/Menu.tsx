import React from 'react'

import { Box, Typography } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import TabContainer from '@components/TabContainer/TabContainer'
import Logo from '@components/Logo/Logo'

export default function Menu() {
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <Logo />
            <Box className={classes.menu}>
                <Typography className={classes.menuText}>Menu</Typography>
            </Box>
            <TabContainer />
        </Box>
    )
}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            minWidth: '200px',
            height: 'fit-content',
            background: 'white',
            borderRadius: '30px',
        },
        menu: {
            margin: '42px 0 14px',
            paddingLeft: '30px',
            userSelect: 'none',
        },
        menuText: {
            color: '#8A958D',
            fontFamily: 'Rubik',
            fontSize: '18px',
            fontWeight: 400,
        },
    }),
)
