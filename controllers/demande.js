const userCtrl = require('./user');
const Demande = require('../models/demande');
const User = require('../models/user');
const bcrypt = require ('bcrypt');




exports.getAll = (req, res, next) => {
    Demande.find()
        .populate('client','firstname')
        .then(demandes => res.status(200).json(demandes))
        .catch(error => res.status(400).json({ error }));

};

exports.create = (req, res, next) => {




    const demande = new Demande({
        name:req.body.name,
        description:req.body.description,


        echeance:req.body.echeance,
    
        typedemande:req.body.typedemande,
    
        addresse:req.body.adresse,
    
        status:"Attente de validation",
    
        owner:"id",
    
        category:req.body.category,





    });
    demande.save()
        .then(
            (demande) => {

                res.status(201).json(demande)
            })

        .catch(error => res.status(400).json({ error }));



 

};




