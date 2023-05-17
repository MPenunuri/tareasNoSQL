const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');

const { loginUser, registerUser, getMisDatos } = require('../controllers/userController')

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/misdatos', protect, getMisDatos);

module.exports = router;