const SubCategory = require('../models/subcategory');


exports.getAll = (req, res, next) => {
    SubCategory.find()
        .populate('category','name')
        .then(subcategories => res.status(200).json(subcategories))
        .catch(error => res.status(400).json({ error }));

};

exports.create = (req, res, next) => {


            const subcategory = new SubCategory({
                name:req.body.name,
                description:req.body.description,
                category:req.body.category

            });
            subcategory.save()
                .then(
                    (category) => {

                        res.status(201).json(category)
                    })

                .catch(error => res.status(400).json({ error }));


};




