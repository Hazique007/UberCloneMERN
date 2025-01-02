const CaptainModel = require('../models/captainModel');
const CaptainServices = require('../services/captainServices');
const { validationResult } = require('express-validator');
const BlackListenSchema = require('../models/BlackListTokenSchema');
module.exports.registerCaptain = async (req, res, next) => {
    if (!validationResult(req).isEmpty()) {
        return res.status(400).json({ errors: validationResult(req).array() });
    }

    const { fullname, email, password, vehicle } = req.body;

    const isCaptainAlreadyExist = await CaptainModel.findOne({ email });
    if (isCaptainAlreadyExist) {
        return res.status(400).json({ message: "Captain already exist" });
    }

    const hashedPassword = await CaptainModel.hashPassword(password);

    const captain = await CaptainServices.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,

        colour: vehicle.colour,
        vehicleType: vehicle.vehicleType,
        plate: vehicle.plate,
        capacity: vehicle.capacity

    });

    const token = await captain.generateAuthToken();
    res.status(201).json({ token, captain });



}


module.exports.loginCaptain = async (req, res, next) => {

    if (!validationResult(req).isEmpty()) {
        return res.status(400).json({ errors: validationResult(req).array() });
    }

    const { email, password } = req.body;

    const captain = await CaptainModel.findOne({ email }).select('+password');

    if (!captain) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await captain.comparePassword(password);
    if (!isMatch) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = await captain.generateAuthToken();
    res.cookie('token', token);
    res.status(200).json({ token, captain });
}

module.exports.getCaptainProfile = async (req, res, next) => {
    res.status(200).json({captain:req.captain});
}

module.exports.logoutCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization.split(' ')[1]; 
    await BlackListenSchema.create({token});
    
    res.clearCookie('token');
   
    res.status(200).json({message:"Logged out successfully"});
}