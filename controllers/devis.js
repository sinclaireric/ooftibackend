const userCtrl = require('./user');
const Devis = require('../models/Devis');
const User = require('../models/user');
const bcrypt = require ('bcrypt');




exports.getAll = (req, res, next) => {
    Devis.find()
        .populate('category','name')
        .then(devis => res.status(200).json(devis))
        .catch(error => res.status(400).json({ error }));

};

exports.create = (req, res, next) => {




    const Devis = new Devis({
        entreprise:req.body.entreprise,
        total:req.body.total,
        demande:req.body.demande,
        urlfile:''



    });
    Devis.save()
        .then(
            (Devis) => {

                res.status(201).json(Devis)
            })

        .catch(error => res.status(400).json({ error }));



 

};




