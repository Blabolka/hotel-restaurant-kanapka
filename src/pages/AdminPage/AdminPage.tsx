import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'

import { createStyles, makeStyles } from '@mui/styles'
import { Box } from '@mui/material'
import { TabItem } from '@components/TabContainer/tabContainerUtils'
import NavigationPanel from '@components/NavigationPanel/NavigationPanel'

import { getTabItems, getCurrentTabByPath } from '@pages/AdminPage/adminPageUtils'
import { useAppDispatch } from '@hooks'
import { resetState } from '@redux-actions/pageActions'

export default function AdminPage() {
    const classes = useStyles()
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useAppDispatch()

    const [openedTab, setOpenedTab] = useState<number>(getCurrentTabByPath(location))

    const onTabChange = (event: React.SyntheticEvent, value: number) => {
        setOpenedTab(value)
        navigateByTab(value)
    }

    const tabItems: TabItem[] = getTabItems()

    const navigateByTab = (tab: number): void => {
        switch (tab) {
            case 0:
                navigate('/admin')
                break
            case 1:
                navigate('/admin/orders')
                break
            case 2:
                navigate('/admin/statistics')
                break
            default:
                navigate('/')
        }
    }

    useEffect(() => {
        return () => {
            dispatch(resetState())
        }
    }, [])

    return (
        <Box className={classes.root}>
            <Box className={classes.container}>
                <NavigationPanel title="Управління" items={tabItems} openedTab={openedTab} onTabChange={onTabChange} />
                <Outlet />
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
