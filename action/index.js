import axios from 'axios'

const api = axios.create({
    baseURL: 'https://68adda0f-b2f3-446b-b72c-45e5823ef4e0.mock.pstmn.io/api',
});

export const FETCH_PRODUCT_LIST_SUCCESS = 'FETCH_PRODUCT_LIST_SUCCESS'
export const FETCH_PRODUCT_LIST_FAILURE = 'FETCH_PRODUCT_LIST_FAILURE'
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS'
export const FETCH_PRODUCT_FAILURE = 'FETCH_PRODUCT_FAILURE'
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS'
export const UPDATE_PRODUCT_FAILURE = 'UPDATE_PRODUCT_FAILURE'

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
      dispatch({ type: FETCH_PRODUCT_SUCCESS, data })
  } catch (err) {
      console.log(err.msg)
      dispatch({ type: FETCH_PRODUCT_FAILURE, err})
  }
}

export const updateProduct = (id, data) => async dispatch => {
    try {
        api.put('/product/'+id, data, {headers: {'Content-Type': 'application/json'}})
        dispatch({ type: UPDATE_PRODUCT_SUCCESS, data })
    } catch (err) {
        console.log(err.msg)
        dispatch({ type: UPDATE_PRODUCT_FAILURE, err })
    }
  }