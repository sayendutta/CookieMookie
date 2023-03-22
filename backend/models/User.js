const mongoose = require('mongoose');
const { Schema } = mongoose;
//Schema for user
const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
  });

  module.exports = mongoose.model('user', UserSchema);