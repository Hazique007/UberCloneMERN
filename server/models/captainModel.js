const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const CaptainSchema = mongoose.Schema({
    fullName: {
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
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email']

    },
    password: {
        type: String,
        required: true,
        select: false,
        minlength: [6, 'Password should be at least 6 characters long'],
    },

    socketId: {
        type: String,

    },

    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },

    vehicle:{

        colour:{
            type:String,
            required:true,
            minlength:[3,'Colour should be at least 3 characters long']
        },

        plate:{
            type:String,
            required:true,
            minlength:[3,'Plate should be at least 3 characters long']
        },

        capacity:{
            type:Number,
            required:true,
            min:[1,'Capacity should be at least 1']
        },

        vehicleType:{
            type:String,
            required:true,
            enum:['car','motorcycle','auto']
        }




    },

    location:{
        lat:{
            type:Number,
            
        },
        long:{
            type:Number,
            
        }
    }






});



CaptainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}


CaptainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}


CaptainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const CaptainModel = mongoose.model('Captain', CaptainSchema);
module.exports = CaptainModel;   