const mongoose = require('mongoose');


const AbonnementSchema = new mongoose.Schema({

    formule:{
        type:String,
        required:true,
        maxLength:100
    },

    prix:{
        type:Number,
    },

    date_created: {
        type:Date,
        default:Date.now
    },

    date_end: {
        type:Date,
        required:true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    entreprise: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Entrepise',
        required:true,
    }



})

module.exports = mongoose.model('Abonnement',AbonnementSchema);