const {Router} = require('express')

//Lista de Controllers
const UserController = require('../controllers/UserController')
const LoginController = require('../controllers/Login')
const ProductController = require('../controllers/ProductController')
const CartController = require('../controllers/CartController')
const { authenticate } = require('../middlewares')

//Rota de Teste
const routes = Router()

routes.get('/', (req , res ) => {
    res.send('Ola Mundo')
})

//Rotas para usuarios
routes.post('/users', UserController.createUser)
routes.get('/users', UserController.getUsers)
routes.get('/users/:user_id', UserController.getUserById)

routes.post('/login', LoginController.createSession)

//Rotas de Produtos/acessar por ID
routes.post('/products/:user_id', ProductController.createProduct)
routes.get('/:user_id/products', ProductController.getUserProduct)
routes.patch('/products/:user_id/:product_id', ProductController.updateProduct)
routes.delete('/products/:user_id/:product_id', ProductController.deleteProduct)

routes.get('/products', ProductController.getProducts)
routes.get('/products/:product_id', ProductController.getProductById)

//Rotas para Carrinho
routes.post('/cart/:user_id',authenticate, CartController.createCart)
routes.get('/cart/:user_id',authenticate, CartController.getUserCarts)

routes.get('/cart/:cart_id',authenticate, CartController.getCart)


module.exports = routes