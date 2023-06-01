import { Router } from 'express';
import CocineroController from '../controllers/cocineroController';

const router = Router();

router.post('/', CocineroController.createCocinero);
router.get('/:id', CocineroController.getCocineroById);
router.put('/:id', CocineroController.updateCocineroById);
router.delete('/:id', CocineroController.deleteCocineroById);

export default router;
