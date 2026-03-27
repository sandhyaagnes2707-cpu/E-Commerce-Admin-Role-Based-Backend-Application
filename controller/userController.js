const User = require("../model/UserModel");
const bcrypt=require('bcrypt')
//add user register controller
const addUser = async (req, res) => {
  // try{
    const { name,email,phone, gender,address, profilePic, password} = req.body;
    const encryptedPassword = await bcrypt.hash(password,10);
    await User.insertOne({
        name:name,
        email:email,
        phone:phone,
        gender:gender,
        address:address,
        profilePic:profilePic,
        password:password,
        password:encryptedPassword
    
    })

  res.status(200).json({ message: "User register successfully" });
  // }
  // catch (error){
  res.status(500).json({ message: "server not found failed to register" });
  // }
 };
//get all users.controller

const getUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    if (!allUsers) {
      res.status(404).json({ message: "Users not found" });
    }
    res.status(200).json({ allUsers });
  } catch {
    res.status(500).json({ message: "server not found" });
  }
};


//LOGIN CONTROLLER

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const foundUser = await User.findOne({ email: username });
    if (!foundUser){
      res.status(404).json({ message: "User not found please check username"});
    }
    const checkedPassword = await bcrypt.compare(password,foundUser.password);
    if (!checkedPassword) {
      res.status(400).json({ message: "Wrong password.."});
    }
    res.status(200).json({ message: "Login Successful.."});
  } catch (error)
  {
    res.status(500).json({ message:"server not found"});
  }
};
module.exports = { addUser,getUsers,login };