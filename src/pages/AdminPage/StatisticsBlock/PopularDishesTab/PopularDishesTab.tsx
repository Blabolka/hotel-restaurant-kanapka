import React, { useEffect, useState } from 'react'

import api from '@api/index'
import { getColumns, getRows } from './popularDishesTabUtils'

import { Stack } from '@mui/material'
import CustomTable, { Data } from '@components/CustomTable/CustomTable'
import PaginationCustom from '@components/Overrides/PaginationCustom'

export default function PopularDishesTab() {
    const [tableColumns] = useState(getColumns())
    const [tableRows, setTableRows] = useState<Data[]>([])

    const [pagination, setPagination] = useState({ page: 1, totalPages: 1 })

    const onPaginationPageChange = (event, newPage) => {
        if (newPage !== pagination.page) {
            setPagination({ ...pagination, page: newPage })
        }
    }

    useEffect(() => {
        api.dishes.getPopularDishesPaginated({ page: pagination.page - 1, size: 5 }).then((response) => {
            const popularDishes = response.data.content
            setTableRows(getRows(popularDishes))
            setPagination({ ...pagination, totalPages: response.data.totalPages })
        })
    }, [pagination.page])

    return (
        <Stack alignItems="center" gap="20px">
            <CustomTable columns={tableColumns} rows={tableRows} />
            <PaginationCustom page={pagination.page} count={pagination.totalPages} onChange={onPaginationPageChange} />
        </Stack>
    )
}
