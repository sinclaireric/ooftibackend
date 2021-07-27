const Banniere = require('../models/Banniere');





exports.getAll = (req, res, next) => {
    Banniere.find()
        .then(banniere => res.status(200).json(banniere))
        .catch(error => res.status(400).json({ error }));

};



exports.create = (req, res, next) => {


    const banniere = new Banniere({
        emplacement:req.body.emplacement,
        title:req.body.title,
        image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`

    });
    banniere.save()
        .then(
            (banniere) => {
                res.status(201).json(banniere)
            })

        .catch(error => res.status(400).json({ error }));


};




exports.getOne = (req, res, next) => {
    console.log(req.params.id)
    Banniere.find({emplacement:req.params.id})
        .then(demande => res.status(200).json(demande))
        .catch(error => res.status(400).json({ error }));

};
