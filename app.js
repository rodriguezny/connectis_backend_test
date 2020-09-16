import express from "express";
import bodyParser from "body-parser";
import database from './config/database';
import routes from './routes/';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


//initializing Routes
app.use('/api/',routes);

app.get('/',(req, res, next) => res.status(200).send({
  status : 200,
  message : 'Welcome to Rodriguez Nyiringabo API, read the readme file to learn how to use it',
}));

app.use('**', (req, res) => res.status(404).send({
  status : 404,
  message : `The resource you requested was not found`
}));

// testing the database connection
const dbconnection = async() =>{
  try {
    await database.authenticate();
    console.log('Connection to the database has been established successfully');
  } catch (error) {
     console.error('Unable to connect to the database:',error);
  }
}

dbconnection();

export default app;