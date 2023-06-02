import { Request, Response } from 'express';
import Admin from '../models/admin';

const AdminController = {
  createAdmin: async (req: Request, res: Response) => {
    try {
      // Obtener los datos del administrador desde el cuerpo de la solicitud
      const { nombre, correo, password } = req.body;

      // Crear una nueva instancia de Admin
      const admin = new Admin({ nombre, correo, password });

      // Guardar el administrador en la base de datos
      await admin.save();

      // Enviar una respuesta exitosa
      res.status(200).json({ message: 'Administrador creado exitosamente' });
    } catch (error: any) {
      // En caso de producirse un error, enviar una respuesta de error
      res.status(500).json({ message: 'Error al crear el administrador', error: error.message });
    }
  },

  getAdminById: async (req: Request, res: Response) => {
    try {
      // Obtener el ID del administrador desde los parámetros de la URL
      const { id } = req.params;

      // Buscar el administrador en la base de datos por ID
      const admin = await Admin.findById(id);

      // Verificar si el administrador existe
      if (!admin) {
        return res.status(404).json({ message: 'Administrador no encontrado' });
      }

      // Enviar una respuesta con el administrador encontrado
      res.status(200).json(admin);
    } catch (error: any) {
      // En caso de producirse un error, enviar una respuesta de error
      res.status(500).json({ message: 'Error al obtener el administrador', error: error.message });
    }
  },

  updateAdminById: async (req: Request, res: Response) => {
    try {
      // Obtener el ID del administrador desde los parámetros de la URL
      const { id } = req.params;

      // Obtener los datos actualizados del administrador desde el cuerpo de la solicitud
      const { nombre, correo, password } = req.body;

      // Buscar y actualizar el administrador en la base de datos por ID
      const admin = await Admin.findByIdAndUpdate(id, { nombre, correo, password }, { new: true });

      // Verificar si el administrador existe
      if (!admin) {
        return res.status(404).json({ message: 'Administrador no encontrado' });
      }

      // Enviar una respuesta con el administrador actualizado
      res.status(200).json(admin);
    } catch (error: any) {
      // En caso de producirse un error, enviar una respuesta de error
      res.status(500).json({ message: 'Error al actualizar el administrador', error: error.message });
    }
  },

  deleteAdminById: async (req: Request, res: Response) => {
    try {
      // Obtener el ID del administrador desde los parámetros de la URL
      const { id } = req.params;

      // Eliminar el administrador de la base de datos por ID
      await Admin.findByIdAndDelete(id);

      // Enviar una respuesta exitosa
      res.status(200).json({ message: 'Administrador eliminado exitosamente' });
    } catch (error: any) {
      // En caso de producirse un error, enviar una respuesta de error
      res.status(500).json({ message: 'Error al eliminar el administrador', error: error.message });
    }
  },
};

export default AdminController;