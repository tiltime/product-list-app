import { getProducts, getProduct, updateProductData } from '../api/api'

export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE'
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS'
export const FETCH_PRODUCT_FAILURE = 'FETCH_PRODUCT_FAILURE'
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS'
export const UPDATE_PRODUCT_FAILURE = 'UPDATE_PRODUCT_FAILURE'

// ACTIONS
export const fetchProducts = () => async dispatch => {
    try {
        const { data }  = await getProducts()
        dispatch({ type: FETCH_PRODUCTS_SUCCESS, data })
    } catch (err) {
        console.log(err.msg)
        dispatch({ type: FFETCH_PRODUCTS_FAILURE, err })
    }
}

export const fetchProduct = (id) => async dispatch => {
    try {
        const { data }  = await getProduct(id)
        dispatch({ type: FETCH_PRODUCT_SUCCESS, data })
    } catch (err) {
        console.log(err.msg)
        dispatch({ type: FETCH_PRODUCT_FAILURE, err })
    }
}

export const updateProduct = (id, data) => async dispatch => {
    try {
        updateProductData(id, data)
        dispatch({ type: UPDATE_PRODUCT_SUCCESS, data })
    } catch (err) {
        console.log(err.msg)
        dispatch({ type: UPDATE_PRODUCT_FAILURE, err })
    }
}