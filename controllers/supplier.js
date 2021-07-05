const Supplier = require('../models/supplier');


exports.getAll = (req, res, next) => {
    Supplier.find()
        .then(suppliers => res.status(200).json(suppliers))
        .catch(error => res.status(400).json({ error }));

};

exports.create = (req, res, next) => {


            const supplier = new Supplier({
                name:req.body.name,
                description:req.body.description,

            });
            supplier.save()
                .then(
                    (supplier) => {

                        res.status(201).json(supplier)
                    })

                .catch(error => res.status(400).json({ error }));


};




