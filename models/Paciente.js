import banco from '../config/banco.js';

const Paciente = banco.sequelize.define('pacientes', {
    id:{
        type: banco.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cpf:{
        type: banco.Sequelize.STRING(20),
        allowNull: false,
        unique: true
    },
    nome:{
        type: banco.Sequelize.STRING(100),
        allowNull: false
    },
    dt_nasc:{
        type: banco.Sequelize.DATEONLY,
        allowNull: false
    },
    telefone:{
        type: banco.Sequelize.STRING(20),
        allowNull: true
    },
    email:{
        type: banco.Sequelize.STRING(100),
        allowNull: false,
        unique: true
    },
    endereco:{
        type: banco.Sequelize.STRING(200),
        allowNull: false
    }
});

Paciente.sync();

export default Paciente;