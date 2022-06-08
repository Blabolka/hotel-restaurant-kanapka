import React from 'react'

import { useAppDispatch, useAppSelector } from '@hooks'
import { setCart } from '@redux-actions/mainPageActions'

import { Stack } from '@mui/material'
import DishItemBlock from '@components/Dishes/DishItemBlock'
import { DishInfo } from '@components/Dishes/dishItemUtils'

const DishItemsGrid = () => {
    const dispatch = useAppDispatch()
    const dishes: DishInfo[] = useAppSelector((state) => state.mainPage.dishes)
    const cart = useAppSelector((state) => state.mainPage.cart)

    const onAddDishButtonClick = (dishId: string) => {
        const cartDishes = [...cart.dishes]
        const dishFromCart = cartDishes.find((dish) => dish.id === dishId)
        if (dishFromCart) {
            if (dishFromCart.count < 9) {
                dishFromCart.count += 1
            }
        } else {
            const currentDishInfo = dishes.find((dish) => dish.id === dishId)
            if (currentDishInfo) {
                cartDishes.push({ ...currentDishInfo, count: 1 })
            }
        }

        dispatch(setCart({ ...cart, dishes: cartDishes }))
    }

    return (
        <Stack direction="row" flexWrap="wrap" gap="20px">
            {dishes.map((item, index) => {
                return <DishItemBlock key={index} dishInfo={item} onAddButtonClick={onAddDishButtonClick} />
            })}
        </Stack>
    )
}

export default DishItemsGrid
