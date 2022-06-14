import React, { useState } from 'react'
import { createStyles, makeStyles } from '@mui/styles'
import { Box } from '@mui/material'
import { TabItem } from '@components/TabContainer/tabContainerUtils'
import { getTabItems } from '@pages/AdminPage/adminPageUtils'

import NavigationPanel from '@components/NavigationPanel/NavigationPanel'
import MenuBlock from '@pages/AdminPage/MenuBlock/MenuBlock'
import StatisticsBlock from '@pages/AdminPage/StatisticsBlock/StatisticsBlock'

export default function AdminPage() {
    const classes = useStyles()

    const [openedTab, setOpenedTab] = useState(0)

    const onTabChange = (event: React.SyntheticEvent, value: number) => {
        setOpenedTab(value)
    }

    const tabItems: TabItem[] = getTabItems()

    const getMainBlockByTabIndex = (tab: number) => {
        switch (tab) {
            case 0:
                return <MenuBlock />
            case 1:
                return null
            case 2:
                return <StatisticsBlock />
        }
    }

    return (
        <Box className={classes.root}>
            <Box className={classes.container}>
                <NavigationPanel title="Управління" items={tabItems} openedTab={openedTab} onTabChange={onTabChange} />
                {getMainBlockByTabIndex(openedTab)}
            </Box>
        </Box>
    )
}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: '1360px',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '40px',
            paddingBottom: '40px',
        },
        container: {
            display: 'flex',
            gap: '20px',
        },
    }),
)
