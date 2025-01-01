const UserModel = require('../models/UserSchema');
const UserServices = require('../services/userServices');
const {validationResult} = require('express-validator');

module.exports.registerUser=async (req,res,next)=>{
const errors=validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
}
console.log(req.body);

const {fullname ,email,password}=req.body;

const hashedPassword=await UserModel.hashPassword(password);

const user = await UserServices.createUser(
  {
    firstname : fullname.firstname,
    lastname  : fullname.lastname,
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
    res.status(200).json({token,user});

}