const userCtrl = require('./user');
const Demande = require('../models/demande'); 
const EntrepriseModel = require('../models/Entreprise');
const User = require('../models/user');
const bcrypt = require ('bcrypt'); 




exports.getAll = (req, res, next) => {
    Demande.find()
        .populate('owner','firstname')
        .populate('category','name')
        .populate('subcategory','name')
        .then(demandes => res.status(200).json(demandes))
        .catch(error => res.status(400).json({ error }));

};


exports.getClient = (req, res, next) => {
    Demande.find({owner:req.user._id})
        .then(demandes => res.status(200).json(demandes))
        .catch(error => res.status(400).json({ error }));

};



exports.getPro = (req, res, next) => {


    EntrepriseModel.findOne({id_user:req.user._id}).populate('category')
              .then(entreprise => {
                console.log(entreprise.category)
                Demande.find({category:entreprise.category._id}).populate('category','name').populate('subcategory','name') 
                .then(demandes => res.status(200).json(demandes))
                .catch(error => res.status(400).json({ error }));
              })

   
        .catch(error => res.status(400).json({ error }));

};





exports.create = (req, res, next) => {


    Client.findOne({user:req.user._id})
                .then(client => {

                    const demande = new Demande({
                        name:req.body.name,
                        description:req.body.description,
                
                
                        echeance:req.body.echeance,
                    
                        typedemande:req.body.typedemande,
                    
                        adresse:req.body.adresse,
                        appel:req.body.appel,
                    
                        status:"Attente de validation",
                    
                        owner:client._id,
                    
                        category:req.body.secteur,
                        subcategory:req.body.soussecteur,
                
                
                
                    });
                    demande.save()
                        .then(
                            (demande) => {
                
                                res.status(201).json(demande)
                            })
                
                        .catch(error => res.status(400).json({ error }));
                
                

                })
                .catch(error => res.status(400).json({ error }));


    

 

};



exports.getOne = (req, res, next) => {
    console.log(req.params.id)
    Demande.findById(req.params.id)
    .populate('owner','firstname')
    .populate('category','name')
    .populate('subcategory','name')
        .then(demande => res.status(200).json(demande))
        .catch(error => res.status(400).json({ error }));

};





  
    exports.valid = (req, res) => {
      
       console.log('fff',req.body.demande)
            // update with the new data
            Demande.findByIdAndUpdate(req.body.demande, {status:'validé'}, {
              new: true,
            })
              .then(demande => {
                res.status(200).json({
                  message: "Successfuly Updated",
                  demande
                });
              })
              .catch(() => res.json(400).json({ message: "Error updating" }));
        
      }

 



