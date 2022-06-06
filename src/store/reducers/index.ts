import { combineReducers } from 'redux'

import mainPageReducer from './mainPageReducer'

const rootReducer = combineReducers({
    mainPage: mainPageReducer,
})

export default rootReducer
