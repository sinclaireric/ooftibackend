const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const ProductSchema = new mongoose.Schema({


    title:{
        type:String,
        trim:true,
        required:true,
    },
    description:{
        type:String,
    },

    barcode:{
        type:String,
        trim:true,
        index: true,
        default:null
    },

/*     category: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Category',
    }, */


    images:[{
        type: String,
    }],


    active: {
        type:Boolean,
        required:true
    },
    option:{
        type:String,
    },
    dolibarrId:{
        type:String,
    },

    ooftiId:{
        type:String,
    },

    isOffti: {
        type:Boolean,
        required:true
    }

})

ProductSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Product',ProductSchema)


