import React, { useState } from 'react'

import { useAppDispatch, useAppSelector } from '@hooks'
import { setCartDeliveryDate } from '@redux-actions/mainPageActions'

import { Stack, TextField } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { createStyles, makeStyles } from '@mui/styles'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'

export default function Delivery() {
    const classes = useStyles()
    const dispatch = useAppDispatch()
    const [isDatePickerOpen, setIsDatePickerOpen] = useState<boolean>(false)
    const [isTimePickerOpen, setIsTimePickerOpen] = useState<boolean>(false)

    const deliveryDate = useAppSelector((state) => state.mainPage.cart.deliveryDate)

    const onDatePickerInputClick = () => {
        setIsDatePickerOpen(true)
    }
    const onDatePickerClose = () => {
        setIsDatePickerOpen(false)
    }
    const onDatePickerDateChange = (newValue: Date | null) => {
        dispatch(setCartDeliveryDate(newValue))
    }

    const onTimePickerInputClick = () => {
        setIsTimePickerOpen(true)
    }
    const onTimePickerClose = () => {
        setIsTimePickerOpen(false)
    }
    const onTimePickerDateChange = (newValue: Date | null) => {
        dispatch(setCartDeliveryDate(newValue))
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack gap="20px">
                <span className="font-size-18px color-secondary">Доставка</span>
                <Stack flexDirection="row" gap="27px">
                    <DesktopDatePicker
                        open={isDatePickerOpen}
                        inputFormat="dd.MM.yyyy"
                        value={deliveryDate}
                        minDate={new Date()}
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
                        ampm={false}
                        open={isTimePickerOpen}
                        value={deliveryDate}
                        minTime={new Date()}
                        inputFormat="HH:mm"
                        onChange={onTimePickerDateChange}
                        onClose={onTimePickerClose}
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
            width: '65px',
        },
    }),
)
