import React from 'react'

import { useAppDispatch, useAppSelector } from '@hooks'
import { setPagination } from '@redux-actions/mainPageActions'

import PaginationCustom from '@components/Overrides/PaginationCustom'

const DishPagination = () => {
    const dispatch = useAppDispatch()
    const currentPage = useAppSelector((state) => state.mainPage.pagination.page)

    const onPaginationPageChange = (event, newPage) => {
        if (newPage !== currentPage) {
            dispatch(setPagination(newPage))
        }
    }

    return <PaginationCustom page={currentPage} count={10} onChange={onPaginationPageChange} />
}

export default DishPagination
