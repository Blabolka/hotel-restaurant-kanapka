import { RequestFilteringParams } from '@redux-actions/ordersActions'

export const getDefaultRequestFiltering = (): RequestFilteringParams => {
    return {
        urgent: null,
        confirmed: null,
        cancelled: null,
        done: null,
    }
}

export interface FilteringGroupValue {
    name: string
    value: boolean
    uniqueKey: string
    checked: boolean
}
export interface FilteringGroup {
    name: string
    uniqueRequestKey: string
    values: FilteringGroupValue[]
}

export const getDefaultFilteringGroups = (): FilteringGroup[] => {
    return [
        {
            name: 'Терміновість',
            uniqueRequestKey: 'urgent',
            values: [
                {
                    name: 'Термінове',
                    value: true,
                    uniqueKey: 'urgent-yes',
                    checked: false,
                },
                {
                    name: 'Не термінове',
                    value: false,
                    uniqueKey: 'urgent-no',
                    checked: false,
                },
            ],
        },
        {
            name: 'Підтвердженість',
            uniqueRequestKey: 'confirmed',
            values: [
                {
                    name: 'Підтверджене',
                    value: true,
                    uniqueKey: 'confirmed-yes',
                    checked: false,
                },
                {
                    name: 'Не підтверджене',
                    value: false,
                    uniqueKey: 'confirmed-no',
                    checked: false,
                },
            ],
        },
        {
            name: 'Відміненість',
            uniqueRequestKey: 'cancelled',
            values: [
                {
                    name: 'Відмінене',
                    value: true,
                    uniqueKey: 'cancelled-yes',
                    checked: false,
                },
                {
                    name: 'Не відмінене',
                    value: false,
                    uniqueKey: 'cancelled-no',
                    checked: false,
                },
            ],
        },
        {
            name: 'Виконаність',
            uniqueRequestKey: 'done',
            values: [
                {
                    name: 'Виконане',
                    value: true,
                    uniqueKey: 'done-yes',
                    checked: false,
                },
                {
                    name: 'Не виконане',
                    value: false,
                    uniqueKey: 'done-no',
                    checked: false,
                },
            ],
        },
    ]
}
