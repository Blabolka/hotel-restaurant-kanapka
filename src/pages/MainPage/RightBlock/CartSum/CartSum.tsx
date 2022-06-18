import React from 'react'

import { useAppSelector } from '@hooks'
import { Stack } from '@mui/material'

export default function CartSum() {
    const dishesInCart = useAppSelector((state) => state.page.cart.dishes)

    return (
        <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
            <span className="font-size-18px color-secondary">Сума замовлення</span>
            <span className="font-size-24px color-primary">
                ₴{dishesInCart.reduce((acc, item) => acc + item.price * item.count, 0)}
            </span>
        </Stack>
    )
}
