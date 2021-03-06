import React, { useEffect, useState } from 'react'

import { useAppDispatch } from '@hooks'
import {
    resetState,
    setDishesType,
    getDishesAsync,
    resetPagination,
    getCartDishesFromLocalStorageAsync,
} from '@redux-actions/pageActions'

import { Box } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

import NavigationPanel from '@components/NavigationPanel/NavigationPanel'
import { dishTypes, TabItem } from '@components/TabContainer/tabContainerUtils'
import { getTabItems } from '@pages/MainPage/mainPageUtils'
import MainPageCenterBlock from './CenterBlock/MainPageCenterBlock'
import MainPageCartRightBlock from './RightBlock/MainPageCartRightBlock'

export default function MainPage() {
    const classes = useStyles()
    const dispatch = useAppDispatch()

    const [openedTab, setOpenedTab] = useState(0)

    useEffect(() => {
        dispatch(getDishesAsync())
        dispatch(getCartDishesFromLocalStorageAsync())

        return () => {
            dispatch(resetState())
        }
    }, [])

    const onTabChange = (event: React.SyntheticEvent, value: number) => {
        setOpenedTab(value)
        dispatch(setDishesType(dishTypes[value]))
        dispatch(resetPagination())
        dispatch(getDishesAsync())
    }

    const tabItems: TabItem[] = getTabItems()

    return (
        <Box className={classes.root}>
            <Box className={classes.container}>
                <NavigationPanel title="Меню" items={tabItems} openedTab={openedTab} onTabChange={onTabChange} />
                <MainPageCenterBlock />
                <MainPageCartRightBlock />
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
