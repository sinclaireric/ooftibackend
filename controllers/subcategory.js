const SubCategory = require('../models/subcategory');
const Category = require('../models/category');


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
                        Category.findById(req.body.category).then(cat=>{
                            console.log(cat)
                            cat.subcategories.push(category)
                            cat.save().then(
                                res.status(201).json(category)
                            )
                        })

                        
                    })

                .catch(error =>  res.status(400).json({ error }));


};




