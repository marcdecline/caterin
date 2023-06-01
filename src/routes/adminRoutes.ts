import { Router } from 'express';
import AdminController from '../controllers/adminController';

const router = Router();

router.post('/', AdminController.createAdmin);
router.get('/:id', AdminController.getAdminById);
router.put('/:id', AdminController.updateAdminById);
router.delete('/:id', AdminController.deleteAdminById);

export default router;
