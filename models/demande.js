const mongoose  = require('mongoose');

const DemandeSchema = new mongoose.Schema({

  

    echeance:{
        type:String
    },

    typedemande:{
        type:String
    },

    addresse:{
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

    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Category',
        required:true,
    },


    devis:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Devis',
        required:true,
    },

   


})


module.exports = mongoose.model('Demande',DemandeSchema);