import { Request, Response } from 'express';
import Empresa from '../models/empresa';

const EmpresaController = {
  createEmpresa: async (req: Request, res: Response) => {
    try {
      // Obtener los datos de la empresa desde el cuerpo de la solicitud
      const { nombre, direccion } = req.body;

      // Crear una nueva instancia de Empresa
      const empresa = new Empresa({ nombre, direccion });

      // Guardar la empresa en la base de datos
      await empresa.save();

      // Enviar una respuesta exitosa
      res.status(200).json({ message: 'Empresa creada exitosamente' });
    } catch (error: any) {
      // En caso de producirse un error, enviar una respuesta de error
      res.status(500).json({ message: 'Error al crear la empresa', error: error.message });
    }
  },

  getEmpresaById: async (req: Request, res: Response) => {
    try {
      // Obtener el ID de la empresa desde los parámetros de la URL
      const { id } = req.params;

      // Buscar la empresa en la base de datos por ID
      const empresa = await Empresa.findById(id);

      // Verificar si la empresa existe
      if (!empresa) {
        return res.status(404).json({ message: 'Empresa no encontrada' });
      }

      // Enviar una respuesta con la empresa encontrada
      res.status(200).json(empresa);
    } catch (error: any) {
      // En caso de producirse un error, enviar una respuesta de error
      res.status(500).json({ message: 'Error al obtener la empresa', error: error.message });
    }
  },

  updateEmpresaById: async (req: Request, res: Response) => {
    try {
      // Obtener el ID de la empresa desde los parámetros de la URL
      const { id } = req.params;

      // Obtener los datos actualizados de la empresa desde el cuerpo de la solicitud
      const { nombre, direccion } = req.body;

      // Buscar y actualizar la empresa en la base de datos por ID
      const empresa = await Empresa.findByIdAndUpdate(id, { nombre, direccion }, { new: true });

      // Verificar si la empresa existe
      if (!empresa) {
        return res.status(404).json({ message: 'Empresa no encontrada' });
      }

      // Enviar una respuesta con la empresa actualizada
      res.status(200).json(empresa);
    } catch (error: any) {
      // En caso de producirse un error, enviar una respuesta de error
      res.status(500).json({ message: 'Error al actualizar la empresa', error: error.message });
    }
  },

  deleteEmpresaById: async (req: Request, res: Response) => {
    try {
      // Obtener el ID de la empresa desde los parámetros de la URL
      const { id } = req.params;

      // Eliminar la empresa de la base de datos por ID
      await Empresa.findByIdAndDelete(id);

      // Enviar una respuesta exitosa
      res.status(200).json({ message: 'Empresa eliminada exitosamente' });
    } catch (error: any) {
      // En caso de producirse un error, enviar una respuesta de error
      res.status(500).json({ message: 'Error al eliminar la empresa', error: error.message });
    }
  },
};

export default EmpresaController;
