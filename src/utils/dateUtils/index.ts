// import { addHours, addDays, setHours, addMinutes, setMinutes, compareAsc, differenceInMinutes } from 'date-fns'
// import { utcToZonedTime } from 'date-fns-tz'
//
// // 08:00
// const WORK_DAY_START_HOUR = 8
// const WORK_DAY_START_MINUTES = 0
//
// // 21:00
// const WORK_DAY_FINISH_HOUR = 21
// const WORK_DAY_FINISH_MINUTES = 0
//
// export const getMinDeliveryDate = (): Date => {
//     const currentTimezoneDate = new Date()
//
//     const restaurantTimezoneDate = utcToZonedTime(new Date(), 'Europe/Kiev')
//     const restaurantTimezoneDatePlusOne = addHours(restaurantTimezoneDate, 1)
//
//     const currentDateWorkDateStart = setHours(
//         setMinutes(restaurantTimezoneDatePlusOne, WORK_DAY_START_MINUTES),
//         WORK_DAY_START_HOUR,
//     )
//     const isStartWorkDateBiggerThanNow = compareAsc(currentDateWorkDateStart, restaurantTimezoneDatePlusOne)
//     if (isStartWorkDateBiggerThanNow === 0 || isStartWorkDateBiggerThanNow === 1) {
//         return addMinutes(currentTimezoneDate, differenceInMinutes(currentDateWorkDateStart, restaurantTimezoneDate))
//     }
//
//     const currentDateWorkDateFinish = setHours(
//         setMinutes(restaurantTimezoneDatePlusOne, WORK_DAY_FINISH_MINUTES),
//         WORK_DAY_FINISH_HOUR,
//     )
//     const idFinishWorkDateBiggerThanNow = compareAsc(currentDateWorkDateFinish, restaurantTimezoneDatePlusOne)
//     if (idFinishWorkDateBiggerThanNow === -1) {
//         return addDays(
//             addMinutes(currentTimezoneDate, differenceInMinutes(currentDateWorkDateStart, restaurantTimezoneDate)),
//             1,
//         )
//     }
//
//     return addHours(currentTimezoneDate, 1)
// }
