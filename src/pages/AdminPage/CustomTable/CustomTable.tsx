import React from 'react'
import { createStyles, makeStyles } from '@mui/styles'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'

export type DataValueTypes = number | string | undefined | boolean
export type ColumnFormat<T> = (
    value: DataValueTypes,
    row: T,
    columnName?: string,
) => string | JSX.Element | 0 | false | undefined
export type DataProperty = string | number | boolean | JSX.Element | undefined
export interface Data extends Record<string, DataProperty> {
    id: string | number
}

export interface Column {
    id: string
    key?: string | number
    label: string | JSX.Element
    minWidth?: number
    format?: ColumnFormat<Data>
}

interface CustomTableProps {
    columns: Column[]
    rows: Data[]
}

export default function CustomTable({ columns, rows }: CustomTableProps) {
    const classes = useStyles()

    return (
        <Table className={classes.root}>
            <TableHead>
                <TableRow>
                    {columns.map((column: Column) => (
                        <TableCell key={column.key || column.id} style={{ minWidth: column.minWidth }}>
                            {column.label}
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row: Data) => (
                    <TableRow key={row.id}>
                        {columns.map((column: Column) => {
                            const value = column.key ? row[column.key] : row[column.id]
                            return (
                                <TableCell key={column.key || column.id}>
                                    {column.format && typeof value !== 'object' ? column.format(value, row) : value}
                                </TableCell>
                            )
                        })}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            borderCollapse: 'separate',
            borderSpacing: '0 4px',

            '& .MuiTableRow-root td:first-child, th:first-child': {
                borderTopLeftRadius: '20px',
                borderBottomLeftRadius: '20px',
            },

            '& .MuiTableRow-root td:last-child, th:last-child': {
                borderTopRightRadius: '20px',
                borderBottomRightRadius: '20px',
            },

            '& .MuiTableHead-root, .MuiTableBody-root': {
                fontSize: '14px',
                fontWeight: 400,
                background: 'white',

                '& .MuiTableCell-root': {
                    padding: '15px 0 15px 20px',
                },
            },
        },
    }),
)
