const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const protect = asyncHandler(async (req, res, next) => {

    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            //Se obtiene el token del encabezado
            token = req.headers.authorization.split(' ')[1];
            //Se verifica la firma del token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            //Obtener los datos del usuaio
            req.user = await User.findById(decoded.id).select('-password')

            next()
        } catch (error) {
            res.status(401)
            throw new Error('Acceso no autorizado')
        }
    };

    if(!token){
        res.status(401)
        throw new Error('Acceso no autorizado, porque no se recibió ningún token.')
    }

});

module.exports = protect;