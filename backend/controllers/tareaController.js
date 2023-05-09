const getTareas = (req, res) => {
    res.status(200).json({mensaje: 'Mostrar las tareas'});
};

const setTareas = (req, res) => {
    res.status(200).json({mensaje: 'Crear una tarea'});
}

const updateTareas = (req, res) => {
    res.status(200).json({mensaje: `Modificar la tarea ${req.params.id}`});
}

const deleteTareas = (req, res) => {
    res.status(200).json({mensaje: `Eliminar la tarea ${req.params.id}`});
}

module.exports = {
    getTareas,
    setTareas, 
    updateTareas, 
    deleteTareas
}