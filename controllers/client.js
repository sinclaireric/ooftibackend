const Client = require('../models/client');
const bcrypt = require ('bcrypt');




exports.getAll = (req, res, next) => {
    Client.find()
        .populate('demandes')
        .then(clients => res.status(200).json(clients))
        .catch(error => res.status(400).json({ error }));

};



exports.getOne = (req, res, next) => {
    console.log(req.params.id)
    Client.findById(req.params.id)
        .populate('demandes')
        .then(client=> res.status(200).json(client))
        .catch(error => res.status(400).json({ error }));

};





