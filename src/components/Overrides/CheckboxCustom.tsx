import React from 'react'

import { Checkbox, CheckboxProps } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

export default function CheckboxCustom(props: CheckboxProps) {
    const classes = useStyles()

    return <Checkbox {...props} classes={{ ...props.classes, root: `${classes.root} ${props.classes?.root || ''}` }} />
}

const useStyles = makeStyles(() =>
    createStyles({
        root: {},
    }),
)
