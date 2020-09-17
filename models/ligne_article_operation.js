import Sequelize from 'sequelize';
import database from '../config/database';


const ligne_article_operation = database.define('co_ligne_article_operation', {
    produit_id : {
        type : Sequelize.INTEGER,
        allowNull : false
    },
    operation_id : {
        type : Sequelize.INTEGER,
        allowNull : false
    },
    quantite : {
        type : Sequelize.INTEGER,
        allowNull : false
    },
    prix : {
        type : Sequelize.INTEGER,
        allowNull : false
    }
},
{
    timestamps : false,
    freezeTableName : true
});

ligne_article_operation.belongsTo(produit, {
    foreignkey : 'produit_id',
    onDelete : 'CASCADE',
    onUpdate : 'CASCADE'
});

ligne_article_operation.belongsTo(operation, {
    foreignkey : 'operation_id',
    onDelete : 'CASCADE',
    onUpdate : 'CASCADE'
});

export default ligne_article_operation;