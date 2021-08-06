const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');







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



exports.create = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {

            const token = jwt.sign(
                { 
                    role:"STAFF"
                },
                'MANCHESTER1FORSEMPOS&&&&11&&',
                { expiresIn: '24000000000h' }
            )
          
            const user = new User({
                password: hash,
                email:req.body.email,
                firstname:req.body.firstname,
                lastname:req.body.lastname,
            });
            user.save()
                .then((user) => {

                    res.status(201).end();

                    } 

                )
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));



};








