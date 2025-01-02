const CaptainModel = require('../models/captainModel');



module.exports.createCaptain = async ({
    firstname,lastname,email,password,colour, vehicleType,
    plate,capacity
})=>{

    if(!firstname  || !email || !password || !colour || !vehicleType || !plate || !capacity){
        throw new Error('All fields are required');
    }
    const captain= await CaptainModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password,
        vehicle:{
            colour,
            vehicleType,
            plate,
            capacity
        }
    })
    return captain;
    
}