const mongoose = require('mongoose');


const EntrepriseSchema = new mongoose.Schema({

    name:{
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
    rc:{
        type:String,
        trim:true,
       
    },
    site:{
        type:String,
        trim:true,

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
    expire_abo: {
        type:Date,
    },
    note:{
type:Number,
default: 0
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

    abonnements:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Abonnement',
    }],

    evaluations:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Evaluation',
    }],

    date_fin_abo:{
        type:Date
    },

    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Category',
    }



})

module.exports = mongoose.model('Entreprise',EntrepriseSchema);