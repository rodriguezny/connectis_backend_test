import express from 'express';
import userController from '../controllers/userController';
//import auth from '../middlewares/auth';


const router = express.Router();

router.post("/login",userController.login)