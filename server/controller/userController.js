const UserModel = require('../models/UserSchema');
const UserServices = require('../services/userServices');
const {validationResult} = require('express-validator');
const BlackListenSchema = require('../models/BlackListTokenSchema');

module.exports.registerUser=async (req,res,next)=>{
const errors=validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
}
console.log(req.body);

const {fullName ,email,password}=req.body;

const isUserAlreadyExist = await UserModel.findOne({email});

if(isUserAlreadyExist){
    res.status(400).json({message:"User already exist"});
}

const hashedPassword=await UserModel.hashPassword(password);

const user = await UserServices.createUser(
  {
    firstname : fullName.firstname,
    lastname  : fullName.lastname,
    email,
    password:hashedPassword
  });

  const token = await user.generateAuthToken();

  res.status(201).json({token,user});



}

module.exports.loginUser=async (req,res,next)=>{

    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    console.log(req.body);
    
    const {email,password}=req.body;
    
    const user = await UserModel.findOne({email}).select('+password');

    if(!user){
        return res.status(401).json({message:"Invalid email or password"});
    }
    const isMatch = await user.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({message:"Invalid email or password"});
    }
    const token = await user.generateAuthToken();
    res.cookie('token',token);
    res.status(200).json({token,user});

}


module.exports.getUserProfile=async (req,res,next)=>{
    res.status(200).json(req.user);


}

module.exports.logoutUser=async (req,res,next)=>{

    const token = req.cookies.token || req.headers.authorization.split(' ')[1]; 
    await BlackListenSchema.create({token});
    res.clearCookie('token');
    
    res.status(200).json({message:"Logged out successfully"});

}