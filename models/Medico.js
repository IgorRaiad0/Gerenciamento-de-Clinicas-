import banco from "../config/banco.js";

const Medico = banco.sequelize.define('medicos', {
    id:{
        type: banco.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: banco.Sequelize.STRING(100),
        allowNull: false
    },
    cpf:{
        type: banco.Sequelize.STRING(20),
        unique: true,
        allowNull: false
    },
    espec:{
        type: banco.Sequelize.STRING(200),
        allowNull: false
    },
    crm:{
        type: banco.Sequelize.STRING(13),
        allowNull: false,
        unique: true
    },
})

Medico.sync();

export default Medico;