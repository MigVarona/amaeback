import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { loginUser } from './login/userController.js'; // Ajusta la ruta

dotenv.config();

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB correctamente'))
.catch(err => console.error('Error al conectar a MongoDB', err));

// Inicializar Express
const app = express();

// Middleware
app.use(express.json()); // Analiza JSON automáticamente
app.use(express.urlencoded({ extended: true })); // Analiza datos de formularios si es necesario

// Rutas
app.post('/api/login', loginUser); // Ajusta la ruta si es necesario

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Servidor ejecutándose en el puerto ${PORT}`));
