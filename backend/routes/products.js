const express = require('express')
const Product = require('../models/Products')
const router = express.Router();
const { body, validationResult } = require('express-validator');

router.post('/addproducts', [
    body('pimage', 'Enter a valid image url').isURL(),
    body('serving_weight', 'Serving weight should not be empty').exists(),
    body('shelf_life', 'Shelf Life should not be empty').exists(),
    body('calory', 'Calory value should not be empty').exists(),
    body('sweetener', 'Please enter sweetener details').exists(),
    body('price', 'price should be a number').isNumeric(),
],
    async (req, res) => {
        let success=false;
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ success,errors: errors.array() });
        }
        try {
            var product;
            product = await Product.create({
                pimage: req.body.pimage,
                serving_weight: req.body.serving_weight,
                shelf_life: req.body.shelf_life,
                calory: req.body.calory,
                sweetener: req.body.sweetener,
                price: req.body.price
            })
            success=true
            return res.json({success:success,info:'Product details successfully added!!!!'})
        }
        catch (error) {
            console.error(error);
            return res.status(500).send('Internal Server Error');
        }
    }),
    router.post('/fetchoneproduct',[
        body('pid','Enter a non-empty product id').exists(),
    ],async(req,res)=>{
        
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            console.log(errors)
            return res.status(400).json({errors: errors.array()});
        }
        try {
            var details;
            details=await Product.findById({
                _id: req.body.pid
            })
            
            return res.json(details)
        } catch (error) {
            console.error(error);
            return res.status(500).send('Internal Server Error');
        }
    }),
    router.post('/fetchallproducts',[

    ],async(req,res)=>{
        try {
            var details;
            details=await Product.find();
            return res.json(details)
        } catch (error) {
            console.error(error);
            return res.status(500).send('Internal Server Error');
        }
    })

module.exports = router


                