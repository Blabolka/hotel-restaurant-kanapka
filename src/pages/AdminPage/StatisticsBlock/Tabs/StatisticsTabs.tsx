import React from 'react'
import { Box, Tabs, Tab } from '@mui/material'

import { STATISTICS_TABS } from './statisticsTabsUtils'
// import { createStyles, makeStyles } from '@mui/styles'

interface StatisticsTabsProps {
    currentTab: number
    onTabChange: (event, newSelectedTab: number) => void
}

export default function StatisticsTabs({ currentTab, onTabChange }: StatisticsTabsProps) {
    return (
        <Box marginBottom="20px">
            <Tabs value={currentTab} onChange={onTabChange}>
                {STATISTICS_TABS.map((item, index) => {
                    return <Tab key={index} label={item.label} />
                })}
            </Tabs>
        </Box>
    )
}

// const useStyles = makeStyles(() =>
//     createStyles({
//         root: {
//             color: '#000000',
//             borderRadius: '20px',
//             textTransform: 'none',
//
//             '&.MuiButton-contained': {
//                 backgroundColor: '#F8AC1B',
//             },
//             '&.MuiButton-outlined': {
//                 borderColor: '#F8AC1B',
//             },
//         },
//     }),
// )
