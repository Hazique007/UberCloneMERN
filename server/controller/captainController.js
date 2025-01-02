const CaptainModel = require('../models/captainModel');
const CaptainServices = require('../services/captainServices');
const { validationResult } = require('express-validator');

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