import React from 'react'
import { Tabs, TabsProps } from '@mui/material'

import { createStyles, makeStyles } from '@mui/styles'

export default function TabsOverrides(props: TabsProps) {
    const classes = useStyles()

    return <Tabs {...props} classes={{ root: classes.root }} />
}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            '& .MuiButtonBase-root': {
                color: '#000000',
                textTransform: 'none',
                backgroundColor: '#FFFFFF',

                '&:first-child': {
                    borderTopLeftRadius: '20px',
                },
                '&:last-child': {
                    borderTopRightRadius: '20px',
                },
            },
            '& .MuiTabs-indicator': {
                backgroundColor: '#F8AC1B',
            },
        },
    }),
)
