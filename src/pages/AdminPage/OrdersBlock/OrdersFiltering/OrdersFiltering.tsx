import React, { useState } from 'react'

import { Stack, FormControlLabel, FormGroup } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

import CheckboxCustom from '@components/Overrides/CheckboxCustom'

import { FilteringGroup, getDefaultFilteringGroups } from './ordersFilteringUtils'

interface OrdersFilteringProps {
    onChange?: (filtering: FilteringGroup[]) => void
}

export default function OrdersFiltering({ onChange }: OrdersFilteringProps) {
    const classes = useStyles()

    const [filteringGroups, setFilteringGroups] = useState<FilteringGroup[]>(getDefaultFilteringGroups())

    const onFilteringChange = (event, checkedState, checkboxKey) => {
        const newFilteringGroups = filteringGroups.map((group) => {
            const newFilteringGroupValues = group.values.map((groupValue) => {
                if (checkboxKey === groupValue.uniqueKey) {
                    return { ...groupValue, checked: checkedState }
                }
                return groupValue
            })

            return { ...group, values: newFilteringGroupValues }
        })

        setFilteringGroups(newFilteringGroups)

        if (onChange) {
            onChange(newFilteringGroups)
        }
    }

    return (
        <Stack className={classes.container}>
            <span className="font-size-22px color-secondary">Фільтрація</span>
            {filteringGroups.map((group, groupIndex) => {
                return (
                    <Stack key={groupIndex} gap="8px">
                        <span className="font-size-18px color-secondary">{group.name}</span>
                        <FormGroup>
                            {group.values.map((groupValue, groupValueIndex) => {
                                return (
                                    <FormControlLabel
                                        key={groupValueIndex}
                                        control={
                                            <CheckboxCustom
                                                checked={groupValue.checked}
                                                classes={{ root: classes.checkbox }}
                                                onChange={(event, state) =>
                                                    onFilteringChange(event, state, groupValue.uniqueKey)
                                                }
                                            />
                                        }
                                        label={groupValue.name}
                                    />
                                )
                            })}
                        </FormGroup>
                    </Stack>
                )
            })}
        </Stack>
    )
}

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            minWidth: '225px',
            height: '100%',
            padding: '20px',
            gap: '20px',
            borderRadius: '20px',
            backgroundColor: 'white',
        },
        checkbox: {
            height: '30px',
            width: '30px',
            marginLeft: '6px',

            '&.Mui-checked': {
                color: '#F8AC1B',
            },
        },
    }),
)
