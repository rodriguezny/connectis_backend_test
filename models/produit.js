import Sequelize from 'sequelize';
import database from '../config/database';

const produit = database.define('co_produit', {
    nom : {
        type : Sequelize.STRING,
        allowNull : false
    },
    volume : {
        type : Sequelize.INTEGER,
        allowNull : false
    },
    prix : {
        type : Sequelize.INTEGER,
        allowNull : false
    }
},
{
    timestamps : false
}
);

export default produit;