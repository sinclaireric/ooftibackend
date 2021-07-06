const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const SubCategorySchema = new mongoose.Schema({

    name:{
        type:String,
        trim:true,
        required:true,
    },
    description:{
        type:String,
    },

 
    category: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Category',
    },

  


})

SubCategorySchema.plugin(uniqueValidator);

module.exports = mongoose.model('SubCategory',SubCategorySchema)


