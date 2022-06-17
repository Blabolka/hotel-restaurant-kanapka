import React, { useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from '@hooks'
import { getOrdersAsync } from '@redux-actions/ordersActions'

import { Stack } from '@mui/material'
import CustomTable, { Data } from '@components/CustomTable/CustomTable'
import PaginationCustom from '@components/Overrides/PaginationCustom'
import OrdersFiltering from './OrdersFiltering/OrdersFiltering'

import { getColumns, getRows } from './ordersBlockUtils'

export default function OrdersBlock() {
    const dispatch = useAppDispatch()
    const orders = useAppSelector((state) => state.orders.orders)

    const [tableColumns] = useState(getColumns())
    const [tableRows, setTableRows] = useState<Data[]>([])

    const [pagination, setPagination] = useState({ page: 1, totalPages: 1 })

    const onPaginationPageChange = (event, newPage) => {
        if (newPage !== pagination.page) {
            setPagination({ ...pagination, page: newPage })
            fetchOrders(newPage)
        }
    }

    const fetchOrders = (page) => {
        dispatch(
            getOrdersAsync({ page: page - 1 }, (totalPages: number) => {
                setPagination({ ...pagination, page, totalPages })
            }),
        )
    }

    useEffect(() => {
        fetchOrders(pagination.page)
    }, [])
    useEffect(() => {
        setTableRows(getRows(orders))
    }, [orders])

    return (
        <Stack flexDirection="row" gap="20px" width="100%">
            <Stack alignItems="center" gap="20px" width="100%">
                <CustomTable columns={tableColumns} rows={tableRows} />
                <PaginationCustom
                    page={pagination.page}
                    count={pagination.totalPages}
                    onChange={onPaginationPageChange}
                />
            </Stack>
            <OrdersFiltering />
        </Stack>
    )
}
