import { Router } from 'express';
import AdminController from '../controllers/adminController';
import AdminBackofficeController from '../controllers/adminBackofficeController';

const router = Router();

// Rutas para el administrador
router.post('/', AdminController.createAdmin);
router.get('/:id', AdminController.getAdminById);
router.put('/:id', AdminController.updateAdminById);
router.delete('/:id', AdminController.deleteAdminById);

// Rutas para el backoffice del usuario admin
router.get('/dashboard', AdminBackofficeController.getDashboard);
router.post('/menus', AdminBackofficeController.createMenu);
router.put('/menus/:id', AdminBackofficeController.updateMenu);
router.delete('/menus/:id', AdminBackofficeController.deleteMenu);
// Agrega más rutas según las funcionalidades que desees implementar para el backoffice del admin

export default router;
