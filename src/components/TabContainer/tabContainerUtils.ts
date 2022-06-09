type IconPositionType = 'bottom' | 'top' | 'end' | 'start' | undefined

export const dishTypes = ['all', 'lunch', 'soup', 'snack', 'pizza', 'salad', 'dessert', 'drink']

export interface TabItem {
    image: string
    alt: string
    iconPosition: IconPositionType
    label: string
}
