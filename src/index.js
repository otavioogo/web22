const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

const routes = require('./routes')

const app = express()

mongoose.connect(process.env.MONGO_URI,{
}, console.log('Conectado Banco de Dados'))

app.use(cors())
app.use(express.json())
app.use(routes)


app.listen(8000, () => console.log('Server Rodando'))