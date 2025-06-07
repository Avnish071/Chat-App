import cloudinary from "../lib/cloudnary.js";
import { generateToken } from "../lib/utils.js";
import User from "../models/user.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  let { fullName, email, password,age,gender,phone } = req.body;

  try {
    // Validation
    if (!fullName || !email || !password || !age || !gender || !phone) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    email = email.toLowerCase(); 

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
      age,
      gender,
      phone,
    });

    if(newUser){
      generateToken(newUser._id,res)
      await newUser.save();

    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      email: newUser.email,
      profilePic: newUser.profilePic,
    });
    }else(res.status(401).json({message:"invalid user data"}))
  } catch (error) {
    console.error("Error in signup controller:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Find user
    const existUser = await User.findOne({ email });
    if (!existUser) {
      return res.status(404).json({ message: "Email is not registered" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, existUser.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Password is incorrect" });
    }

    // Generate JWT token and set cookie
    generateToken(existUser._id, res);

    // Respond with user data
    res.status(200).json({
      _id: existUser._id,
      fullName: existUser.fullName,
      email: existUser.email,
      profilePic: existUser.profilePic,
    });

  } catch (error) {
    console.error("Error in login controller:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const logout = (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "Logout successful" });
};
export const updateProfile=async (req ,res)=>{
 
  try {
     const { profilePic } = req.body;
     const userId = req.user._id
     if(!profilePic){
      return res.status(400).json({message:"profilepic is rquired"})
     }
     

     const uploadResponse =await cloudinary.uploader.upload(profilePic)
     const updateUser = await findByIdAndUpdate(
      userId,
       { profilePic:uploadResponse.secure_url},
        {new:true}
     );
     res.status(200).json(updateUser)
    
  } catch (error) {
    console.log("error in update profile;",error)
    return res.status(500).json({message:"internal server error"})
  }
};

export const checkAuth =(req,res)=>{
  try {
    res.status(200).json(req.user)
  } catch (error) {
    console.log("error in authentication:",error);
    res.status(500).json({message:"internal server error"});
  }
};