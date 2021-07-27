const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const CategorySchema = new mongoose.Schema({

    name:{
        type:String,
        trim:true,
        required:true,
    },
    description:{
        type:String,
    },

    image:{
        type:String,
    },

    subcategories:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'SubCategory',
    }],





})

CategorySchema.plugin(uniqueValidator);

module.exports = mongoose.model('Category',CategorySchema)


 