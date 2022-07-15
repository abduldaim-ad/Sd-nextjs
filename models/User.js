 import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        // unique:true
    },
    fullName:{
        type:String,
        required:true
    },
    // email,
    // password,
    // fullName
})

export default mongoose.models.User || mongoose.model('User', userSchema)