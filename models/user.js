const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const userSchema = new mongoose.Schema({

    email:{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
   
    date_created: {
        type:Date,
        default:Date.now
    },
    status: {
        type: String, 
        enum: ['Pending', 'Active'],
        default: 'Pending'
      },
      confirmationCode: { 
        type: String, 
        unique: true },

    usertype: {
        type:String,
        required:true,
        enum:["STAFF","CLIENT","ENTREPRISE"]
    }

})

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User',userSchema)


