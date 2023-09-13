import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js"

// REGISTER USER
export const registerUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation
    } = req.body;

    const salt = await bcrypt.genSalt();
    const passHash = await bcrypt.hash(password, salt);


    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passHash,
      picturePath,
      friends,
      location,
      occupation,
    })
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({error: err.message})
  }
}

// LOG IN
export const login = async (req, res) => {
  try {
    const {email, password } = req.body;
    let user = await User.findOne({email: email});
    if(!user) res.status(401).json({msg: "Usuario y/o contraseña invalidos."});

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) res.status(401).json({msg: "Usuario y/o contraseña invalidos."});

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({token, user})
  } catch (err) {
    res.status(500).json({error: err.message})
  }
};