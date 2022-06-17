import { combineReducers } from 'redux'

import ordersReducer from './ordersReducer'
import mainPageReducer from './mainPageReducer'

const rootReducer = combineReducers({
    orders: ordersReducer,
    mainPage: mainPageReducer,
})

export default rootReducer
