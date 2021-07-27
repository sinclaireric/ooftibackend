const mongoose  = require('mongoose');

const DevisSchema = new mongoose.Schema({


   
    description:{
        type:String
    },

    urlfile:{
        type:String
        },
   

    date_created: {
        type:Date,
        default:Date.now
    },

  
    entreprise:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Entreprise',
        required:true,
    },
    client:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Client',
        required:true,
    },

    demande:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Demande',
        required:true,
    },

    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Category',
        required:true,
    },

   


})


module.exports = mongoose.model('Devis',DevisSchema);