const express =     require('express');
const {body} = require('express-validator');
const router = express.Router();
const captainController = require('../controller/captainController');


router.post('/register',[
    body('email').isEmail().withMessage("Invalid Email"),
    body("fullname.firstname").isLength({min:3}).withMessage("First name should be at least 3 characters long"),
    body('password').isLength({min:6}).withMessage("Password should be at least 6 characters long"),
    body('vehicle.colour').isLength({min:3}).withMessage("Colour should be at least 3 characters long"),
    body('vehicle.plate').isLength({min:3}).withMessage("Plate should be at least 3 characters long"),
    body('vehicle.capacity').isInt({min:1}).withMessage("Capacity should be at least 1"),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage("Invalid vehicle type")
],captainController.registerCaptain);





module.exports = router;