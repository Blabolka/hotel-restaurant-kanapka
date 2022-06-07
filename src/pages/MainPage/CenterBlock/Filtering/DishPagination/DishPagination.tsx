import React from 'react'

import { useAppDispatch, useAppSelector } from '@hooks'
import { setPagination, getDishesAsync } from '@redux-actions/mainPageActions'

import PaginationCustom from '@components/Overrides/PaginationCustom'

const DishPagination = () => {
    const dispatch = useAppDispatch()
    const pagination = useAppSelector((state) => state.mainPage.pagination)

    const onPaginationPageChange = (event, newPage) => {
        if (newPage !== pagination.page) {
            dispatch(setPagination({ ...pagination, page: newPage }))
            dispatch(getDishesAsync())
        }
    }

    return pagination.totalPages > 0 ? (
        <PaginationCustom page={pagination.page} count={pagination.totalPages} onChange={onPaginationPageChange} />
    ) : null
}

export default DishPagination