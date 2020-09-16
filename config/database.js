import Sequelize from 'sequelize';

const database = new Sequelize('connectis_backend_test','root','',{
    host: 'localhost',
    dialect: 'mysql',
    operatorAliases : false
});

export default database;