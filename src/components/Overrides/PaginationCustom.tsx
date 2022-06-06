import React from 'react'

import { Pagination, PaginationProps } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

const PaginationCustom = (props: PaginationProps) => {
    const classes = useStyles()

    return <Pagination classes={{ root: classes.root }} {...props} />
}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            '& .Mui-selected': {
                backgroundColor: '#F8AC1B',
            },
            '& .MuiPaginationItem-root': {
                fontSize: '16px',
            },
        },
    }),
)

export default PaginationCustom
