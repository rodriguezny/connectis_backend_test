import Sequelize from 'sequelize';
import database from '../config/database';

const operation = database.define('co_operation', {
    emetteur : {
        type : Sequelize.STRING,
        allowNull : false
    },
    recepteur : {
        type : Sequelize.STRING,
        allowNull : false
    },
    prix : {
        type : Sequelize.INTEGER,
        allowNull : false
    },
    date_operation : {
        type : Sequelize.DATE,
        allowNull : false
    },
    id_type_operation : {
        type : Sequelize.INTEGER,
        allowNull : false
    }
}, 
{
    timestamps : false,
    freezeTableName : true
});

export default operation;
