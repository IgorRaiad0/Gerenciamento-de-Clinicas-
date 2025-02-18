import express from 'express';
const router = express.Router();

import PacienteController from '../controllers/PacienteController.js';

router.get('/', PacienteController.listar);
router.get('/cadastro', PacienteController.cadastrar);
router.post('/salvar', PacienteController.salvar);
router.get('/editar/:id', PacienteController.edicao);
router.post('/editar/:id', PacienteController.update);
router.post('/excluir/:id', PacienteController.excluir);

export default router;