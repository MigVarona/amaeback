// index.js
import express from 'express';
import connectDB from './config/database.js';
import dotenv from 'dotenv';
import { createUser } from './login/userController.js';

// Configurar dotenv
dotenv.config();

// Conectar a MongoDB
connectDB();

// Inicializar Express
const app = express();

// Middleware para parsear el cuerpo de las peticiones (body-parser integrado en Express)
app.use(express.json());

// Ruta para manejar la creación de usuarios
app.post('/api/login/users', createUser);

// Definir el puerto
const PORT = process.env.PORT || 5000;

// Iniciar el servidor
app.listen(PORT, () => console.log(`Servidor ejecutándose en el puerto ${PORT}`));
