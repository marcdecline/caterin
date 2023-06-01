import { Request, Response } from 'express';
import Menu, { Menu as IMenu } from '../models/menu';

const MenuController = {
  createMenu: async (req: Request, res: Response) => {
    try {
      const { name, description, type, precio } = req.body;

      const menu: IMenu = new Menu({
        name,
        description,
        type,
        precio,
      });

      const createdMenu: IMenu = await menu.save();

      res.status(201).json(createdMenu);
    } catch (error: any) {
      res.status(500).json({ message: 'Error al crear el menú', error: error.message });
    }
  },
  updateMenu: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { name, description, type, precio } = req.body;
  
      const updatedMenu: IMenu | null = await Menu.findByIdAndUpdate(
        id,
        { name, description, type, precio },
        { new: true }
      );
      if (updatedMenu) {
        res.status(200).json(updatedMenu);
      } else {
        res.status(404).json({ message: 'Menú no encontrado' });
      }
    } catch (error: any) {
      res.status(500).json({ message: 'Error al actualizar el menú', error: error.message });
    }
  },
  deleteMenu: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
  
      const deletedMenu: IMenu | null = await Menu.findByIdAndDelete(id);
  
      if (deletedMenu) {
        res.json({ message: 'Menú eliminado' });
      } else {
        res.status(404).json({ message: 'Menú no encontrado' });
      }
    } catch (error: any) {
      res.status(500).json({ message: 'Error al eliminar el menú', error: error.message });
    }
  }
  
  
  // Otros métodos del controlador de menús...
};

export default MenuController;
