import React, { useState } from 'react'

import { Stack } from '@mui/material'

import StatisticsTabs from '@pages/AdminPage/StatisticsBlock/Tabs/StatisticsTabs'
import PopularDishes from '@pages/AdminPage/StatisticsBlock/PopularDishesTab/PopularDishesTab'

export default function StatisticsBlock() {
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

    return (
        <Stack>
            <StatisticsTabs currentTab={currentTab} onTabChange={onTabChange} />
            {getContentByTabIndex(currentTab)}
        </Stack>
    )
}
