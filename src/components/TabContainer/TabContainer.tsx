import React from 'react'
import { Box, Tab, Tabs } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import { dishTypes, tabItems } from '@components/TabContainer/tabContainerUtils'
import { getDishesAsync, resetPagination, setDishesType } from '@redux-actions/mainPageActions'
import { useAppDispatch } from '@hooks'

export default function TabContainer() {
    const classes = useStyles()
    const dispatch = useAppDispatch()

    const [value, setValue] = React.useState(0)

    const handleChange = (event: React.SyntheticEvent, value: number) => {
        setValue(value)
        dispatch(setDishesType(dishTypes[value]))
        dispatch(resetPagination())
        dispatch(getDishesAsync())
    }

    return (
        <Box>
            <Tabs className={classes.tabs} value={value} onChange={handleChange} orientation="vertical">
                {tabItems.map((item) => (
                    <Tab
                        key={item.alt}
                        icon={
                            <Box className={classes.iconContainer}>
                                <img src={item.image} alt={item.alt} />
                            </Box>
                        }
                        iconPosition={item.iconPosition}
                        label={item.label}
                    />
                ))}
            </Tabs>
        </Box>
    )
}

const useStyles = makeStyles(() =>
    createStyles({
        tabs: {
            color: 'black',
            marginBottom: '16px',
            '& .MuiTabs-indicator': {
                display: 'none',
            },
            '& .Mui-selected': {
                color: 'black',
                background: '#F8AC1B',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: 400,
            },
            '& .MuiTab-root': {
                width: 'fit-content',
                minHeight: 0,
                borderRadius: '20px',
                fontFamily: 'Rubik',
                fontSize: '14px',
                fontWeight: 400,
                marginBottom: '10px',
                marginLeft: '14px',
                padding: '3px 16px',
                textTransform: 'none',
                '&:last-child': {
                    marginBottom: 0,
                },
                '&:hover:not(.Mui-selected)': {
                    backgroundColor: '#D1D1D1',
                },
            },
        },
        iconContainer: {
            width: '34px',
            height: '34px',
        },
    }),
)
