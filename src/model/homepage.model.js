const mongoose = require("mongoose");

const homeSchema=new mongoose.Schema(
    {
        name:{type:String,required:true},
        brandName:{type:String,required:false},
        price:{type:Number,required:false},
        size:{type:Array,required:false},
        images:{
            img1:{type:String,required:false},
            img2:{type:String,required:false},
            img3:{type:String,required:false},
            img4:{type:String,required:false},
        }

    },
    {version:false,timestamps:true}
)

const Homepage=mongoose.model('homepage',homeSchema);
module.exports = Homepage;