import mongoose from "mongoose";

const userSchema =new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        //validate email 
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    phone:{
        type: String,
        required:true,
        unique: true,
    // validate phone number (10 digits for example)
    match: [/^\d{10}$/, "Please enter a valid 10-digit phone number"]
    }
},{timestamps:true})

const User=mongoose.model("Users", userSchema,"contactCollection")
export default User