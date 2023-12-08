const mongoose = require('mongoose')

//Estrutura do carrinho de compra / + ID
const Schema = new mongoose.Schema({
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],

    username: {
        type: mongoose.Schema.Types.ObjectId,
        required: 'User',
        
    },
    address: {
        street: {
            type: String,
            required: true
        },
        number: {
            type: Number,
            required: true
        },
        city: {
            type: String,
            required: true
        }
    },
    payment: {
        card: {
            number: {
            Type: String,
           
        },
        cvc: {

            type: String,
            
             }
        }
    }
})

module.exports = mongoose.model('Cart', Schema)