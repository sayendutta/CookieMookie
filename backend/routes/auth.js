const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const JWT_SECRET = 'S@jyeafybh5125';
let success=false;

// Create a User using: POST "/api/auth/createuser". No login required
router.post('/createuser', [
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
  body('phone', 'Enter a valid phone number').isLength({ min: 10,max: 10 }),
], async (req, res) => {
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    success=false
    return res.status(400).json({success, errors: errors.array() });
  }
  // Check whether the user with this phone exists already
  try {
    let user = await User.findOne({ phone: req.body.phone });
    if (user) {
        success=false
      return res.status(400).json({success, error: "Sorry a user with this phone number already exists" })
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    
    // Create a new user
    user = await User.create({
      name: req.body.name,
      password: secPass,
      phone: req.body.phone,
    })
    const data = {
      user:{
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);

    success=true;
    // res.json(user)
    res.json({success,authtoken})

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some Error occured");
  }
})

// Authenticate a User using: POST "/api/auth/login". No login required
router.post('/login', [ 
  body('phone', 'Enter a valid phone number').exists(), 
  body('password', 'Password cannot be blank').exists(), 
], async (req, res) => {

  // If there are errors, return Bad request and the errors
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    success=false
    return res.status(400).json({ success,errors: errors.array() });
  }

  const {phone, password} = req.body;
  try {
    let user = await User.findOne({phone});
    if(!user){
      success=false
      return res.status(400).json({success,error: "Please try to login with correct credentials"});
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if(!passwordCompare){
        success=false
        return res.status(400).json({success,error: "Please try to login with correct credentials"});
    }

    const data = {
      user:{
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    success=true;
    res.json({success,authtoken})

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }


})

// ROUTE 3: Get loggedin User Details using: POST "/api/auth/getuser". Login required


module.exports = router