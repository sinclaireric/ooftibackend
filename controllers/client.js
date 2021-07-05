const Client = require('../models/Client');
const bcrypt = require ('bcrypt');




exports.getAll = (req, res, next) => {
    Client.find()
        .populate('demandes')
        .then(clients => res.status(200).json(clients))
        .catch(error => res.status(400).json({ error }));

};






