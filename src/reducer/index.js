import { combineReducers } from 'redux'
import authReducer from './authReducer'
import presentaionReducer from './productReducer'
import productsReducer from './productDetailsReducer'
export default combineReducers({
    auth: authReducer,
    presentation: presentaionReducer,
    products: productsReducer
})