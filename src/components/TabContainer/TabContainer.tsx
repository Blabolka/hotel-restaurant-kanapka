import React from 'react'
import { Box, Tab, Tabs } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import { tabItems } from '@components/TabContainer/tabContainerUtils'

export default function TabContainer() {
    const classes = useStyles()

    const [value, setValue] = React.useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    return (
        <Box>
            <Tabs className={classes.tabs} value={value} onChange={handleChange} orientation="vertical">
                {tabItems.map((item) => (
                    <Tab
                        key={item.alt}
                        icon={<img src={item.image} alt={item.alt} />}
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
            },
        },
    }),
)
