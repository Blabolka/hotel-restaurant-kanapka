import React from 'react'

import LoadingButton, { LoadingButtonProps } from '@mui/lab/LoadingButton'
import { createStyles, makeStyles } from '@mui/styles'

export default function LoadingButtonCustom(props: LoadingButtonProps) {
    const classes = useStyles()

    return (
        <LoadingButton
            {...props}
            classes={{ ...props.classes, root: `${classes.root} ${props.classes?.root || ''}` }}
        />
    )
}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            color: '#000000',
            backgroundColor: '#F8AC1B',
            borderRadius: '20px',
            textTransform: 'none',
        },
    }),
)
