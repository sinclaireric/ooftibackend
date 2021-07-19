const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken');

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
            const user = new User({
                password: hash,
                email:req.body.email,
                usertype:"CLIENT",


            });
            user.save()
                .then((user) => {

                    

                            user.save()

                            const client = new Client({

                                firstname:req.body.firstname,
                                lastname:req.body.lastname,
                                id_user:user._id,
                                user:user._id,
                                email:req.body.email,
                                phone:req.body.phone

                            })
                            client.save()
                            .then(


                                res.status(201).json({
                                    idUser: user._id,
                                    lastname:user.lastname,
                                    role:user.role,
                                    username:req.body.firstname,
                                    token: jwt.sign(
                                        { userId: user._id,
                                            role:"CLIENT"
                                        },
                                        'MANCHESTER1FORSEMPOS&&&&11&&',
                                        { expiresIn: '24h' }
                                    )
                                })

                            )

                                

                    

                    }

                )
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));



};






exports.createEntreprise = (req, res, next) => {
    console.log("toto")
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                password: hash,
                email:req.body.email,
                usertype:"ENTREPRISE",



            });
            user.save()
                .then((user) => {

                    

                            user.save()

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
                            client.save().then(


                                res.status(201).json({
                                    idUser: user._id,
                                    role:user.role,
                                    username:req.body.name,
                                    token: jwt.sign(
                                        { userId: user._id,
                                            role:"ENTREPRISE"
                                        },
                                        'MANCHESTER1FORSEMPOS&&&&11&&',
                                        { expiresIn: '24h' }
                                    )
                                })

                            )
                                

                    

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

            if(user.usertype  == "CLIENT") {

                
                 Client.findOne({id_user:user._id}).populate('user').then(u => {



                    bcrypt.compare(req.body.password, u.user.password)
                    .then(valid => {
                        
                        if (!valid) {
                            return res.status(401).json({ error: 'Mot de passe incorrect !' });
                        }
    
    
                        res.status(201).json({
                            idUser: u.user._id,
                            role:u.user.role,
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
    
    console.log(u.picture)
                        res.status(201).json({
                            idUser: u.user._id,
                            role:u.user.role,
                            lastname:u.name,
                            created:u.created_at,
                            avatar:u.picture,
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



