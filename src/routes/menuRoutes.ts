import express, { Request, Response } from 'express';
import Menu, { Menu as IMenu } from '../models/menu';
import MenuController from '../controllers/menuController';

const router = express.Router();

// Crear un nuevo menú
router.post('/', MenuController.createMenu);

// Obtener todos los menús
router.get('/', async (req: Request, res: Response) => {
  try {
    const menus: IMenu[] = await Menu.find();
    res.json(menus);
  } catch (error: any) {
    res.status(500).json({ message: 'Error al obtener los menús', error: error.message });
  }
});

// Obtener un menú por su ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const menu: IMenu | null = await Menu.findById(id);
    if (menu) {
      res.json(menu);
    } else {
      res.status(404).json({ message: 'Menú no encontrado' });
    }
  } catch (error: any) {
    res.status(500).json({ message: 'Error al obtener el menú', error: error.message });
  }
});

// Actualizar un menú por su ID
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, description, type } = req.body;

    const menu: IMenu | null = await Menu.findById(id);
    if (menu) {
      menu.name = name;
      menu.description = description;
      menu.type = type;

      const updatedMenu: IMenu = await menu.save();
      res.json(updatedMenu);
    } else {
      res.status(404).json({ message: 'Menú no encontrado' });
    }
  } catch (error: any) {
    res.status(500).json({ message: 'Error al actualizar el menú', error: error.message });
  }
});

// Eliminar un menú por su ID
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const menu: IMenu | null = await Menu.findById(id);
    if (menu) {
      await menu.deleteOne();
      res.json({ message: 'Menú eliminado' });
    } else {
      res.status(404).json({ message: 'Menú no encontrado' });
    }
  } catch (error: any) {
    res.status(500).json({ message: 'Error al eliminar el menú', error: error.message });
  }
});

export default router;
