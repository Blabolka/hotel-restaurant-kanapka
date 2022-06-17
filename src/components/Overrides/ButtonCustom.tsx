import { Button, ButtonProps } from '@mui/material'
import React from 'react'
import { createStyles, makeStyles } from '@mui/styles'

export default function ButtonCustom(props: ButtonProps) {
    const classes = useStyles()

    return <Button {...props} classes={{ ...props.classes, root: `${classes.root} ${props.classes?.root || ''}` }} />
}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            color: '#000000',
            borderRadius: '20px',
            textTransform: 'none',
            boxShadow: 'none',
            '&:hover': {
                boxShadow: 'none',
            },
            '&.MuiButton-contained': {
                backgroundColor: '#F8AC1B',
                '&:hover': {
                    backgroundColor: '#D1D1D1',
                },
            },
            '&.MuiButton-outlined': {
                borderColor: '#F8AC1B',
                '&:hover': {
                    backgroundColor: '#F8AC1B',
                },
            },
        },
    }),
)
