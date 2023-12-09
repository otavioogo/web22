const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const authenticate = require('./middlewares')

const swaggerUI = require('swagger-ui-express')
const swaggerDocument = require("./swagger.json")

require('dotenv').config()

const routes = require('./routes')
const { authenticate } = require('./middlewares')

const app = express()
const jwtSecretKey = "HEDSHOT123";

mongoose.connect(process.env.MONGO_URI,{
}, console.log('Conectado Banco de Dados'))

app.use(cors())
app.use(express.json())
app.use(routes)

app.get('/security', authenticate, (req, res) => {
    res.json({ message: 'Acesso permitido!', user: req.user });
  });

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));


app.listen(8000, () => console.log('Server Rodando'))