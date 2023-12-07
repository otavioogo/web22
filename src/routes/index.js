const {Router} = require('express')

const UserController = require('../controllers/UserController')
const LoginController = require('../controllers/Login')
const ProductController = require('../controllers/ProductController')

const routes = Router()

routes.get('/', (req , res ) => {
    res.send('Ola Mundo')
})

routes.post('/users', UserController.createUser)
routes.get('/users', UserController.getUsers)

routes.get('/users/:user_id', UserController.getUserById)

routes.post('/login', LoginController.createSession)

routes.post('/products/:user_id', ProductController.createProduct)
routes.get('/products/:user_id', ProductController.getUserProduct)
routes.patch('/products/:user_id/:product-id', ProductController.updateProduct)
routes.delete('/products/:user_id/:product_id', ProductController.deleteProdcut)

routes.get('/products', ProductController.getProducts)
routes.get('/products/:products_id', ProductController.getProductById)

routes.post('/cart/:user_id')
routes.get('/cart/:user_id')

routes.get('/cart/:cart_id')


module.exports = routes