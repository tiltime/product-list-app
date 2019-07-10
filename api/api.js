import axios from 'axios'

const api = axios.create({
    baseURL: 'https://68adda0f-b2f3-446b-b72c-45e5823ef4e0.mock.pstmn.io/api',
});

export const getProducts = () => {
   return api.get('/product/')
} 
export const getProduct = (id) => {
   return api.get('/product/'+id)
} 
export const updateProductData = (id, data) => {
    // PUT METHOD Should work properly if you have API
   return api.put('/product/'+id, data, {headers: {'Content-Type': 'application/json'}})
}