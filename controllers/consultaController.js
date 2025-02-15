const Consulta = require('../models/Consulta');

// Renderizar lista de consultas
exports.renderConsultas = async (req, res) => {
  try {
    const consultas = await Consulta.findAll();
    res.render('consultas', { consultas });
  } catch (error) {
    res.status(500).send('Erro ao carregar consultas');
  }
};

// Renderizar formulário de nova consulta
exports.renderNovaConsulta = (req, res) => {
  res.render('novaConsulta');
};

// Renderizar formulário de edição de consulta
exports.renderEditarConsulta = async (req, res) => {
  try {
    const { id } = req.params;
    const consulta = await Consulta.findByPk(id);
    if (!consulta) {
      return res.status(404).send('Consulta não encontrada');
    }
    res.render('editarConsulta', { consulta });
  } catch (error) {
    res.status(500).send('Erro ao carregar consulta');
  }
};