const express = require('express');
const router = express.Router();
const { getTareas, setTareas, updateTareas, deleteTareas }= require('../controllers/tareaController')

router.get('/', getTareas).post('/', setTareas)

router.put('/:id', updateTareas).delete('/:id', deleteTareas)

module.exports = router;