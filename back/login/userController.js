// login/userController.js
import User from '../models/User.js';

// Función para crear un nuevo usuario
export const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Crear un nuevo usuario
    const newUser = new User({ name, email, password });

    // Guardar el usuario en la base de datos
    await newUser.save();

    // Responder con el usuario creado
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el usuario' });
  }
};
