import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoURI = process.env.MONGODB_URI;

// Función para conectar a MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado a MongoDB correctamente');
  } catch (err) {
    console.error('Error al conectar a MongoDB:', err);
    process.exit(1); // Salir del proceso con fallo
  }
};

// Exportar la función de conexión
export default connectDB;
