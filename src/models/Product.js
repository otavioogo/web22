const mongoose = require('mongoose')

//Estrutura do produto com os campos
const Schema = new mongoose.Schema({
    Productname: {
        type: String,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    productQuantity: {
        type: Number,
        required: true
    },
    productImage: {
        type: String
    },
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = mongoose.model('Product', Schema)