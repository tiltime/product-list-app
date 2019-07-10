import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  FETCH_PRODUCT_LIST_SUCCESS, 
  FETCH_PRODUCT_SUCCESS, 
  UPDATE_PRODUCT_SUCCESS,
  OPEN_MODAL,
  CLOSE_MODAL
 } from './action/'

const initialState = {
    dataList: [],
    product: {},
    modalIsOpen: false
}

// REDUCERS
// Need to refactor to use combineStore()
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
        case OPEN_MODAL:
            return Object.assign({}, state, {
                modalIsOpen: true
            })
        case CLOSE_MODAL:
            return Object.assign({}, state, {
                modalIsOpen: false
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
