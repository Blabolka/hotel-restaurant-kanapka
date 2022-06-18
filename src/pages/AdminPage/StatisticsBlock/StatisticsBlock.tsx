import React, { useState } from 'react'

import { Stack } from '@mui/material'

import StatisticsTabs from '@pages/AdminPage/StatisticsBlock/Tabs/StatisticsTabs'
import PopularDishes from '@pages/AdminPage/StatisticsBlock/PopularDishesTab/PopularDishesTab'
import LoadingButtonCustom from '@components/Overrides/LoadingButtonCustom'
import { exportPopularDishesAsync } from '@redux-actions/dishesActions'
import { useAppDispatch } from '@hooks'

export default function StatisticsBlock() {
    const dispatch = useAppDispatch()

    const [currentTab, setCurrentTab] = useState<number>(0)

    const onTabChange = (event, newSelectedTab: number) => {
        setCurrentTab(newSelectedTab)
    }

    const getContentByTabIndex = (tab: number) => {
        switch (tab) {
            default:
                return <PopularDishes />
        }
    }

    const handleExportButton = () => {
        dispatch(exportPopularDishesAsync())
    }

    return (
        <Stack>
            <Stack
                width="100%"
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                marginBottom="20px"
            >
                <StatisticsTabs currentTab={currentTab} onTabChange={onTabChange} />
                <Stack width="240px">
                    <LoadingButtonCustom onClick={handleExportButton}>Експортувати до файлу</LoadingButtonCustom>
                </Stack>
            </Stack>
            {getContentByTabIndex(currentTab)}
        </Stack>
    )
}
