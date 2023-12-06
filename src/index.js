const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

const app = express()

mongoose.connect(process.env.MONGO_URI,{
}, console.log('Conectado Banco de Dados'))

app.use(cors())
app.use(express.json())

app.get('/', (req , res ) => {
    res.send('Ola Mundo')
})

app.listen(8000, () => console.log('Server Rodando'))