const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const userSchema = new mongoose.Schema({

  

        dolibarrId: { 
            type: String, 
            unique: true },


            username:{
                type:String,
                trim:true,
                required:true,
                unique:true
            },

            name:{
                type:String,
                trim:true,
                required:true,
            },

            role:{
                type:String,
            },

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
   
    inventoryAcces: {
        type:Boolean
        },
        orderAcces: {
            type:Boolean
            },
            makeOrderAcces: {
                type:Boolean
                },
    date_created: {
        type:Date,
        default:Date.now
    },
    status: {
        type: String, 
        default: 'Active'
      }

})

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User',userSchema)


