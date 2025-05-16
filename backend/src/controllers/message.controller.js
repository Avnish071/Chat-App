import cloudinary from "../lib/cloudnary.js";
import Message from "../models/message.model.js";
import User from "../models/user.js";

export const getUsersForSidebar = async(req,res)=>{
    try {
        const loggedInUSerId = req.user._Id;
        const filteredUsers = await User.find({_Id :{$ne:loggedInUSerId}}).select("-password");

        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("error in getUsersForSidebar:",error);
        res.status(501).json({error:"internal server error"})
    }
}

export const getMessages = async (req,res)=>{
  try {
    const {id:userTochatId}=req.params;
    const myId =req.user._Id;

    const message = await Message.find({
        $or:[
            {senderId:myId,recieverId:userTochatId},
            {senderId:userTochatId,recieverId:myId},

        ],
    });
    res.status(200).json(message)
  } catch (error) {
    console.log("error in Message:",error)
    res.status(501).json({error:"internal server error"});
  }
}

export const sendMessage =async (req,res)=>{
    try {
        const {text,image} =req.body;
        const {id:recieverId}=req.params;
        const senderId =req.User._Id;

        let imageUrl;

        if(image){
            const uploadReasponse = await cloudinary.uploader.upload(image);
            imageUrl =uploadReasponse.secure_url;
        }
        const newMessage = new Message({
            senderId,
            recieverId,
            text,
            image:imageUrl,
        });

        await newMessage.save();
        res.status(201).json(newMessage);

    } catch (error) {
        console.log('error in sendMessage:',error)
        res.status(500).json({error:'internal server error'})
    }

};