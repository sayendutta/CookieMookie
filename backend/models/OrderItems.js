const mongoose=require('mongoose')
const {Schema}=mongoose

const OrderItemSchema=new Schema({
    cart_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cart'
    },
    product_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    }
});
module.exports=mongoose.model('orderitem',OrderItemSchema);