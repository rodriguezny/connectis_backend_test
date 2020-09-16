import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import utilisateur from '../models/utilisateur';

dotenv.config();

const utilisateurCtrl = {

    login: (req, res, next) => {
        
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

    deleteOneUser: (req, res, next) => {

    },

    modifyUser: (req, res, next) {

    }

}