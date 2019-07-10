import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {FETCH_PRODUCT_LIST_SUCCESS, FETCH_PRODUCT_SUCCESS, UPDATE_PRODUCT_SUCCESS} from './action/index'

const initialState = {
    dataList: [],
    product: {}
}

// REDUCERS
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCT_LIST_SUCCESS:
            return Object.assign({}, state, {
              dataList: action.data
            })
        case FETCH_PRODUCT_SUCCESS:
            return Object.assign({}, state, {
              product: action.data
            })  
        case UPDATE_PRODUCT_SUCCESS:
            return Object.assign({}, state, {
              product: action.data
            })      
        default:
            return state
    }
}

export function initializeStore (initialState = initialState) {
    return createStore(
        reducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk))
    )
}
