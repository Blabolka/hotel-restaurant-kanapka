import React from 'react'

import { useAppDispatch, useAppSelector } from '@hooks'
import { setCart } from '@redux-actions/mainPageActions'

import { Stack } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

import DishItemCart from '@components/Dishes/DishItemCart'
import EmptyState from './EmptyState'

export default function DishItemsCart() {
    const classes = useStyles()
    const dispatch = useAppDispatch()
    const cart = useAppSelector((state) => state.mainPage.cart)

    const onCounterDecreaseClick = (dishId: number) => {
        const newCartDishes = cart.dishes.map((dish) => {
            if (dish.id === dishId && dish.count > 1) {
                dish.count -= 1
            }

            return dish
        })
        dispatch(setCart({ ...cart, dishes: newCartDishes }))
    }

    const onCounterIncreaseClick = (dishId: number) => {
        const newCartDishes = cart.dishes.map((dish) => {
            if (dish.id === dishId && dish.count < 9) {
                dish.count += 1
            }

            return dish
        })
        dispatch(setCart({ ...cart, dishes: newCartDishes }))
    }

    const onDishItemRemoveClick = (dishId: number) => {
        const newCartDishes = cart.dishes.filter((dish) => dish.id !== dishId)
        dispatch(setCart({ ...cart, dishes: newCartDishes }))
    }

    return (
        <Stack className={classes.root}>
            <span className="font-size-18px color-secondary">Ваше замовлення</span>
            {cart.dishes.length ? (
                <Stack className={classes.dishesContainer}>
                    {cart.dishes.map((dishInfo, index) => {
                        return (
                            <DishItemCart
                                key={index}
                                dishInfo={dishInfo}
                                onCounterDecreaseClick={onCounterDecreaseClick}
                                onCounterIncreaseClick={onCounterIncreaseClick}
                                onDishItemRemoveClick={onDishItemRemoveClick}
                            />
                        )
                    })}
                </Stack>
            ) : (
                <EmptyState />
            )}
        </Stack>
    )
}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            height: '400px',
        },
        dishesContainer: {
            flexDirection: 'column',
            gap: '24px',
            marginTop: '18px',
            overflow: 'scroll',
        },
    }),
)
