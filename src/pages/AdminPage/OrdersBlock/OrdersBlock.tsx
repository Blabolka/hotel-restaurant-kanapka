import React, { useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from '@hooks'
import { RequestFilteringParams, getOrdersAsync } from '@redux-actions/ordersActions'

import { Stack } from '@mui/material'
import CustomTable, { Data } from '@components/CustomTable/CustomTable'
import PaginationCustom from '@components/Overrides/PaginationCustom'
import OrdersFiltering from './OrdersFiltering/OrdersFiltering'

import { getColumns, getRows } from './ordersBlockUtils'
import { FilteringGroup, getDefaultRequestFiltering } from './OrdersFiltering/ordersFilteringUtils'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { createStyles, makeStyles } from '@mui/styles'

export default function OrdersBlock() {
    const classes = useStyles()
    const dispatch = useAppDispatch()
    const orders = useAppSelector((state) => state.orders.orders)

    const [tableColumns] = useState(getColumns())
    const [tableRows, setTableRows] = useState<Data[]>([])

    const [pagination, setPagination] = useState({ page: 1, totalPages: 1 })
    const [filteringRequestParams, setFilteringRequestParams] = useState<RequestFilteringParams>(
        getDefaultRequestFiltering(),
    )

    const fetchOrders = (page) => {
        dispatch(
            getOrdersAsync({ page: page - 1, filteringParams: filteringRequestParams }, (totalPages: number) => {
                setPagination({ ...pagination, page, totalPages })
            }),
        )
    }

    const onOrdersFilteringChange = (filteringGroups: FilteringGroup[]) => {
        const newFilteringRequestParams: RequestFilteringParams = filteringGroups.reduce((memo, group) => {
            const checkedValues = group.values.filter((groupValue) => groupValue.checked)
            memo[group.uniqueRequestKey] =
                !checkedValues.length || checkedValues.length === group.values.length ? null : checkedValues[0].value

            return memo
        }, {})

        setFilteringRequestParams(newFilteringRequestParams)
    }

    const onPaginationPageChange = (event, newPage) => {
        if (newPage !== pagination.page) {
            setPagination({ ...pagination, page: newPage })
            fetchOrders(newPage)
        }
    }

    const createCheckmarks = (value: boolean): JSX.Element =>
        value ? <CheckRoundedIcon className={classes.icon} /> : <CloseRoundedIcon className={classes.icon} />

    useEffect(() => {
        fetchOrders(1)
    }, [filteringRequestParams])

    useEffect(() => {
        setTableRows(getRows(orders, createCheckmarks))
    }, [orders])

    return (
        <Stack flexDirection="row" gap="20px" width="100%" height="100%">
            <Stack alignItems="center" gap="20px" width="100%">
                {orders.length ? (
                    <>
                        <CustomTable columns={tableColumns} rows={tableRows} />
                        <PaginationCustom
                            page={pagination.page}
                            count={pagination.totalPages}
                            onChange={onPaginationPageChange}
                        />
                    </>
                ) : null}
            </Stack>
            <OrdersFiltering onChange={onOrdersFilteringChange} />
        </Stack>
    )
}

const useStyles = makeStyles(() =>
    createStyles({
        icon: {
            color: '#8A958D',
        },
    }),
)
