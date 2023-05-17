const Tarea = require('../models/tareaModel');

const asyncHandler = require('express-async-handler')

const getTareas = asyncHandler(async (req, res) => {
    const tareas = await Tarea.find({user: req.user.id})
    res.status(200).json(tareas);
});

const setTareas = asyncHandler(async (req, res) => {

    if(!req.body.texto){
        res.status(400)
        throw new Error('Favor de registrar una descripción para la tarea.');
    };

    const tarea = await Tarea.create({
        texto: req.body.texto,
        user: req.user.id
    })


    res.status(200).json(tarea);
});

const updateTareas = asyncHandler(async (req, res) => {
    res.status(200).json({mensaje: `Modificar la tarea ${req.params.id}`});
});

const deleteTareas = asyncHandler(async (req, res) => {
    res.status(200).json({mensaje: `Eliminar la tarea ${req.params.id}`});
});

module.exports = {
    getTareas,
    setTareas, 
    updateTareas, 
    deleteTareas
}