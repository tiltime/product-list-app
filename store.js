import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'

const initialState = {
    product: {},
    products: [],
    modalIsOpen: false
}


export function initializeStore (newInitialState = initialState) {
    return createStore(
        rootReducer,
        newInitialState,
        composeWithDevTools(applyMiddleware(thunk))
    )
}
