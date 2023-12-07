const Cart = require('../../models/Cart')

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

    async getUserCarts(req, res){

        try {}
        catch(err){
            return res.status(400).json(err)
        }

    },

    async getCart(req, res) {

        try {}
        catch(err){
            return res.status(400).json(err)
        }

    }

}

module.exports = CartController