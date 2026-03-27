const  mongoose = require("mongoose");

const productSchema=new mongoose.Schema({
    name:{type:String , required:true},
    cost:{type:String , required:true},
    description:{type:String , required:true},
    categories:{type:String , required:true},
    rating:{type:String , required:true},
    ImageSrc:{type:String , required:true},   
},{timestamps:true})

module.exports=mongoose.model("products",productSchema)