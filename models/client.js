const mongoose = require('mongoose');
const ClientSchema = new mongoose.Schema({

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
    created_at: {
        type:Date,
        default:Date.now
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

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    demandes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Demande',
    }],



})

module.exports = mongoose.model('Client',ClientSchema);

 