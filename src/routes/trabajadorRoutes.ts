import { Router } from 'express';
import TrabajadorController from '../controllers/trabajadorController';

const router = Router();

router.post('/', TrabajadorController.createTrabajador);
router.get('/:id', TrabajadorController.getTrabajadorById);
router.put('/:id', TrabajadorController.updateTrabajadorById);
router.delete('/:id', TrabajadorController.deleteTrabajadorById);

export default router;
