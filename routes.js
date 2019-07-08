const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('index', '/')
routes.add('product', '/product/:id', 'product')
routes.add('product-edit', '/product/:id/edit', 'edit-product')