const mongoose = require('mongoose');


const EntrepriseSchema = new mongoose.Schema({

    firstname:{
        type:String,
        trim:true,
        required:true,
        maxLength:100
    },

    personne:{
        type:String,
        trim:true,
        maxLength:100
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true
    },

    phone:{
        type:String,
        required:true
    },
    adresse:{
        type:String,
    },
    isPremium: {
        type:Boolean
        },
    picture:{
        type:String,
    },
    id_user: {
        type:String,
        required:true,
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    devis:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Devis',
    }],



})

module.exports = mongoose.model('Entreprise',EntrepriseSchema);