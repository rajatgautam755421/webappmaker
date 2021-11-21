const UserModel = require('../../models/authModel/auth.model')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//Create A User
const createAUser = async (req, res) => {
  const requestUser = await new UserModel(req.body);
  const presentUser = await UserModel.findOne({ email: req.body.email });
  if(presentUser){
      res.status(400).json({
          status : "fail",
          message : "User with this email already exists"
      })
  }
  else{

      try {
        const newUser = await requestUser.save();
        res.status(201).json({
          success: true,
          user: newUser,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          error: error,
        });
      }
  }
};

//Login In A User

const userLogin = async (req, res) => {
    //check if user is already present
    const presentUser = await UserModel.findOne({ email: req.body.email });
    //Email exists or not
    if (!presentUser) return res.status(400).send("Email is not found");
    //password matches or not
    const validPassword = await bcrypt.compare(
      req.body.password,
      presentUser.password
    );
    if (!validPassword) return res.status(400).json("Password is incorrect");
  
    try {
      await new UserModel({
        email: req.body.email,
        password: req.body.password,
      });
  
      res.json({
          status : "success",
          user : {
            _id: presentUser._id,
            name: presentUser.name,
            email: presentUser.email,
            token: jwt.sign({ _id: presentUser._id }, process.env.TOKEN_SECRET,{expiresIn : '60s'}),
          }
       
      });
      res.header("auth-token", token).send(token);
    } catch (error) {
      res.status(500).json("Invalid Email Or Password");
    }
  };
  



module.exports = {createAUser,userLogin}