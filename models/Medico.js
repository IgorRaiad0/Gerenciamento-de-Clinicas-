import banco from "../config/banco.js";
import User from './User.js';

const Medico = banco.sequelize.define('medicos', {
    id: {
        type: banco.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: banco.Sequelize.STRING(100),
        allowNull: false
    },
    cpf: {
        type: banco.Sequelize.STRING(20),
        unique: true,
        allowNull: false
    },
    espec: {
        type: banco.Sequelize.STRING(200),
        allowNull: false
    },
    crm: {
        type: banco.Sequelize.STRING(13),
        allowNull: false,
        unique: true
    },
    user_id: {
        type: banco.Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        references: {
            model: 'users',
            key: 'id'
        }
    }
});

User.hasOne(Medico, { foreignKey: 'user_id', as: 'medico' });
Medico.belongsTo(User, { foreignKey: 'user_id' });

Medico.sync();

export default Medico;