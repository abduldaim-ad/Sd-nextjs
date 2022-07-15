import initDB from '../../helpers/initDB'
import CheckoutModel from '../../models/CheckoutModel'

initDB()

export default async (req,res) => {
    const pendingOrders = await CheckoutModel.find();
    res.status(200).json(pendingOrders)
}