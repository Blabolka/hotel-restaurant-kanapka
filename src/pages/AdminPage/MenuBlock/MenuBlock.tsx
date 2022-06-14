import React, { ChangeEvent, useEffect, useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import CustomTable, { Column, Data, DataValueTypes } from '@pages/AdminPage/CustomTable/CustomTable'
import { getColumns, getRows } from '@pages/AdminPage/CenterBlock/centerBlockUtils'
import { deleteDishByIdAsync, getDishesAsync, setDishInfo, updateDishByIdAsync } from '@redux-actions/mainPageActions'
import { DishInfo } from '@components/Dishes/dishItemUtils'
import { useAppDispatch, useAppSelector } from '@hooks'
import edit from '@assets/img/edit.svg'
import remove from '@assets/img/remove.svg'
import save from '@assets/img/save.svg'
import undo from '@assets/img/undo.svg'
import picture from '@assets/img/picture.svg'
import CloseIcon from '@mui/icons-material/Close'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import FormData from 'form-data'

export default function MenuBlock() {
    const classes = useStyles()
    const dispatch = useAppDispatch()
    const data = new FormData()

    const dishes: DishInfo[] = useAppSelector((state) => state.mainPage.dishes)

    const [editRowIds, setEditRowIds] = useState<(string | number)[]>([])

    useEffect(() => {
        dispatch(getDishesAsync())
    }, [])

    const formatTextFieldColumn = (value: DataValueTypes, row: Data, columnName?: string, field?: string) => {
        return (
            <TextField
                className={classes.textField}
                placeholder={`${columnName}...`}
                defaultValue={value}
                onBlur={(event) => dispatch(setDishInfo(+row.id, field || '', event.target.value))}
                disabled={!editRowIds.includes(row.id)}
                multiline
                fullWidth
            />
        )
    }

    const handleFileUpload = (event: ChangeEvent<HTMLInputElement>, id: number) => {
        if (!event.target.files) {
            return
        }
        const file = event.target.files[0]
        const { name } = file
        dispatch(setDishInfo(id, 'imagePath', name))
        data.append('image', file)
    }

    const handleSaveData = (id: string | number) => {
        setEditRowIds(editRowIds.filter((item: string | number) => item !== id))
        const { name, description, weight, price } = dishes.find((item: DishInfo) => item.id === id) || {}
        data.append('data', JSON.stringify({ name, description, weight, price }))
        dispatch(updateDishByIdAsync(id, { data }))
    }

    const handleDeleteDish = (id: string | number) => {
        dispatch(deleteDishByIdAsync(id))
    }

    const formatPhotoColumn = (value: DataValueTypes, row: Data) => {
        const filename = value?.toString().split('/').pop()
        return filename ? (
            <Box className={classes.fileContainer}>
                <Box className={classes.loadedFile}>
                    <img src={picture} alt="Picture" />
                    <Typography variant="body2">{filename}</Typography>
                </Box>
                {editRowIds.includes(row.id) && (
                    <CloseIcon onClick={() => dispatch(setDishInfo(+row.id, 'imagePath', ''))} fontSize="small" />
                )}
            </Box>
        ) : (
            <Button className={classes.downloadButton} component="label">
                <Typography variant="body2">Завантажити</Typography>
                <FileDownloadOutlinedIcon fontSize="small" />
                <input type="file" hidden onChange={(event) => handleFileUpload(event, +row.id)} />
            </Button>
        )
    }

    const createActions = (value: DataValueTypes, row: Data) => {
        return editRowIds.includes(row.id) ? (
            <Box className={classes.actionButtons}>
                <img src={save} alt="Save" onClick={() => handleSaveData(row.id)} />
                <img
                    src={undo}
                    alt="Undo"
                    onClick={() => setEditRowIds(editRowIds.filter((item: string | number) => item !== row.id))}
                />
            </Box>
        ) : (
            <Box className={classes.actionButtons}>
                <img src={edit} alt="Edit" onClick={() => setEditRowIds([...editRowIds, row.id])} />
                <img src={remove} alt="Remove" onClick={() => handleDeleteDish(row.id)} />
            </Box>
        )
    }

    const columns: Column[] = getColumns(formatTextFieldColumn, formatPhotoColumn, createActions)
    const rows: Data[] = getRows(dishes)

    return (
        <Box className={classes.root}>
            <Box className={classes.container}>
                <CustomTable columns={columns} rows={rows} />
            </Box>
        </Box>
    )
}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: '100%',
        },
        container: {
            display: 'flex',
            flexDirection: 'column',
        },
        filtersContainer: {
            display: 'flex',
            flexDirection: 'row',
            gap: '20px',
            marginBottom: '20px',
        },
        textField: {
            '& .MuiOutlinedInput-root': {
                padding: 0,
                fontSize: '14px',
                fontWeight: 400,
                '& input': {
                    padding: 0,
                },
                '& fieldset': {
                    border: 'none',
                },
                '&.Mui-focused fieldset': {
                    border: '0',
                },
            },
            '& .Mui-disabled': {
                '-webkit-text-fill-color': 'black',
            },
        },
        downloadButton: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '10px',
            color: 'black',
            padding: 0,
            textTransform: 'none',
        },
        fileContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            '& svg:hover': {
                cursor: 'pointer',
            },
        },
        loadedFile: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            '& .MuiTypography-root': {
                width: '90px',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
            },
        },
        actionButtons: {
            display: 'flex',
            gap: '20px',
            '& img:hover': {
                cursor: 'pointer',
            },
        },
    }),
)
