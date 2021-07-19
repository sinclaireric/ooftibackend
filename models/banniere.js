const mongoose  = require('mongoose');

const BanniereSchema = new mongoose.Schema({


    title:{
        type:Number,
    },

    image:{
        type:String,
        required:true,
        },
   

    date_created: {
        type:Date,
        default:Date.now
    },

    emplacement: {
        type:String,
        required:true,
        enum:["Page de connexion","Page d'inscription","Espace client","Espace pro"]
    }
   
   


})


module.exports = mongoose.model('Banniere',BanniereSchema);