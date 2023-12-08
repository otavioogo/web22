const Product = require('../../models/Product')

//CRIANDO O REPARTIMENTO CRUD DO PRODUTO - CREATE
const ProductController = {

    async createProduct(req,  res) {

        
        const bodyData = req.body
        const { user_id } = req.params

        try {

            const data = {username: user_id, ...bodyData}

            const newProduct = await Product.create(data)
            //await newProduct.populate('username').execPopulate()    

            return res.status(200).json(newProduct)       

        } catch(err) {

            return res.status(400).json(err)
        }
    },

//Listando produtos de usario especifico
    async getUserProduct(req, res) {

        const { user_id} = req.params

        try {

            const productsOfAnUser = await Product.find({ username: user_id})
            return res.status(200).json(productsOfAnUser)


        } catch(err) {

            return res.status(400).json(err)
        }
    },
    
//update no produto criado pelo USUARIO
    async updateProduct(req, res) {

        const bodyData = req.body
        const { product_id, user_id } = req.params

        try {

            const updateProduct = await Product.findByIdAndUpdate(product_id, bodyData , {new: true})
            return req.status(200).json(updateProduct)

        } catch(err) {

            return res.status(400).json(err)
        }
    },

//Deletar produto , tanto pelo id, quando pelo nome.
    async deleteProduct(req, res) {
        
        const { product_id, user_id } = req.params

        try {

            const deleteProduct = await Product.findOneAndDelete(product_id)
            return req.status(200).json(deleteProduct)


        } catch(err) {

            return res.status(400).json(err)
        }

    },

//Listar Produtos apenas
    async getProducts(req , res) {


        try {

            const products = await Product.find()
            return res.status(200).json(products)


        } catch(err) {

            return res.status(400).json(err)
        }
    },

//Listando produto pelo ID
    async getProductById(req, res) {

            const { product_id } = req.params

        try {

            const product = await Product.findById(product_id)
            return res.status(200).json(product)

        } catch(err) {

            return res.status(400).json(err)
        }

    }

}

module.exports = ProductController