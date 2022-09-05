
const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'product name must be provided']
    },
    price:{
        type:Number,
        required:[true,'product price must be provided']
    },
    featured:{
        type:Boolean,
        default:false
    },
    rating:{
        type:Number,
        default:4.5,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    company:{
        type:String,
        enum:{
            values:['ikea','liddly','caressa','marcos'],
            message:'{VALUE} is not matched',
        },
    },
})

module.exports = mongoose.model('Product',productSchema)

