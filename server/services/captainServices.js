const CaptainModel = require('../models/captainModel');



module.exports.createCaptain = async ({
    firstName,lastName,email,password,colour, vehicleType,
    plate,capacity
})=>{

    if(!firstName  || !email || !password || !colour || !vehicleType || !plate || !capacity){
        throw new Error('All fields are required');
    }
    const captain= await CaptainModel.create({
        fullName:{
            firstName,
            lastName
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