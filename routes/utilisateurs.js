import express from 'express';
import utilisateurCtrl from '../controllers/utilisateurCtrl';
import authToken from '../middlewares/authToken';
import auth_API_key from '../middlewares/auth_API_key';


const router = express.Router();

router.post("/login", utilisateurCtrl.login)
      .post("/user", auth_API_key, authToken, utilisateurCtrl.saveUser)
      .delete("/user", auth_API_key, authToken, utilisateurCtrl.deleteUser)
      .put("/user", auth_API_key,authToken, utilisateurCtrl.modifyUser);


export default router;