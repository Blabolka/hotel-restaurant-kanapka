import {
    addHours,
    addDays,
    setHours,
    addMinutes,
    setMinutes,
    compareAsc,
    differenceInMinutes,
    isSameDay,
    setSeconds,
    format,
} from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

// 08:00
const WORK_DAY_START_HOUR = 8
const WORK_DAY_START_MINUTES = 0

// 21:00
const WORK_DAY_FINISH_HOUR = 21
const WORK_DAY_FINISH_MINUTES = 0

const getWorkDayStartInCorrectTimezone = (currentTimezoneDate: Date) => {
    const currentTimezoneDateNormalized = currentTimezoneDate.setSeconds(0)

    const restaurantTimezoneDate = utcToZonedTime(currentTimezoneDateNormalized, 'Europe/Kiev')
    const restaurantDateWorkDateStart = setHours(
        setMinutes(restaurantTimezoneDate, WORK_DAY_START_MINUTES),
        WORK_DAY_START_HOUR,
    )

    return addMinutes(
        currentTimezoneDateNormalized,
        differenceInMinutes(restaurantDateWorkDateStart, restaurantTimezoneDate),
    )
}

const getWorkDayFinishInCorrectTimezone = (currentTimezoneDate: Date) => {
    const currentTimezoneDateNormalized = currentTimezoneDate.setSeconds(0)

    const restaurantTimezoneDate = utcToZonedTime(currentTimezoneDateNormalized, 'Europe/Kiev')
    const restaurantDateWorkDateFinish = setHours(
        setMinutes(restaurantTimezoneDate, WORK_DAY_FINISH_MINUTES),
        WORK_DAY_FINISH_HOUR,
    )

    return addMinutes(
        currentTimezoneDateNormalized,
        differenceInMinutes(restaurantDateWorkDateFinish, restaurantTimezoneDate),
    )
}

export const getMinDeliveryDate = (): Date => {
    const currentTimezoneDate = new Date()
    const currentTimezoneDateNormalized = addHours(setSeconds(currentTimezoneDate, 0), 1)

    const currentDateWorkDateStart = getWorkDayStartInCorrectTimezone(currentTimezoneDateNormalized)
    const isStartWorkDateBiggerThanNow = compareAsc(currentDateWorkDateStart, currentTimezoneDateNormalized)
    if (isStartWorkDateBiggerThanNow === 0 || isStartWorkDateBiggerThanNow === 1) {
        return currentDateWorkDateStart
    }

    const currentDateWorkDateFinish = getWorkDayFinishInCorrectTimezone(currentTimezoneDateNormalized)
    const idFinishWorkDateBiggerThanNow = compareAsc(currentDateWorkDateFinish, currentTimezoneDateNormalized)
    if (idFinishWorkDateBiggerThanNow === -1) {
        return addDays(currentDateWorkDateStart, 1)
    }

    return currentTimezoneDateNormalized
}

export const getMinDeliveryTime = (selectedDeliveryDate: Date): Date => {
    const minDeliveryDate = getMinDeliveryDate()

    if (!isSameDay(selectedDeliveryDate, minDeliveryDate)) {
        return getWorkDayStartInCorrectTimezone(selectedDeliveryDate)
    }

    return minDeliveryDate
}

export const getMaxDeliveryDate = () => {
    const currentTimezoneDate = new Date()

    return getWorkDayFinishInCorrectTimezone(addDays(currentTimezoneDate, 7))
}

export const getMaxDeliveryTime = (selectedDeliveryDate: Date) => {
    return getWorkDayFinishInCorrectTimezone(selectedDeliveryDate)
}

export const formatDate = (date: Date | number) => {
    return format(date, 'dd.MM.yyyy HH:mm')
}
