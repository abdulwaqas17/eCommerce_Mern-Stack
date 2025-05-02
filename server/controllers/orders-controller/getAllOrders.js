const orderModel = require('../../models/orders');


const getOrders = async (req,res) => {

    try {
  
        // to find all the carts
        const orders = await orderModel.find();
  
        res.send({
            status : 200,
            message : 'getting orders successfully',
            orders : orders,
            success : true
        })
  
    } catch (err) {
        console.log(err);
  
        res.send({
            status : 400,
            message : 'Error occur in getting orders',
            success : false
            
        })
    }
}



module.exports = getOrders