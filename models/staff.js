const mongoose = require('mongoose');


const StaffSchema = new mongoose.Schema({

    firstname:{
        type:String,
        trim:true,
        required:true,
        maxLength:100
    },

    lastname:{
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
    isOwner: {
        type:Boolean
        },
    phone:{
        type:String,
        required:true
    },
    adresse:{
        type:String,
    },
    picture:{
        type:String,
    },
    id_user: {
        type:String,
        required:true,
    },
  
    role: {
        type:String,
        required:true,

    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    }



})

module.exports = mongoose.model('Staff',StaffSchema);