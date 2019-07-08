import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import axios from 'axios'

const initialState = {
    dataList: [],
    product: {}
}

const api = axios.create({
    baseURL: 'https://68adda0f-b2f3-446b-b72c-45e5823ef4e0.mock.pstmn.io/api',
});

export const FETCH_PRODUCT_LIST_SUCCESS = 'FETCH_PRODUCT_LIST_SUCCESS'
export const FETCH_PRODUCT_LIST_FAILURE = 'FETCH_PRODUCT_LIST_FAILURE'
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS'
export const FETCH_PRODUCT_FAILURE = 'FETCH_PRODUCT_FAILURE'

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
        default:
            return state
    }
}

// ACTIONS
export const fetchProductList = () => async dispatch => {
  try {
      const { data }  = await api.get('/product/')
      dispatch({ type: FETCH_PRODUCT_LIST_SUCCESS, data })
  } catch (err) {
      dispatch({ type: FFETCH_PRODUCT_LIST_FAILURE, err})
  }
}

export const fetchProduct = (id) => async dispatch => {
  try {
      const { data }  = await api.get('/product/'+id)
      console.log(data)
      dispatch({ type: FETCH_PRODUCT_SUCCESS, data })
  } catch (err) {
      console.log(err.msg)
      dispatch({ type: FETCH_PRODUCT_FAILURE, err})
  }
}

export function initializeStore (initialState = initialState) {
    return createStore(
        reducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk))
    )
}
