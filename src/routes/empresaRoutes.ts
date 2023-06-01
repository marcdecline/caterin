import { Router } from 'express';
import EmpresaController from '../controllers/empresaController';

const router = Router();

router.post('/', EmpresaController.createEmpresa);
router.get('/:id', EmpresaController.getEmpresaById);
router.put('/:id', EmpresaController.updateEmpresaById);
router.delete('/:id', EmpresaController.deleteEmpresaById);

export default router;
