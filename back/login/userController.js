import jwt from 'jsonwebtoken';
import User from '../models/User.js'; 

export const loginUser = async (req, res) => {
  const { name, password } = req.body;

  try {
    const user = await User.findOne({ name }); 

    if (!user) {
      return res.status(401).json({ message: 'Usuario no encontrado' });
    }

    const isMatch = password === user.password; 

    if (!isMatch) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    const token = "dummy-token"; 

    res.status(200).json({ message: 'Login exitoso', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};
