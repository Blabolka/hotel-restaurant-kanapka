import React, { useState } from 'react'
import { createStyles, makeStyles } from '@mui/styles'
import { Box } from '@mui/material'
import NavigationPanel from '@components/NavigationPanel/NavigationPanel'
import CenterBlock from '@pages/AdminPage/CenterBlock/CenterBlock'
import { TabItem } from '@components/TabContainer/tabContainerUtils'
import { getTabItems } from '@pages/AdminPage/adminPageUtils'

export default function AdminPage() {
    const classes = useStyles()

    const [openedTab, setOpenedTab] = useState(0)

    const onTabChange = (event: React.SyntheticEvent, value: number) => {
        setOpenedTab(value)
    }

    const tabItems: TabItem[] = getTabItems()

    return (
        <Box className={classes.root}>
            <Box className={classes.container}>
                <NavigationPanel title="Управління" items={tabItems} openedTab={openedTab} onTabChange={onTabChange} />
                <CenterBlock />
                <Box className={classes.orderContainer}>Right side</Box>
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
        orderContainer: {
            minWidth: '360px',
            background: 'white',
            borderRadius: '30px',
        },
    }),
)
