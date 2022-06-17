import React, { ChangeEvent, useEffect, useState } from 'react'
import { Box, Button, MenuItem, Select, TextField, Typography } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import CustomTable, { Column, Data, DataValueTypes } from '@components/CustomTable/CustomTable'
import {
    addDishAsync,
    addDishInfo,
    deleteDishByIdAsync,
    getDishesAsync,
    removeDishInfo,
    setDishInfo,
    updateDishByIdAsync,
} from '@redux-actions/mainPageActions'
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
import { getColumns, getRows, TranslateDishTypes } from '@pages/AdminPage/MenuBlock/menuBlockUtils'
import DishPagination from '@pages/MainPage/CenterBlock/Filtering/DishPagination/DishPagination'
import LoadingButtonCustom from '@components/Overrides/LoadingButtonCustom'
import ButtonCustom from '@components/Overrides/ButtonCustom'
import { dishTypes } from '@components/TabContainer/tabContainerUtils'
import { ExpandMore } from '@mui/icons-material'

export default function MenuBlock() {
    const classes = useStyles()
    const dispatch = useAppDispatch()
    const data = new FormData()

    const dishes: DishInfo[] = useAppSelector((state) => state.mainPage.dishes)

    const [editRowIds, setEditRowIds] = useState<(string | number)[]>([])
    const [addMode, setAddMode] = useState<boolean>(false)
    const [files, setFiles] = useState<Record<string, File>>({})

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
                error={!!value}
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
        setFiles({ ...files, [id]: file })
        dispatch(setDishInfo(id, 'imagePath', name))
    }

    const handleSaveData = (id: string | number) => {
        setAddMode(false)
        setEditRowIds(editRowIds.filter((item: string | number) => item !== id))
        const { name, description, weight, price } = dishes.find((item: DishInfo) => item.id === id) || {}
        data.append('image', files[id])
        data.append('data', JSON.stringify({ name, description, weight, price, dishType: 'pizza' }))
        addMode ? dispatch(addDishAsync({ data })) : dispatch(updateDishByIdAsync(id, { data }))
        delete files[id]
    }

    const handleDeleteDish = (id: string | number) => {
        dispatch(deleteDishByIdAsync(id))
    }

    const handleAddDishButton = () => {
        setAddMode(true)
        setEditRowIds([...editRowIds, 0])
        dispatch(addDishInfo())
    }

    const handleCancelButton = () => {
        setAddMode(false)
        setEditRowIds(editRowIds.filter((item: string | number) => item !== 0))
        dispatch(removeDishInfo())
    }

    const formatPhotoColumn = (value: DataValueTypes, row: Data) => {
        const filename = value?.toString().split('/').pop()
        return filename ? (
            <Box className={classes.fileContainer}>
                <a href={value?.toString()}>
                    <Box className={classes.loadedFile}>
                        <img src={picture} alt="Picture" />
                        <Typography variant="body2">{filename}</Typography>
                    </Box>
                </a>
                {editRowIds.includes(row.id) && (
                    <CloseIcon onClick={() => dispatch(setDishInfo(+row.id, 'imagePath', ''))} fontSize="small" />
                )}
            </Box>
        ) : (
            <Button className={classes.downloadButton} component="label">
                <Typography variant="body2">Завантажити</Typography>
                <FileDownloadOutlinedIcon fontSize="small" />
                <input accept="image/*" type="file" hidden onChange={(event) => handleFileUpload(event, +row.id)} />
            </Button>
        )
    }

    const formatSelectColumn = (value: DataValueTypes, row: Data) => {
        return row.id === 0 ? (
            <Box className={classes.select}>
                <Select
                    value={row.dishType}
                    onChange={(event) => dispatch(setDishInfo(+row.id, 'dishType', event.target.value as string))}
                    IconComponent={ExpandMore}
                >
                    {dishTypes.slice(1).map((item: string) => (
                        <MenuItem key={item} value={item} className={classes.menuItem}>
                            {TranslateDishTypes[item]}
                        </MenuItem>
                    ))}
                </Select>
            </Box>
        ) : (
            <>{TranslateDishTypes[row.dishType as string]}</>
        )
    }

    const createActions = (value: DataValueTypes, row: Data) => {
        return editRowIds.includes(row.id) ? (
            <Box className={classes.actionButtons}>
                <img src={save} alt="Save" onClick={() => handleSaveData(row.id)} />
                {!editRowIds.includes(0) && (
                    <img
                        src={undo}
                        alt="Undo"
                        onClick={() => setEditRowIds(editRowIds.filter((item: string | number) => item !== row.id))}
                    />
                )}
            </Box>
        ) : (
            <Box className={classes.actionButtons}>
                <img src={edit} alt="Edit" onClick={() => setEditRowIds([...editRowIds, row.id])} />
                <img src={remove} alt="Remove" onClick={() => handleDeleteDish(row.id)} />
            </Box>
        )
    }

    const columns: Column[] = getColumns(formatTextFieldColumn, formatPhotoColumn, formatSelectColumn, createActions)
    const rows: Data[] = getRows(dishes)

    return (
        <Box className={classes.root}>
            <Box className={classes.container}>
                <Box className={classes.addDishButton}>
                    {!addMode ? (
                        <LoadingButtonCustom onClick={handleAddDishButton}>Додати новий запис</LoadingButtonCustom>
                    ) : (
                        <ButtonCustom
                            classes={{ root: classes.cancelButton }}
                            variant="outlined"
                            onClick={handleCancelButton}
                        >
                            Відмінити додавання
                        </ButtonCustom>
                    )}
                </Box>
                <CustomTable columns={columns} rows={rows} />
            </Box>
            <DishPagination disabled={addMode} />
        </Box>
    )
}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
        },
        container: {
            display: 'flex',
            flexDirection: 'column',
        },
        addDishButton: {
            display: 'flex',
            justifyContent: 'end',
            marginBottom: '20px',
            '& .MuiButton-root': {
                width: '240px',
            },
        },
        cancelButton: {
            fontWeight: 400,
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
        select: {
            '& .MuiOutlinedInput-root': {
                width: '90px',
                '& .MuiSelect-select': {
                    padding: 0,
                    fontSize: '14px',
                    fontWeight: 400,
                },
                '& fieldset': {
                    border: 'none',
                },
                '& svg': {
                    color: 'black',
                },
            },
        },
        menuItem: {
            fontSize: '14px',
            fontWeight: 400,
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
