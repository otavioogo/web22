const {Router} = require('express')

const UserController = require('../controllers/UserController')

const routes = Router()

routes.get('/', (req , res ) => {
    res.send('Ola Mundo')
})

routes.post('/users', UserController.createUser)
routes.get('/users')

routes.get('/users/:user_id')

routes.post('/login')

routes.post('/product/:user_id')
routes.get('/products/:user_id')
routes.patch('/products/:user_id/:product-id')
routes.delete('/products/:user_id/:product_id')

routes.get('/products')
routes.get('/products/:products_id')

routes.post('/cart/:user_id')
routes.get('/cart/:user_id')

routes.get('/cart/:cart_id')


module.exports = routes