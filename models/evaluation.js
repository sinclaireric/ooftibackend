const mongoose  = require('mongoose');

const EvaluationSchema = new mongoose.Schema({


   
    description:{
        type:String
    },


    date_created: {
        type:Date,
        default:Date.now
    },

    note: {
        type:Number,
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
   


})


module.exports = mongoose.model('Evaluation',EvaluationSchema);