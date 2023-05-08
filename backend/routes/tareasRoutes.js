const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({mensaje: 'Mostrar las tareas'});
})

router.post('/', (req, res) => {
    res.status(200).json({mensaje: 'Crear una tarea'});
})

router.put('/:id', (req, res) => {
    res.status(200).json({mensaje: `Modificar la tarea ${req.params.id}`});
})

router.delete('/:id', (req, res) => {
    res.status(200).json({mensaje: `Eliminar la tarea ${req.params.id}`});
})


module.exports = router;