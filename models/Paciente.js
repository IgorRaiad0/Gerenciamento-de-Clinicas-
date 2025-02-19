import banco from '../config/banco.js';
import User from './User.js';

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
    },
    user_id:{
        type: banco.Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        references:{
            model: 'users',
            key: 'id'
        }
    }
});

User.hasOne(Paciente, {foreignKey: 'user_id', as: 'paciente'});
Paciente.belongsTo(User, {foreignKey: 'user_id'});

Paciente.sync();

export default Paciente;