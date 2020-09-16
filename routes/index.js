import express from 'express';
import userRoute from './utilisateurs';


const router = express.Router();

router.use(userRoute);


export default router;