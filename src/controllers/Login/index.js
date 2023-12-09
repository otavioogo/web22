const User = require('../../models/User')
const token = require('../../middlewares')

//Criando a sessao do Usuario
const LoginController = {

    async createSession (req, res) {

        const { username, password } = req.body

        const token = jwt.sign({ username }, jwtSecretKey, { expiresIn: '1h' });

        res.json({ token });

        try {

            const user = await User.findOne({ username })
            return res.status(200).json(user)

        } catch(err) {

            return res.status(400).json(err)
        }

    }
}

module.exports = LoginController