import { unique } from "jquery";
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
    telefone:{
        type: banco.Sequelize.STRING(20)
    },
    email:{
        type: banco.Sequelize.STRING(100),
        unique: true,
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
    }
})

Medico.sync();

export default Medico;