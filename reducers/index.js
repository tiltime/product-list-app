import { combineReducers } from 'redux'
import productReducer from './product'
import productListReducer from './productList'
import modalReducer from './modal'

export default combineReducers({
    product: productReducer,
    products: productListReducer,
    modalIsOpen: modalReducer
})