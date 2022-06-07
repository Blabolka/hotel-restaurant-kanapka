import React from 'react'

import { IconButton } from '@mui/material'
import { IconButtonProps } from '@mui/material/IconButton/IconButton'

import { createStyles, makeStyles } from '@mui/styles'

export default function IconButtonCustom(props: IconButtonProps) {
    const classes = useStyles()

    return <IconButton {...props} classes={{ root: classes.root }} />
}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            padding: '7px',
            backgroundColor: '#F8AC1B',
        },
    }),
)
