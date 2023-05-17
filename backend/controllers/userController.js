const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const loginUser = asyncHandler(async (req,res) => {

    const { email, password } = req.body;

    if(!email || !password){
        res.status(400);
        throw new Error('Favor de verificar que estén todos los datos.')
    }

    const user = await User.findOne({email});

    if(user && (await bcrypt.compare(password, user.password))){
        res.status(200).json({
            message: '¡Bienvenido!',
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user.id)
        });
    } else {
        throw new Error('Credenciales incorrectas');
    }
});

const registerUser = asyncHandler(async (req,res) => {

    const {name, email, password } = req.body;

    if(!name || !email || !password){
        res.status(400);
        throw new Error('Favor de verificar que estén todos los datos.')
    }

    const userExists = await User.findOne({ email })

    if(userExists){
        res.status(400);
        throw new Error('Ese usuario ya fue registrado.')
    }

    //Hash al password
    const salt = bcrypt.genSalt(10); //Se genera una cadena de texto aleatoria
    const hashedPassword = await bcrypt.hash(password, parseInt(salt));

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });

    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email
        });
    } else {
        res.status(400);
        throw new Error('No se pudo crear el usuraio.')

    }
})

const getMisDatos = asyncHandler(async (req,res) => {
    res.json({message:'Mis datos'})
})

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET,{
        expiresIn: '30d'
    })
}

module.exports = {
    loginUser,
    registerUser,
    getMisDatos
}