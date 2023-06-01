import { Request, Response } from 'express';
import Cocinero from '../models/cocinero';
import Menu, { Menu as IMenu } from '../models/menu';

const CocineroController = {
  createCocinero: async (req: Request, res: Response) => {
    try {
      const { nombre, especialidad } = req.body;

      const cocinero = new Cocinero({ nombre, especialidad });

      await cocinero.save();

      res.status(200).json({ message: 'Cocinero creado exitosamente' });
    } catch (error: any) {
      res.status(500).json({ message: 'Error al crear el cocinero', error: error.message });
    }
  },

  getCocineroById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const cocinero = await Cocinero.findById(id);
      if (cocinero) {
        res.json(cocinero);
      } else {
        res.status(404).json({ message: 'Cocinero no encontrado' });
      }
    } catch (error: any) {
      res.status(500).json({ message: 'Error al obtener el cocinero', error: error.message });
    }
  },

  updateCocineroById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { nombre, especialidad } = req.body;

      const cocinero = await Cocinero.findByIdAndUpdate(id, { nombre, especialidad }, { new: true });
      if (cocinero) {
        res.json(cocinero);
      } else {
        res.status(404).json({ message: 'Cocinero no encontrado' });
      }
    } catch (error: any) {
      res.status(500).json({ message: 'Error al actualizar el cocinero', error: error.message });
    }
  },

  deleteCocineroById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await Cocinero.findByIdAndDelete(id);
      res.status(200).json({ message: 'Cocinero eliminado exitosamente' });
    } catch (error: any) {
      res.status(500).json({ message: 'Error al eliminar el cocinero', error: error.message });
    }
  },

  getMenus: async (req: Request, res: Response) => {
    try {
      const menus: IMenu[] = await Menu.find();
      res.status(200).json({ message: 'Obtener menús', data: menus });
    } catch (error: any) {
      res.status(500).json({ message: 'Error al obtener los menús', error: error.message });
    }
  },
};

export default CocineroController;
