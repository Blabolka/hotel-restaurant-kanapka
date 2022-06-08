import React, { useEffect, useState } from 'react'

import { useAppDispatch } from '@hooks'
import { getDishesAsync, getCartDishesFromLocalStorageAsync, resetPagination, setDishesType } from '@redux-actions/mainPageActions'

import MainPageCenterBlock from './CenterBlock/MainPageCenterBlock'
import MainPageCartRightBlock from './CartRightBlock/MainPageCartRightBlock'

import { createStyles, makeStyles } from '@mui/styles'
import { Box } from '@mui/material'
import NavigationPanel from '@components/NavigationPanel/NavigationPanel'
import { dishTypes, TabItem } from '@components/TabContainer/tabContainerUtils'
import { getTabItems } from '@pages/MainPage/mainPageUtils'

export default function MainPage() {
    const classes = useStyles()
    const dispatch = useAppDispatch()

    const [openedTab, setOpenedTab] = useState(0)

    useEffect(() => {
        dispatch(getDishesAsync())
        dispatch(getCartDishesFromLocalStorageAsync())
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
            margin: '40px auto',
        },
        container: {
            display: 'flex',
            gap: '20px',
        },
    }),
)
