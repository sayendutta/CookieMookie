const mongoose=require('mongoose');
const {Schema}=mongoose;
const ProductSchema=new Schema({
    pimage:{
        type:String,
        required:true
    },
    serving_weight:{
        type:String,
        required:true
    },
    shelf_life:{
        type:String,
        required: true
    },
    calory:{
        type:String,
        required:true
    },
    sweetener:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
});
var Product = mongoose.model('product', ProductSchema);
module.exports=Product
