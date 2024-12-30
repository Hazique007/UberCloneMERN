const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const UserSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'First name should be at least 3 characters long'],
        },
        lastname: {
            type: String,

            minlength: [3, 'Last name should be at least 3 characters long'],
        },

    },

    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [6, 'Email should be at least 6 characters long'],


    },

    password: {
        type: String,
        required: true,
        select:false,
        

    },

    socketID: {
        type: String,
        
    },








})
UserSchema.methods.generateAuthToken =
 function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
    return token;
 }

 UserSchema.comparePassword = async function
  (password) {
    return await bcrypt.compare(password, this.password);
  }

  UserSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash (password, 10);
  }

  const UserModel = mongoose.model('user', UserSchema);
  module.exports = UserModel;