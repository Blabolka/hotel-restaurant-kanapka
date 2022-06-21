import { combineReducers } from 'redux'

import ordersReducer from './ordersReducer'
import pageReducer from './pageReducer'

const rootReducer = combineReducers({
    orders: ordersReducer,
    page: pageReducer,
})

export default rootReducer
