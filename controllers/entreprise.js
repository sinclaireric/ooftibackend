const userCtrl = require('./user');
const Entreprise = require('../models/Entreprise');
const User = require('../models/user');
const bcrypt = require ('bcrypt'); 




exports.getAll = (req, res, next) => {
    Entreprise.find()
        .populate('devis')
        .then(entreprises => res.status(200).json(entreprises))
        .catch(error => res.status(400).json({ error }));

};


exports.getOne = (req, res, next) => {
    console.log(req.params.id)
    Entreprise.findById(req.params.id)
        .populate('devis')
        .populate('category','name')
        .populate('abonnements','date_end')
        .then(entreprise => res.status(200).json(entreprise))
        .catch(error => res.status(400).json({ error }));

};









