import dotenv from 'dotenv';
dotenv.config();
export default (req, res, next) => {
    let api_key = req.body.api_key;

    if (api_key == process.env.API_KEY) {
        next();
    }else {
        res.status(401).json({Error : 'API_KEY non valid ou absent'});
    }
}
