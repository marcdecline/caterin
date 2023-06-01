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
  // Otros métodos del controlador de menús...
};

export default MenuController;
