const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const Staff =  require ('../models/staff');
const Client =  require ('../models/Client');
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
                                

                    

                    }

                )
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));



};






exports.createEntreprise = (req, res, next) => {
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

                                name:req.body.firstname,
                                persone:req.body.lastname,
                                id_user:user._id,
                                user:user._id,
                                email:req.body.email,
                                phone:req.body.phone,
                                adresse:req.body.adresse

                            })
                            client.save()
                                

                    

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
            
            console.log('ici',req.body.password)
            console.log('ici2',staff.password)
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





