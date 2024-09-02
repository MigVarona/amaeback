// index.js
import express from 'express';
import connectDB from './config/database.js';
import dotenv from 'dotenv';
import { createUser } from './login/userController.js';

dotenv.config();

connectDB();

// Inicializar Express
const app = express();

app.use(express.json());

app.post('/api/login/users', createUser);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Servidor ejecutándose en el puerto ${PORT}`));
