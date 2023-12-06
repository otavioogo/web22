const {Router} = require('express')

const routes = Router()

routes.get('/', (req , res ) => {
    res.send('Ola Mundo')
})


module.exports = routes