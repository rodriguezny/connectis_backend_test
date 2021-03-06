import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export default (req, res, next) => {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decodedToken = jwt.verify(token, process.env.TOKEN_KEY);
      req.userData = decodedToken;
      next()
    } catch (error) {
      return res.status(401).json({
        status : 401,
        error : 'Authentication failed, please check your credentials'
      })
    }
  }