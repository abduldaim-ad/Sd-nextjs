import mongoose from 'mongoose'

const checkoutSchema = new mongoose.Schema({
    productName:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
        // unique:true
    },
    email:{
        type:String,
        required:true
    },
    requirements:{
        type:String,
        required:true
    },
    nameOnCard:{
        type:String,
        required:true
    },
    creditCardNo:{
        type:String,
        required:true
    },
    expiration:{
        type:String,
        required:true
    },
    cVV:{
        type:String,
        required:true
    },

})

export default mongoose.models.CheckoutModel || mongoose.model('CheckoutModel', checkoutSchema)