const userCtrl = require('./user');
const Abonnement = require('../models/Abonnement');
const Entreprise = require('../models/Entreprise');
const User = require('../models/user');
const bcrypt = require ('bcrypt'); 
const moment = require('moment'); // require




exports.getAll = (req, res, next) => {
    Abonnement.find()
        .populate('entreprise','name')
        .then(abonnements => res.status(200).json(abonnements))
        .catch(error => res.status(400).json({ error }));

};


exports.create = (req, res, next) => {
    const days = req.body.formule == 'MENSUEL' ? 30 :req.body.formule == "TRIMESTRIEL" ? 90 : 365
   console.log(days)
   console.log(req.user._id)
    const abonnment = new Abonnement({
        formule:req.body.formule,
        entreprise:req.body.entreprise,
        user:req.user._id,
        date_end:moment().add(days, 'day') 

    });
    abonnment.save()
        .then(
            (abo) => {
                Entreprise.findById(req.body.entreprise).then(ent=>{
                    ent.abonnements.push(abo)
                    ent.isPremium = true
                    ent.save().then(
                        res.status(201).json(ent)
                    )
                })

                
            }) 

        .catch(error =>  res.status(400).json({ error }));


};








