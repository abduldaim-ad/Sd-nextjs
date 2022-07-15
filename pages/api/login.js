import initDB from '../../helpers/initDB'
import User from '../../models/User'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

initDB()

export default async (req,res)=>{
    const {email,password} = req.body
    console.log(`This ${email} and this ${password} is ok`)
    try{
        if(!email||!password){
            res.status(422).json({error:"Please fill all the fields"})
            console.log("please fill all of the fields")
        }
        const user = await User.findOne({email})
        console.log(`user ${user} is login user`)
        if(!user){
            return res.status(404).json({error:"User is not registered"})
        }

        const doMatch = await bcrypt.compare(password,user.password)
        if(doMatch){
        const token = jwt.sign({userId:user._id},process.env.JWT_SECRET)
        // ,{
        //     expiresIn:"7d"
        //  }
             res.status(201).json({token})
        }else{
            res.status(401).json({error:"Invalid Credentials"})
        }

        res.status(201).json({message:"Log In Success"})
    }catch(err){
        console.log(err)
    }
}