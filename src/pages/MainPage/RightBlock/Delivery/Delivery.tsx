import React, { useState } from 'react'

import { useAppDispatch, useAppSelector } from '@hooks'
import { setCartDeliveryDate } from '@redux-actions/pageActions'

import { isAfter, isBefore } from 'date-fns'
import { getMinDeliveryDate, getMinDeliveryTime, getMaxDeliveryDate, getMaxDeliveryTime } from '@utils/dateUtils'

import { Stack, TextField } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import { createStyles, makeStyles } from '@mui/styles'

import { DELIVERY_MODE_VALUES } from './deliveryModeSwitcherUtils'
import DeliveryModeSwitcher from './DeliveryModeSwitcher'

export default function Delivery() {
    const classes = useStyles()
    const dispatch = useAppDispatch()

    const [isDatePickerOpen, setIsDatePickerOpen] = useState<boolean>(false)
    const [isTimePickerOpen, setIsTimePickerOpen] = useState<boolean>(false)

    const deliveryDate = useAppSelector((state) => state.page.cart.deliveryDate)
    const deliveryMode = useAppSelector((state) => state.page.cart.deliveryMode)
    const isPickersDisabled = deliveryMode === DELIVERY_MODE_VALUES.AS_SOON_AS_POSSIBLE

    const updateDeliveryDate = (newSelectedDate) => {
        const newMinDate = getMinDeliveryTime(newSelectedDate)

        if (isBefore(newSelectedDate, newMinDate)) {
            dispatch(setCartDeliveryDate(newMinDate))
        } else {
            const newMaxDate = getMaxDeliveryTime(newSelectedDate)

            if (isAfter(newSelectedDate, newMaxDate)) {
                dispatch(setCartDeliveryDate(newMaxDate))
            } else {
                dispatch(setCartDeliveryDate(newSelectedDate))
            }
        }
    }

    const onDatePickerInputClick = () => {
        if (!isPickersDisabled) {
            setIsDatePickerOpen(true)
        }
    }
    const onDatePickerClose = () => {
        setIsDatePickerOpen(false)
    }
    const onDatePickerDateChange = (newSelectedDate: Date | null) => {
        if (newSelectedDate) {
            updateDeliveryDate(newSelectedDate)
        }
    }

    const onTimePickerInputClick = () => {
        if (!isPickersDisabled) {
            setIsTimePickerOpen(true)
        }
    }
    const onTimePickerClose = () => {
        setIsTimePickerOpen(false)
    }
    const onTimePickerDateChange = (newSelectedDate: Date | null) => {
        if (newSelectedDate) {
            updateDeliveryDate(newSelectedDate)
        }
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack gap="20px">
                <span className="font-size-18px color-secondary">Доставка</span>
                <DeliveryModeSwitcher />
                <Stack flexDirection="row" gap="27px">
                    <DesktopDatePicker
                        disabled={isPickersDisabled}
                        open={isDatePickerOpen}
                        inputFormat="dd.MM.yyyy"
                        value={deliveryDate}
                        minDate={getMinDeliveryDate()}
                        maxDate={getMaxDeliveryDate()}
                        onChange={onDatePickerDateChange}
                        onClose={onDatePickerClose}
                        renderInput={(params) => {
                            return (
                                <TextField
                                    {...params}
                                    InputProps={{
                                        ...params.InputProps,
                                        classes: {
                                            root: `${classes.inputCommonStyles} ${classes.datePickerInputStylesRoot}`,
                                        },
                                    }}
                                    inputProps={{ ...params.inputProps, disabled: true }}
                                    onClick={onDatePickerInputClick}
                                />
                            )
                        }}
                    />
                    <TimePicker
                        disabled={isPickersDisabled}
                        ampm={false}
                        open={isTimePickerOpen}
                        value={deliveryDate}
                        minTime={getMinDeliveryTime(deliveryDate)}
                        maxTime={getMaxDeliveryTime(deliveryDate)}
                        inputFormat="HH:mm"
                        onChange={onTimePickerDateChange}
                        onClose={onTimePickerClose}
                        showToolbar={true}
                        renderInput={(params) => {
                            return (
                                <TextField
                                    {...params}
                                    InputProps={{
                                        ...params.InputProps,
                                        endAdornment: null,
                                        classes: {
                                            root: `${classes.inputCommonStyles} ${classes.timePickerInputStylesRoot}`,
                                        },
                                    }}
                                    inputProps={{ ...params.inputProps, disabled: true }}
                                    onClick={onTimePickerInputClick}
                                />
                            )
                        }}
                    />
                </Stack>
            </Stack>
        </LocalizationProvider>
    )
}

const useStyles = makeStyles(() =>
    createStyles({
        inputCommonStyles: {
            height: '24px',
            borderRadius: '20px',
            fontSize: '12px',

            '& input': {
                paddingTop: 0,
                paddingBottom: 0,
            },
            '& button': {
                padding: 0,
                margin: 0,

                '& svg': {
                    width: '16px',
                    height: '16px',
                },
            },
            '&.Mui-error fieldset.MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(0, 0, 0, 0.23) !important',
            },
        },
        datePickerInputStylesRoot: {
            width: '115px',
        },
        timePickerInputStylesRoot: {
            width: '60px',

            '& input': {
                paddingLeft: 14,
                paddingRight: 0,
            },
        },
    }),
)
