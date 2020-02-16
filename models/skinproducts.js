const mongoose = require('mongoose');
const skinproductSchema = new mongoose.Schema({
    productname:
    {
        type: String,
        required: true
    },
    productdesc:
    {
        type: String,
       required: true
    },
    rate:
    {
        type: Number,
        required: true
    },
    productimg:{
        type:String,
    required:true
    },
    pcategory:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Category',
        required:true
    }
},{timestamps:true});
module.exports = mongoose.model('SkinProduct', skinproductSchema);