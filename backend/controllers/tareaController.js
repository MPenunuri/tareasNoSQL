
const asyncHandler = require('express-async-handler')

const getTareas = asyncHandler(async (req, res) => {
    res.status(200).json({mensaje: 'Mostrar las tareas'});
});

const setTareas = asyncHandler(async (req, res) => {
    res.status(200).json({mensaje: 'Crear una tarea'});
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