import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import utilisateur from '../models/utilisateur';

dotenv.config();

const utilisateurCtrl = {

    login: (req, res, next) => {
        const api_key = req.body.api_key;
        if (api_key == process.env.API_KEY) {
            let phone = req.body.telephone;
            utilisateur.findOne({
              where: {telephone: phone} 
            })
            .then(utilisateur => {
              if (!utilisateur) {
                return res.status(401).json({ error: 'Utilisateur non trouvé !' });
              }
              bcrypt.compare(req.body.password, utilisateur.password)
              .then(valid => {
                if (!valid) {
                  return res.status(401).json({ error: 'Mot de passe incorrect !' });
                } 
                sendToken(res, phone, 200, 'User logged in successfully');
              })
              .catch(error => res.status(500).json({ error }));
            })
            .catch(error => res.status(500).json({ error })); 
        }else {
          res.status(401).json({status : 401, message:'API_KEY non valide'
          });
        }
    },

    saveUser: (req, res, next) => {
        bcrypt.hash(req.body.password, 10)
        .then(hash => {
        let nom = req.body.nom,
            prenom = req.body.prenom,
            dob = req.body.dob,
            email = req.body.email,
            telephone = req.body.telephone,
            password = hash,
            created_date = req.body.created_date
        
        utilisateur.create({nom, prenom, dob, email, telephone, password, created_date})
        .then(data => {
            if(data) {
                res.status(201).json({
                    status: 201,
                    message: 'Utilisatuer créé avec succes!',
                    utilisateur: data});
            }
        } )
        .catch(error => res.status(400).json({error}));
    })
    .catch(error => res.status(500).json({error}));

    },

    deleteUser: (req, res, next) => {
        utilisateur.destroy({
            where: {
              id: req.body.id
            }
          }).then(() => res.status(200).json({message: 'user deleted successfully'}))
          .catch(error => res.status(500).json({error}));
    },

    modifyUser: (req, res, next) => {
        Utilisateur.update({ nom: req.body.nom,
                 prenom: req.body.prenom,
                dob: req.body.dob,
                email: req.body.email,
                telephone: req.body.email
            },
                {
                where: {
                    id: req.body.id
                }
          }).the(() => res.status(200).json({status: 200, msg: 'user modified successfully'}))
          .catch(error => res.status(500).json({status: 500, error: error}));
    }

}


const sendToken = (res, phone, status, message) => {
    const token = jwt.sign(
        {
          phone : phone,
        },
        process.env.TOKEN_KEY,
        { 
          expiresIn : '2h'
        }
      )
      return res.status(status).json({
        status : status,
        message : message,
        data : {token : token}
      })
}

export default utilisateurCtrl;