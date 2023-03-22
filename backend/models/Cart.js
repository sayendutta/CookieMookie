const mongoose=require('mongoose')
const {Schema}=mongoose

const CartSchema=new Schema({
    //user id will be foreign key in cart schema, it will also have one primary key as cart id "_id"
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        unique: true
    }
})

module.exports = mongoose.model('cart', CartSchema);