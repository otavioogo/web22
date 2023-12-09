const middlewares = {

    authenticate(req, res, next) {

        const token = req.headers['authorization'];

        if (!token) {
          return res.status(403).json({ message: 'Token não fornecido.' });
        }
      
        jwt.verify(token, jwtSecretKey, (err, decoded) => {
          if (err) {
            return res.status(401).json({ message: 'Token inválido.' });
          }
      
          req.user = decoded;
          next();
        });

}}

module.exports = middlewares