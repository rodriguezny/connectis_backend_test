import Sequelize from 'sequelize';
import database from '../config/database';



const utilisateur = database.define('co_utilisateur',{
    nom:{
        type: Sequelize.STRING,
        allowNull: false
    },
    prenom:{
        type: Sequelize.STRING,
        allowNull: false
    },
    dob:{
        type: Sequelize.DATE,
        allowNull: true
    },
    email:{
        type: Sequelize.STRING,
        allowNull: true
    },
    telephone:{
        type: Sequelize.STRING,
        allowNull: false
    },
    password:{
        type: Sequelize.STRING,
        allowNull: true
    },
    created_date:{
        type: Sequelize.DATE,
        allowNull: true
    }
},{ 
    timestamps: false
});


export default utilisateur;