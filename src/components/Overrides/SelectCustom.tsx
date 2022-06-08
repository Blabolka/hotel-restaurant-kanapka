import React from 'react'

import { Select, SelectProps } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import { ExpandMore } from '@mui/icons-material'

export default function SelectCustom(props: SelectProps) {
    const classes = useStyles()

    return (
        <Select
            {...props}
            className={classes.root}
            IconComponent={ExpandMore}
            MenuProps={{ classes: { root: classes.menu } }}
        />
    )
}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            height: '40px',
            borderRadius: '20px',
            backgroundColor: '#FFFFFF',
            padding: '11px 0 11px 12px',

            '& .MuiOutlinedInput-input': {
                fontSize: '14px',
                color: '#8A958D',
            },
            '& svg': {
                marginRight: '10px',
            },
            '& fieldset': {
                borderColor: 'rgba(0, 0, 0, 0)', // default
            },
            '&.Mui-focused fieldset': {
                border: '2px solid #F8AC1B !important', // focus
            },
        },
        menu: {
            '& .MuiPopover-paper': {
                borderRadius: '20px',
            },
            '& .MuiMenuItem-root': {
                fontSize: '14px',
            },
            '& .MuiMenuItem-root.Mui-selected': {
                backgroundColor: '#ffe8bc',
            },
        },
    }),
)
