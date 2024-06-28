const express = require("express");
const authRoute = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const {UserAuthModule} = require("../modules/UserAuthModule");

// User Registration 
authRoute.post ("/register",async (req,res)=>{
    try{
        const {Name,Email,Password,MobileNumber} = req.body;
        let user = await UserAuthModule.findOne({Email});
        if(user){
            res.send({message:"USER IS ALREADY EXISTS"})
        }
        else{
            user = new UserAuthModule({Name,Email,MobileNumber,Password})
            const salt = await bcrypt.genSalt(10)
            user.Password =  await bcrypt.hash(Password,salt);
            await user.save()
            res.send({message:"USER REGISTERED SUCCSSFULLY"})
        }

    }catch(error){
        res.send({message:"SEARVER ERROR"})
    }
})
// USER LOGIN 

authRoute.post ("/login",async(req,res)=>{
    try{
        const {MobileNumber,Password} = req.body
        let user = await UserAuthModule.findOne({MobileNumber});
        if(!user){
            res.send({message:"Invalid Credentials"})

        }
        const isMatch = await bcrypt.compare(Password,user.Password);
        if(!isMatch){
            res.send({message:"Invalid Credentials"});

        }
       
        jwt.sign({ userId: user._id },"secret",{expiresIn:"10h"},(err,token)=>{
            if(err){
                console.log(err)
            }else{
                res.json({token})
            }
        })
    }catch(error){
  res.send({message:"SERVER ERROR"})
    }
})

module.exports = {authRoute}