const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const loginUser = asyncHandler(async (req,res) => {
    res.json({message:'Login'});
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

    // PENDIENTE REVISAR LAS SIGUIENTES LINEAS
    //const salt = bcrypt.genSalt(10) //Se genera una cadena de texto aleatoria
    //const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        name,
        email,
        password
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

    res.json({message:'Registrar usuario'})
})

const getMisDatos = asyncHandler(async (req,res) => {
    res.json({message:'Mis datos'})
})

module.exports = {
    loginUser,
    registerUser,
    getMisDatos
}