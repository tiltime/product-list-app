import { getProducts, getProduct } from '../api/api'

const product = {
    id: 1,
    name: 'b0006se5bq'
} 

test('Get products', async () => {
    const { data }  = await getProducts()
    expect(data.length).toBe(3)
    expect(data[0].name).toBe(product.name)
})

test('Get product name', async () => {
    const { data }  = await getProduct(product.id)
    expect(data.name).toBe(product.name)
})
