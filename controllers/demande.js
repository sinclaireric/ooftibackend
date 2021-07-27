const userCtrl = require('./user');
const Demande = require('../models/demande'); 
const Client = require('../models/client'); 
const EntrepriseModel = require('../models/Entreprise');
const User = require('../models/user');
const bcrypt = require ('bcrypt'); 
const nodemailer = require("../config/nodemailer");




exports.getAll = (req, res, next) => {
    Demande.find()
        .sort({ 'date_created' : -1})
        .populate('owner','firstname')
        .populate('category','name')
        .populate('subcategory','name')
        .then(demandes => res.status(200).json(demandes))
        .catch(error => res.status(400).json({ error }));

};


exports.getClient = (req, res, next) => {


Client.findOne({id_user:req.user._id})
.then((client)=>{

  Demande.find({owner:client._id})
  .then(demandes => res.status(200).json(demandes))
  .catch(error => res.status(400).json({ error }));


})  .catch(error => res.status(400).json({ error }))

};



exports.getPro = (req, res, next) => {


    EntrepriseModel.findOne({id_user:req.user._id}).populate('category')
              .then(entreprise => {
                console.log(entreprise.category)
                Demande.find({category:entreprise.category._id,status:'validé'})
                .sort({ 'date_created' : -1})
                .populate('category','name').populate('subcategory','name') 
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
                
                              client.demandes.push(demande)
                              client.save()
                              .then(res.status(201).end())
                                
                            })
                
                        .catch(error => res.status(400).json({ error }));
                
                

                })
                .catch(error => res.status(400).json({ error }));


    

 

};



exports.getOne = (req, res, next) => {
    console.log(req.params.id)
    Demande.findById(req.params.id)
    .populate('owner',{'created_at':1,'firstname':1,'phone':1,'lastname':1})
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
            }).populate('category')
              .then(demande => {

                console.log("dem",demande)

                EntrepriseModel.find({category:demande.category._id,isPremium:true})
                .then((entreprises) =>{
                  console.log("ent",entreprises)
entreprises.map(u=>{

  nodemailer.sendNewDemandeNotif(
    u.name,
    u.email,
    demande._id
  );
  

})


                })


                res.status(200).json({
                  message: "Successfuly Updated",
                  demande
                });
              })
              .catch(() => res.json(400).json({ message: "Error updating" }));
        
      }



 



