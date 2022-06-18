import React from 'react'

import { useAppDispatch, useAppSelector } from '@hooks'
import { setPagination, getDishesAsync } from '@redux-actions/pageActions'

import PaginationCustom from '@components/Overrides/PaginationCustom'

interface DishPagination {
    disabled?: boolean
}

const DishPagination = ({ disabled }: DishPagination) => {
    const dispatch = useAppDispatch()
    const pagination = useAppSelector((state) => state.page.pagination)

    const onPaginationPageChange = (event, newPage) => {
        if (newPage !== pagination.page) {
            dispatch(setPagination({ ...pagination, page: newPage }))
            dispatch(getDishesAsync())
        }
    }

    return pagination.totalPages > 0 ? (
        <PaginationCustom
            page={pagination.page}
            count={pagination.totalPages}
            onChange={onPaginationPageChange}
            disabled={disabled || false}
        />
    ) : null
}

export default DishPagination
