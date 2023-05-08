const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

app.get('/api/tareas', (req, res) => {
    res.status(200).json({mensaje: 'mostrar las tareas'});
})

app.listen(port, () => console.log(`Server iniciado en el puerto ${port}`))
