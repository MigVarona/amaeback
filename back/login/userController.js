import User from '../models/User.js';

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = new User({ name, email, password });

    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el usuario' });
  }
};
