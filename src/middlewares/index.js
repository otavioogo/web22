const middlewares = {

    authenticate(req, res, next) {

        const{ Authentication } = req.Headers
        const { user_id } = req.params

        if(!this.authentication) return res.status(400).json({message: 'No Token'})
        if(authentication != user_id) return res.status(400).json({message: 'Not allowed'})

        next()
    }

}

module.exports = middlewares