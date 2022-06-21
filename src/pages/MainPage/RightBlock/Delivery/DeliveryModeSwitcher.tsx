import React from 'react'

import { useAppDispatch, useAppSelector } from '@hooks'
import { setCartDeliveryMode } from '@redux-actions/pageActions'
import { DELIVERY_MODE_VALUES } from './deliveryModeSwitcherUtils'

import { Stack } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

import ButtonCustom from '@components/Overrides/ButtonCustom'

export default function DeliveryModeSwitcher() {
    const classes = useStyles()
    const dispatch = useAppDispatch()
    const deliveryMode = useAppSelector((state) => state.page.cart.deliveryMode)

    const onAsSoonAsPossibleButtonClick = () => {
        if (deliveryMode !== DELIVERY_MODE_VALUES.AS_SOON_AS_POSSIBLE) {
            dispatch(setCartDeliveryMode(DELIVERY_MODE_VALUES.AS_SOON_AS_POSSIBLE))
        }
    }

    const onPlannedDateButtonClick = () => {
        if (deliveryMode !== DELIVERY_MODE_VALUES.PLANNED_DATE) {
            dispatch(setCartDeliveryMode(DELIVERY_MODE_VALUES.PLANNED_DATE))
        }
    }

    return (
        <Stack flexDirection="row" justifyContent="space-between">
            <ButtonCustom
                classes={{ root: classes.asSoonAsPossibleButtonRoot }}
                variant={deliveryMode === DELIVERY_MODE_VALUES.AS_SOON_AS_POSSIBLE ? 'contained' : 'outlined'}
                onClick={onAsSoonAsPossibleButtonClick}
            >
                у найближчий час
            </ButtonCustom>
            <ButtonCustom
                classes={{ root: classes.plannedButtonRoot }}
                variant={deliveryMode === DELIVERY_MODE_VALUES.PLANNED_DATE ? 'contained' : 'outlined'}
                onClick={onPlannedDateButtonClick}
            >
                запланувати
            </ButtonCustom>
        </Stack>
    )
}

const useStyles = makeStyles(() =>
    createStyles({
        asSoonAsPossibleButtonRoot: {
            width: '162px',
            height: '30px',
            fontWeight: 400,
        },
        plannedButtonRoot: {
            width: '130px',
            height: '30px',
            fontWeight: 400,
        },
    }),
)
