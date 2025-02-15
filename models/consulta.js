const { DataTypes } = require('sequelize');
const sequelize = require('../config/banco.js'); 

const Consulta = sequelize.define('Consulta', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  medico_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  paciente_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  data: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  hora: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'agendada',
  },
});

module.exports = Consulta;