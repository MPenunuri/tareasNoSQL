const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler} = require('./middleware/errorMiddleware');
const connectDB = require('./config/db')
const port = process.env.PORT || 5000;

connectDB()

const app = express();

app.use('/api/tareas', require('./routes/tareasRoutes'))

//app.use(errorHandler) // aparentemente hay un problema con eso, verificar más adelante

app.listen(port, () => console.log(`Server iniciado en el puerto ${port}`))
