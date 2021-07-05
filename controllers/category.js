const Category = require('../models/category');


exports.getAll = (req, res, next) => {
    Category.find()
    .populate("subcategories")
        .then(categories => res.status(200).json(categories))
        .catch(error => res.status(400).json({ error }));

};

exports.create = (req, res, next) => {


            const category = new Category({
                name:req.body.name,
                image:req.body.image,
                description:req.body.description,

            });
            category.save()
                .then(
                    (category) => {

                        res.status(201).json(category)
                    })

                .catch(error => res.status(400).json({ error }));


};




