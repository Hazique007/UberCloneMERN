const UserModel = require('../models/UserSchema');


module.exports.createUser = async ({
    firstname,
    lastname,
    email,
    password,
    
}) => {
    if(!firstname  || !email || !password) {
        throw new Error('All fields are required');
    }
    const user =  UserModel.create({
        fullName:{
            firstname,
            lastname,
        },
       email,
        password,
        
    });
    return user;
}


