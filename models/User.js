import banco from '../config/banco.js';


const User = banco.sequelize.define('users', {
    id:{
        type: banco.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    login:{
        type: banco.Sequelize.STRING(100),
        allowNull: false
    },
    senha:{
        type: banco.Sequelize.STRING(250),
        allowNull: true
    },
    categoria:{
        type: banco.Sequelize.ENUM('medico', 'paciente', 'admin'),
        allowNull: false,
    },
    status:{
        type: banco.Sequelize.INTEGER,
        defaultValue: 1
    }
});

User.sync();

export default User;