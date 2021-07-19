const mongoose  = require('mongoose');

const DevisSchema = new mongoose.Schema({


    total:{
        type:Number,
        required:true
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