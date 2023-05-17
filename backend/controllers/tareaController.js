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

    const tarea = await Tarea.findById(req.params.id)

    if(!tarea){
        res.status(400);
        throw new Error('Tarea no encontrada')
    }

    if(tarea.user.toString() !== req.user.id){
        res.status(401);
        throw new Error('Acceso no autorizado, la tarea no corresponde al usuario.')
    }

    const tareaModificada = await Tarea.findByIdAndUpdate(req.params.id, req.body, {new:true})

    res.status(200).json(tareaModificada);
});

const deleteTareas = asyncHandler(async (req, res) => {

    const tarea = await Tarea.findById(req.params.id);

    if(!tarea){
        res.status(400);
        throw new Error('Tarea no encontrada')
    };

    if(tarea.user.toString() !== req.user.id){
        res.status(401);
        throw new Error('Acceso no autorizado, la tarea no corresponde al usuario.')
    }

    await tarea.deleteOne();

    res.status(200).json({ id: req.params.id });
});

module.exports = {
    getTareas,
    setTareas, 
    updateTareas, 
    deleteTareas
}