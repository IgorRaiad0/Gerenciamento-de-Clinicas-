import express from 'express';
const router = express.Router();

import MedicoController from '../controllers/MedicoController.js';

router.get('/', MedicoController.listar);
router.get('/cadastro', MedicoController.cadastrar);
router.post('/salvar', MedicoController.salvar);
router.get('/editar/:id', MedicoController.edicao);
router.post('/editar/:id', MedicoController.update);

export default router;