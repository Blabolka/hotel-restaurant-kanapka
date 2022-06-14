import React from 'react'
import { Box, Tab } from '@mui/material'

import { STATISTICS_TABS } from './statisticsTabsUtils'
import TabsOverrides from '@components/Overrides/TabsOverrides'

interface StatisticsTabsProps {
    currentTab: number
    onTabChange: (event, newSelectedTab: number) => void
}

export default function StatisticsTabs({ currentTab, onTabChange }: StatisticsTabsProps) {
    return (
        <Box>
            <TabsOverrides value={currentTab} onChange={onTabChange}>
                {STATISTICS_TABS.map((item, index) => {
                    return <Tab key={index} label={item.label} />
                })}
            </TabsOverrides>
        </Box>
    )
}
