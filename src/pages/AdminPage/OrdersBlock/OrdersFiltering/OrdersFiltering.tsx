import React, { useState } from 'react'

import { Stack } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

import { FilteringParams, getDefaultFilteringState } from './ordersFilteringUtils'

interface OrdersFilteringProps {
    onChange: () => FilteringParams
}

export default function OrdersFiltering({ onChange }: OrdersFilteringProps) {
    const [filtering, setFiltering] = useState(getDefaultFilteringState())
    const classes = useStyles()

    return (
        <Stack className={classes.container}>
            <span className="font-size-20px color-secondary">Фільтрація</span>
        </Stack>
    )
}

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            minWidth: '250px',
            padding: '20px',
            borderRadius: '20px',
            backgroundColor: 'white',
        },
    }),
)
