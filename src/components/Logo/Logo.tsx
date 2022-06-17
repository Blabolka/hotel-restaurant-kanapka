import { Box, Typography } from '@mui/material'
import logo from '@assets/img/logo.svg'
import React from 'react'
import { createStyles, makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'

export default function Logo() {
    const classes = useStyles()

    return (
        <Link to="/">
            <Box className={classes.root}>
                <img className="" src={logo} alt="Logo" />
                <Box>
                    <Typography className={classes.mainText}>Канапка</Typography>
                    <Typography className={classes.descriptionText}>готель-ресторан</Typography>
                </Box>
            </Box>
        </Link>
    )
}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'flex',
            marginTop: '16px',
            marginLeft: '30px',
            userSelect: 'none',
            pointerEvents: 'none',
            '& img': {
                marginRight: '10px',
            },
        },
        mainText: {
            color: '#F8AC1B',
            fontSize: '20px',
            fontWeight: 600,
            marginTop: '4px',
            lineHeight: '24px',
        },
        descriptionText: {
            color: '#8A958D',
            fontSize: '10px',
            fontWeight: 400,
            lineHeight: '12px',
        },
    }),
)
