import React, { useState } from 'react'

import api from '@api/index'
import { useAppDispatch, useAppSelector } from '@hooks'
import { setCart } from '@redux-actions/mainPageActions'

import { DELIVERY_MODE_VALUES } from '@pages/MainPage/RightBlock/Delivery/deliveryModeSwitcherUtils'
import CircularProgress from '@mui/material/CircularProgress'
import LoadingButtonCustom from '@components/Overrides/LoadingButtonCustom'
import { createStyles, makeStyles } from '@mui/styles'

export default function OrderConfirm() {
    const classes = useStyles()
    const dispatch = useAppDispatch()
    const [isButtonLoading, setIsButtonLoading] = useState<boolean>(false)
    const cart = useAppSelector((state) => state.mainPage.cart)

    const onOrderButtonClick = () => {
        if (cart.dishes.length) {
            setIsButtonLoading(true)

            const deliveryExpectedDate =
                cart.deliveryMode === DELIVERY_MODE_VALUES.AS_SOON_AS_POSSIBLE ? null : cart.deliveryDate

            const dishesMap = cart.dishes.reduce((memo, dish) => {
                memo[`${dish.id}`] = dish.count
                return memo
            }, {})

            api.orders
                .createOrder({
                    guestId: 1,
                    phone: '0995678499',
                    expectedDate: deliveryExpectedDate,
                    dishes: dishesMap,
                })
                .then(() => {
                    setIsButtonLoading(false)
                    dispatch(setCart({ ...cart, dishes: [] }))
                })
                .catch((err) => {
                    console.log(err)
                    setIsButtonLoading(false)
                })
        }
    }

    return (
        <>
            <LoadingButtonCustom
                loading={isButtonLoading}
                loadingIndicator={<CircularProgress color="inherit" size={26} />}
                onClick={onOrderButtonClick}
                classes={{ root: classes.root }}
            >
                Замовити
            </LoadingButtonCustom>
        </>
    )
}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            height: '46px',
            fontSize: '20px',

            '& .MuiLoadingButton-loadingIndicator': {
                color: 'rgba(0, 0, 0, 1)',
            },
        },
    }),
)
