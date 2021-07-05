

const Role = require ('../models/role');

    exports.getAll = (req, res, next) => {
        Role.find()
            .select('name')
            .then(roles => res.status(200).json(roles))
            .catch(error => res.status(400).json({ error }));

};

