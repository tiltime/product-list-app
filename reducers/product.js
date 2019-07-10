import { UPDATE_PRODUCT_SUCCESS, FETCH_PRODUCT_SUCCESS } from '../actions/index'

export const productReducer = (state = {}, action) => {
  switch (action.type) {
      case FETCH_PRODUCT_SUCCESS:
          return action.data
      case UPDATE_PRODUCT_SUCCESS:
          return action.data
      default:
          return state
  }
}

export default productReducer