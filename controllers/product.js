const Product = require('../models/product');


exports.getAll = (req, res, next) => {
    Product.find()
        .then(products => res.status(200).json(products))
        .catch(error => res.status(400).json({ error }));

};

exports.create = (req, res, next) => {


            const product = new Product({
                designation:req.body.designation,
                isActive:true,
                forStock: req.body.forStock,
                color:req.body.color,
                barcode: req.body.barcode,
                unite:req.body.unite,
                salePrice:req.body.saleprice,
                suplyPrice:req.body.suplyprice,
                stockAlert:req.body.stockAlert,
                inStock:req.body.inStock,
                description:req.body.description,
                branches:req.body.branches


            });
            product.save()
                .then(
                    (product) => {

                        res.status(201).json(product)
                    })

                .catch(error => res.status(400).json({ error }));


};




