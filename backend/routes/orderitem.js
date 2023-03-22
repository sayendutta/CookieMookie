const express=require('express')
const router=express.Router()
const fetchuser = require('../middleware/fetchuser')
const OrderItem=require('../models/OrderItems')
const { body, validationResult } = require('express-validator');

router.post('/addorderitem',fetchuser,[
    body('product_id','Enter a valid product id').exists(),
    body('cart_id','Enter a valid cart id').exists()
],async(req,res)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    try {
        const{product_id,cart_id}=req.body
        let orderitem=new OrderItem({
            product_id,cart_id
        })
        let order=await OrderItem.exists({cart_id:cart_id})
        if(order)
            return res.status(404).json({'Message':'Not allowed'})
        let savedorder=await orderitem.save()
        res.json({"Success":"Order has been saved successfully",order:savedorder})
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}),
router.delete('/deleteproductfromorder',fetchuser,[
    body('product_id','Enter a valid product id').exists()
],async(req,res)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    try {
        const {product_id}=req.body
        let order=await OrderItem.exists({product_id:product_id})
        if(!order)
            return res.status(404).json({'Message':'Not allowed'})
        order=await OrderItem.deleteMany({product_id:product_id})
        res.json({"Success":"Order item has been deleted successfully",order:order})
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}),
router.delete('/deleteproductfromcart',fetchuser,[
    body('cart_id','Enter a valid cart id').exists()
],async(req,res)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    try {
        const {cart_id}=req.body
        let order=await OrderItem.exists({cart_id:cart_id})
        if(!order)
            return res.status(404).json({'Message':'Not allowed'})
        order=await OrderItem.deleteMany({cart_id:cart_id})
        res.json({"Success":"Order item has been deleted successfully",order:order})
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports=router