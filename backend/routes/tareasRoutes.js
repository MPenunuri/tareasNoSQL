const express = require('express');
const router = express.Router();
const { getTareas, setTareas, updateTareas, deleteTareas } = require('../controllers/tareaController');
const  protect  = require('../middleware/authMiddleware');

router.route('/').get(protect, getTareas).post(protect, setTareas);
router.route('/:id').put(protect, updateTareas).delete(protect, deleteTareas);

module.exports = router;