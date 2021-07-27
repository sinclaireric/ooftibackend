const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require("../config/nodemailer");

const User = require('../models/user');
const Staff =  require ('../models/staff');
const Client =  require ('../models/client');
const Entreprise =  require ('../models/Entreprise');


    exports.createStaff = (req, res, next) => {
        bcrypt.hash(req.body.password, 10)
            .then(hash => {
                const user = new User({
                    password: hash,
                    email:req.body.email,
                    usertype:"STAFF",


                });
                user.save()
                    .then((user) => {

                        
                                const staff = new Staff({

                                    firstname:req.body.firstname,
                                    lastname:req.body.lastname,
                                    id_user:user._id,
                                    user:user._id,
                                    email:req.body.email,
                                    role:req.body.role,
                                    isOwner:false,
                                    phone:req.body.phone

                                })
                                staff.save()
                                .then(
                                    (staff) => {
                
                                        res.status(201).json(staff)
                                    })
                        

                        }

                    )
                    .catch(error => res.status(400).json({ error }));
            })
            .catch(error => res.status(500).json({ error }));



};




exports.createClient = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {

            const token = jwt.sign(
                { 
                    role:"CLIENT"
                },
                'MANCHESTER1FORSEMPOS&&&&11&&',
                { expiresIn: '24000000000h' }
            )
          
            const user = new User({
                password: hash,
                email:req.body.email,
                usertype:"CLIENT",
                confirmationCode: token
            });
            user.save()
                .then((user) => {


                 

                            const client = new Client({

                                firstname:req.body.firstname,
                                lastname:req.body.lastname,
                                id_user:user._id,
                                user:user._id,
                                email:req.body.email,
                                phone:req.body.phone

                            })
                            client.save((err) => {
                           


                                res.status(201).end();

                                nodemailer.sendConfirmationEmail(
                                    req.body.lastname,
                                    req.body.email,
                                    token
                                  );

                                });


                    } 

                )
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));



};






exports.createEntreprise = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const token = jwt.sign(
                { 
                    role:"ENTREPRISE"
                },
                'MANCHESTER1FORSEMPOS&&&&11&&',
                { expiresIn: '2400000h' }
            )

            const user = new User({
                password: hash,
                email:req.body.email,
                usertype:"ENTREPRISE",
                confirmationCode: token



            });
            user.save()
                .then((user) => {

                   

                            const client = new Entreprise({

                                name:req.body.name,
                                persone:req.body.lastname,
                                id_user:user._id,
                                user:user._id,
                                site:req.body.site,
                                rc:req.body.rc,
                                category:req.body.category,
                                email:req.body.email,
                                phone:req.body.phone,
                                isPremium:false,
                                adresse:req.body.adresse,
                                picture: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`


                            })
                            client.save((err) => {
                           

                               


                                res.status(201).end();

                                nodemailer.sendConfirmationEmail(
                                    req.body.name,
                                    req.body.email,
                                    token
                                  );

                                });
                                

                    

                    }

                )
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));



};






exports.login = (req, res, next) => {

    Staff.findOne({ email: req.body.email }).populate('user')
        .then(staff => {

           
            if (!staff && staff.user.usertype != 'STAFF') {

               
                return res.status(401).json({ error: 'Utilisateur non trouvé !' });
            }
            
       
            bcrypt.compare(req.body.password, staff.user.password)
                .then(valid => {
                    
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    }


                    res.status(201).json({
                        idUser: staff.user._id,
                        role:staff.user.role,
                        username:staff.firstname,
                        token: jwt.sign(
                            { userId: staff.user._id,
                                role:staff.user.role
                            },
                            'MANCHESTER1FORSEMPOS&&&&11&&',
                            { expiresIn: '24h' }
                        )
                    });

                })
                .catch(error => res.status(500).json({ error }));



        })
        .catch(error => res.status(500).json({ error }));

};





exports.loginapp = (req, res, next) => {

    User.findOne({ email: req.body.email })
        .then(user => {
            console.log(user.usertype )

            if (user.status != "Active") {
                return res.status(401).send({
                  message: "Pending Account. Please Verify Your Email!",
                });
              }else if (user.usertype  == "CLIENT") {

                
                 Client.findOne({id_user:user._id}).populate('user').then(u => {



                    bcrypt.compare(req.body.password, u.user.password)
                    .then(valid => {
                        
                        if (!valid) {
                            return res.status(401).json({ error: 'Mot de passe incorrect !' });
                        }
    
    
                        res.status(201).json({
                            idUser: u.user._id,
                            role:u.user.usertype,
                            lastname:u.lastname,
                            avatar:u.picture,
                            created:u.created_at,
                            username:u.firstname,
                            token: jwt.sign(
                                { userId: u.user._id,
                                    role:u.user.role
                                },
                                'MANCHESTER1FORSEMPOS&&&&11&&',
                                { expiresIn: '24h' }
                            )
                        });
    
                    })
                    .catch(error => res.status(500).json({ error }));


                 })
            } else {

               

                Entreprise.findOne({id_user:user._id}).populate('user').then(u => {


                    bcrypt.compare(req.body.password, u.user.password)
                    .then(valid => {
                        
                        if (!valid) {
                            return res.status(401).json({ error: 'Mot de passe incorrect !' });
                        }
    
                        res.status(201).json({
                            idUser: u.user._id,
                            role:u.user.usertype,
                            lastname:u.name,
                            created:u.created_at,
                            avatar:u.picture,
                            premium:u.isPremium,
                            fin_abo:u.date_fin_abo,
                            username:u.name,
                            token: jwt.sign(
                                { userId: u.user._id,
                                    role:u.user.role
                                },
                                'MANCHESTER1FORSEMPOS&&&&11&&',
                                { expiresIn: '24h' }
                            )
                        });
    
                    })
                    .catch(error => res.status(500).json({ error }));


                 })
            }
            
       
           



        })
        .catch(error => res.status(500).json({ error }));

};


exports.confirm = (req, res, next) => {
    console.log(req.params.id)



        User.findOneAndUpdate({confirmationCode:req.params.id}, {status:'Active'}, {
            new: true,
          })
            .then(user => {
              res.status(200).json({
                message: "Successfuly Updated",
                user
              });
            })
            .catch(() => res.json(400).json({ message: "Error updating" }));
      

};

