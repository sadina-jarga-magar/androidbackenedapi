const mongoose = require('mongoose');
const orderSchema =  new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    product:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'SkinProduct',
        required:true
    }],
    quanity:{
        type:Number,
        required:true

    },
    totalprice:{
        type:Number,
        
    }
},{timestamps:true});

module.exports = mongoose.model('Order',orderSchema);