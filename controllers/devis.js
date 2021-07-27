const userCtrl = require('./user');
const Devis = require('../models/Devis');
const User = require('../models/user');
const Client = require('../models/client'); 
const Entreprise = require('../models/Entreprise'); 
const Demande = require('../models/demande'); 
const nodemailer = require("../config/nodemailer");

const bcrypt = require ('bcrypt');




exports.getAll = (req, res, next) => {
    Devis.find()
        .populate('category','name')
        .then(devis => res.status(200).json(devis))
        .catch(error => res.status(400).json({ error }));

};







exports.getClient = (req, res, next) => {


    Client.findOne({id_user:req.user._id})
    .then((client)=>{
    
        Devis.find({client:client._id})
        .populate('category','name')
        .populate('entreprise',{'name':1,'note':1,'picture':1,'date_created':1})  
        .populate('demande','description')
        .then(devis => res.status(200).json(devis))
        .catch(error => res.status(400).json({ error }));

    
    })  .catch(error => res.status(400).json({ error }))
    
    };










exports.create = (req, res, next) => {


    Entreprise.findOne({id_user:req.user._id})
    .then((entreprise)=>{
        console.log(entreprise)

        const newDevis = new Devis({
            entreprise:entreprise._id,
            description:req.body.description,
            client:req.body.client,
            category:req.body.category,
            demande:req.body.demandeid,
            urlfile:`${req.protocol}://${req.get('host')}/doc/${req.file.filename}`
    
        });
        newDevis.save()
            .then(
                (devis) => {
    
                    Demande.findById(req.body.demandeid)
                    .populate('owner',{'created_at':1,'firstname':1,'phone':1,'lastname':1,'email':1})

                    .then((demande)=>{

                        demande.devis.push(devis)

                        demande.save()
                        .then((demand) =>{

                            
                            res.status(201).end();
                            nodemailer.sendNewDevisNotif(
                                demande.owner.firstname,
                                demande.owner.email,
                                entreprise.name,
                                devis._id
                              );


                        })


                    })





                   


                })
    
            .catch(error => res.status(400).json({ error })  );
    




    }).catch(error => console.log(error) );

 



 

};




