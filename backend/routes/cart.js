const express=require('express')
const router=express.Router()
const fetchuser = require('../middleware/fetchuser');
const Cart=require('../models/Cart')
const { body, validationResult } = require('express-validator');

router.post('/addcartinfo',fetchuser,[],async(req,res)=>{
    try {
        let cart=await Cart.exists({user:req.user.id})
        if(cart)
        {
            return res.status(404).json({'Message':'Not allowed'})
        }
        const newcart=new Cart({
            user:req.user.id
        })
        const savedCart=await newcart.save()
        res.json(savedCart)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
    
})

router.delete('/deletecartinfo',fetchuser,[],async(req,res)=>{
    try {
        let prevCart=await Cart.exists({user:req.user.id})
        if(!prevCart)
            return res.status(404).json({'Message':'Not allowed'})
        let cart= await Cart.findOneAndDelete({user:req.user.id})
        res.json({cart:prevCart})
        
       
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


module.exports = router
