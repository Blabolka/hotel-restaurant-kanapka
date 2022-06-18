export enum OrdersTypes {
    SET_ORDERS = 'orders/set',
}

export enum PAGE_TYPES {
    SET_DISHES = 'page/dishes/set',
    SET_CART = 'page/cart/set',
    SET_CART_DELIVERY_MODE = 'page/cart/setDeliveryMode',
    SET_CART_DELIVERY_DATE = 'page/cart/setDeliveryDate',
    SET_PAGINATION = 'page/pagination/set',
    RESET_PAGINATION = 'page/pagination/reset',
    SET_SEARCH = 'page/search/set',
    SET_SORTING_SELECT = 'page/sortingSelect/set',
    SET_DISH_TYPE = 'page/dishType/set',
    RESET_STATE = 'page/reset',

    ADD_DISH_INFO = 'page/dishInfo/add',
    SET_DISH_INFO = 'page/dishInfo/set',
    REMOVE_DISH_INFO = 'page/dishInfo/remove',
}
