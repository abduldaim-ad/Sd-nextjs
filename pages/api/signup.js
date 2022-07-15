import initDB from '../../helpers/initDB'
import User from '../../models/User'
import bcrypt from 'bcryptjs'

initDB()

export default async (req,res)=>{
    const {email,password,fullName} = req.body
    console.log(`This ${email} and this ${password}`)
    try{
        if(!email||!password||!fullName){
            res.status(422).json({error:"Please fill all the fields"})
            console.log("please fill all of the fields")
        }
        console.log(User)
        const user = await User.findOne({email})
        if(user){
            return res.status(422).json({error:"User already registered"})
        }
        const hashedPassword = await bcrypt.hash(password,12)
        const newUser = await new User({
            email,
            password:hashedPassword,
            fullName
        }).save()
        console.log(newUser)
        res.status(201).json({message:"SignUp Success"})
    }catch(err){
        console.log(err)
    }
}