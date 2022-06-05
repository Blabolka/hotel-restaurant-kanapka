import React from 'react'

import { TextField, TextFieldProps } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

const TextFieldCustom = (props: TextFieldProps) => {
    const classes = useStyles()

    return (
        <TextField
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    )
}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            '& .MuiOutlinedInput-root': {
                height: '40px',
                borderRadius: '20px',
                backgroundColor: '#FFFFFF',

                '& .MuiInputAdornment-root': {
                    marginRight: '16px',
                },
                '& input': {
                    fontSize: '12px',
                },
                '& fieldset': {
                    borderColor: 'rgba(0, 0, 0, 0)', // default
                },
                '&.Mui-focused fieldset': {
                    border: '2px solid #F8AC1B', // focus
                },
            },
        },
    }),
)

export default TextFieldCustom
