import { Request, Response } from 'express';
import Trabajador from '../models/trabajador';

const TrabajadorController = {
  createTrabajador: async (req: Request, res: Response) => {
    try {
      // Obtener los datos del trabajador desde el cuerpo de la solicitud
      const { nombre, puesto } = req.body;

      // Crear una nueva instancia de Trabajador
      const trabajador = new Trabajador({ nombre, puesto });

      // Guardar el trabajador en la base de datos
      await trabajador.save();

      // Enviar una respuesta exitosa
      res.status(200).json({ message: 'Trabajador creado exitosamente' });
    } catch (error: any) {
      // En caso de producirse un error, enviar una respuesta de error
      res.status(500).json({ message: 'Error al crear el trabajador', error: error.message });
    }
  },

  getTrabajadorById: async (req: Request, res: Response) => {
    try {
      // Obtener el ID del trabajador desde los parámetros de la URL
      const { id } = req.params;

      // Buscar el trabajador en la base de datos por ID
      const trabajador = await Trabajador.findById(id);

      // Verificar si el trabajador existe
      if (!trabajador) {
        return res.status(404).json({ message: 'Trabajador no encontrado' });
      }

      // Enviar una respuesta con el trabajador encontrado
      res.status(200).json(trabajador);
    } catch (error: any) {
      // En caso de producirse un error, enviar una respuesta de error
      res.status(500).json({ message: 'Error al obtener el trabajador', error: error.message });
    }
  },

  updateTrabajadorById: async (req: Request, res: Response) => {
    try {
      // Obtener el ID del trabajador desde los parámetros de la URL
      const { id } = req.params;

      // Obtener los datos actualizados del trabajador desde el cuerpo de la solicitud
      const { nombre, puesto } = req.body;

      // Buscar y actualizar el trabajador en la base de datos por ID
      const trabajador = await Trabajador.findByIdAndUpdate(id, { nombre, puesto }, { new: true });

      // Verificar si el trabajador existe
      if (!trabajador) {
        return res.status(404).json({ message: 'Trabajador no encontrado' });
      }

      // Enviar una respuesta con el trabajador actualizado
      res.status(200).json(trabajador);
    } catch (error: any) {
      // En caso de producirse un error, enviar una respuesta de error
      res.status(500).json({ message: 'Error al actualizar el trabajador', error: error.message });
    }
  },

  deleteTrabajadorById: async (req: Request, res: Response) => {
    try {
      // Obtener el ID del trabajador desde los parámetros de la URL
      const { id } = req.params;

      // Eliminar el trabajador de la base de datos por ID
      await Trabajador.findByIdAndDelete(id);

      // Enviar una respuesta exitosa
      res.status(200).json({ message: 'Trabajador eliminado exitosamente' });
    } catch (error: any) {
      // En caso de producirse un error, enviar una respuesta de error
      res.status(500).json({ message: 'Error al eliminar el trabajador', error: error.message });
    }
  },
};

export default TrabajadorController;
