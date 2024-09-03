import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { loginUser } from './login/userController.js'; 

dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado a MongoDB correctamente'))
  .catch(err => console.error('Error al conectar a MongoDB', err));


const app = express();

// Middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

// Rutas
app.post('/api/login', loginUser); 

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Servidor ejecutándose en el puerto ${PORT}`));
