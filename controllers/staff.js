const userCtrl = require('./user');
const Staff = require('../models/staff');
const User = require('../models/user');
const bcrypt = require ('bcrypt');




exports.getAll = (req, res, next) => {
    Staff.find()
        .then(staffs => res.status(200).json(staffs))
        .catch(error => res.status(400).json({ error }));

};






