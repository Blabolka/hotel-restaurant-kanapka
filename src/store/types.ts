export enum OrdersTypes {
    SET_ORDERS = 'orders/set',
}

export enum MainPageTypes {
    SET_DISHES = 'mainPage/dishes/set',

    SET_CART = 'mainPage/cart/set',
    SET_CART_DELIVERY_MODE = 'mainPage/cart/setDeliveryMode',
    SET_CART_DELIVERY_DATE = 'mainPage/cart/setDeliveryDate',

    SET_PAGINATION = 'mainPage/pagination/set',
    RESET_PAGINATION = 'mainPage/pagination/reset',

    SET_SEARCH = 'mainPage/search/set',
    SET_SORTING_SELECT = 'mainPage/sortingSelect/set',

    SET_DISH_TYPE = 'mainPage/dishType/set',
    SET_DISH_INFO = 'mainPage/dishInfo/set',

    ADD_DISH_INFO = 'admin/dishInfo/add',
    REMOVE_DISH_INFO = 'admin/dishInfo/remove',
}
