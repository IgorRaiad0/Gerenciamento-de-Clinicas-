const express = require('express');
const router = express.Router();
const consultaController = require('../controllers/consultaController');

// Rotas para views
router.get('/consultas', consultaController.renderConsultas);
router.get('/consultas/nova', consultaController.renderNovaConsulta);
router.get('/consultas/editar/:id', consultaController.renderEditarConsulta);

// Rotas para API
router.post('/consultas/nova', consultaController.cadastrarConsulta);
router.post('/consultas/editar/:id', consultaController.editarConsulta);
router.post('/consultas/excluir/:id', consultaController.excluirConsulta);

module.exports = router;