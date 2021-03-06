import { Column, ColumnFormat, Data, DataValueTypes } from '@components/CustomTable/CustomTable'
import { DishInfo } from '@components/Dishes/dishItemUtils'
import { OptionsObject, SnackbarKey, SnackbarMessage } from 'notistack'

export type EnqueueSnackbarType = (message: SnackbarMessage, options?: OptionsObject | undefined) => SnackbarKey

export enum TranslateDishTypes {
    lunch = 'Ланчі',
    soup = 'Супи',
    snack = 'Канапки',
    pizza = 'Піцка',
    salad = 'Салати',
    dessert = 'Десерти',
    drink = 'Напої',
}

export const getColumns = (
    formatTextFieldColumn: ColumnFormat<Data>,
    formatPhotoColumn: ColumnFormat<Data>,
    formatSelectColumn: ColumnFormat<Data>,
    createActions: ColumnFormat<Data>,
): Column[] => [
    {
        id: 'name',
        label: 'Назва',
        minWidth: 170,
        format: (value: DataValueTypes, row: Data) => formatTextFieldColumn(value, row, 'Назва', 'name'),
    },
    {
        id: 'description',
        label: 'Опис',
        minWidth: 420,
        format: (value: DataValueTypes, row: Data) => formatTextFieldColumn(value, row, 'Опис', 'description'),
    },
    {
        id: 'weight',
        label: 'Вага',
        minWidth: 70,
        format: (value: DataValueTypes, row: Data) => formatTextFieldColumn(value, row, 'Вага', 'weight'),
    },
    {
        id: 'price',
        label: 'Ціна',
        minWidth: 100,
        format: (value: DataValueTypes, row: Data) => formatTextFieldColumn(value, row, 'Ціна', 'price'),
    },
    {
        id: 'imagePath',
        label: 'Фото',
        minWidth: 170,
        format: (value: DataValueTypes, row: Data) => formatPhotoColumn(value, row),
    },
    {
        id: 'dishType',
        label: 'Категорія',
        minWidth: 110,
        format: (value: DataValueTypes, row: Data) => formatSelectColumn(value, row, 'Категорія', 'dishType'),
    },
    {
        id: 'actions',
        label: '',
        minWidth: 100,
        format: (value: DataValueTypes, row: Data) => createActions(value, row),
    },
]

const createData = (dish: DishInfo): Data => {
    const { id, name, description, weight, price, imagePath, dishType } = dish
    return { id, name, description, weight, price, imagePath, dishType: dishType }
}

export const getRows = (dishes: DishInfo[]): Data[] => dishes.map(createData)
