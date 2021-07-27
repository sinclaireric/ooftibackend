const Evaluation = require('../models/Evaluation');
const Client = require('../models/client');
const Entreprise = require('../models/Entreprise');

const nodemailer = require("../config/nodemailer");

const bcrypt = require ('bcrypt');




exports.getAll = (req, res, next) => {
    Evaluation.find()
        .then(Evaluation => res.status(200).json(Evaluation))
        .catch(error => res.status(400).json({ error }));

};




exports.create = (req, res, next) => {


    Client.findOne({id_user:req.user._id})
    .then((client)=>{

        const newEval = new Evaluation({
            entreprise:req.body.entreprise,
            description:req.body.description,
            client:client._id,
            note:req.body.note
        });
        newEval.save()
            .then(
                (eval) => {
    
    
                    Entreprise.findById(req.body.entreprise)
                    .then((ent)=>{

                        ent.evaluations.push(eval)

                        ent.note = (ent.note + req.body.note) / ent.evaluations.length

                        ent.save()
                        .then(
                            res.status(200).json(eval)
                        )

                    }).catch(error => res.status(400).json({ error })  )    


                    

                })
    
            .catch(error => res.status(400).json({ error })  );
    




    }).catch(error => console.log(error) );

 



 

};














