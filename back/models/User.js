// models/User.js
import mongoose from 'mongoose';

// Definir el esquema del usuario
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

// Crear el modelo de usuario
const User = mongoose.model('User', userSchema);

// Exportar el modelo
export default User;
