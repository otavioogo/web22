const Cart = require('../../models/Cart')

//Criando a regra do carrinho
const CartController = {

    async createCart(req, res) {

        const bodyData = req.body
        const { user_id } = req.params

        try {
            const createCart = await Cart.create({...bodyData, username: user_id})
            //await createCart.populate('products').execPopulate()
            return res.status(200).json(createCart)

        }
        catch(err){
            return res.status(400).json(err)
        }

    },

//Carrinho pelo username
    async getUserCarts(req, res){

        const { user_id } = req.params


        try {

            const userCarts = await Cart.find({ username: user_id})
            return res.status(200).json(userCarts)


        }
        catch(err){
            return res.status(400).json(err)
        }

    },

//Carrinho pelo Usuario
    async getCart(req, res) {

        const { user_id, cart_id } = req.params

        try {
            
            const cart = await Cart.findById(cart_id)
            return res.status(200).json(Cart)

        }
        catch(err){
            return res.status(400).json(err)
        }

    }

}

module.exports = CartController