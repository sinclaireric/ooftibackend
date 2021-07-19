const mongoose  = require('mongoose');

const DemandeSchema = new mongoose.Schema({

  

    echeance:{
        type:String
    },

    typedemande:{
        type:String
    },

    appel:{
        type:String
    },

    adresse:{
        type:String
    },

    description:{
        type:String
    },
    status:{
        type:String,
        required:true,
    },

    date_created: {
        type:Date,
        default:Date.now
    },

  

    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Client',
        required:true,
    },

    validedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Staff',
    },

    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Category',
        required:true,
    },
    subcategory:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'SubCategory',
        required:true,
    },


    devis:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Devis'
    }],

   


})


module.exports = mongoose.model('Demande',DemandeSchema);