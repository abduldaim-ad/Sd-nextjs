import initDB from '../../helpers/initDB'
import User from '../../models/User'
import CheckoutModel from '../../models/CheckoutModel'

initDB()

export default async (req,res)=>{
    const {productName, price, email, requirements, nameOnCard, creditCardNo, expiration, cVV} = req.body
    // console.log(`New Price: ${price}`)
    // console.log(`This ${email} and this ${message}`)
    try{
        if(!productName||!price||!email||!requirements||!nameOnCard||!creditCardNo||!expiration||!cVV){
            res.status(422).json({error:"Please fill all the fields"})
            console.log("please fill all of the fields")
        }

        const user = await User.findOne({email})
        if(!user){
            return res.status(422).json({error:"User is not registered. Please signup first!"})
        }
        // const hashedPassword = await bcrypt.hash(password,12)
        const newCheckout = await new CheckoutModel({
            productName,
            price,
            email,
            requirements,
            nameOnCard,
            creditCardNo,
            expiration,
            cVV
        }).save()
        console.log(newCheckout)
        res.status(201).json({message:"Ordered Successfully"})
    }catch(err){
        console.log(err)
    }
}