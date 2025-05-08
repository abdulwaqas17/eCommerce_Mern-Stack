let orderModel = require('../../models/orders');
console.log(orderModel);



let setOrder = async (req,res) => {

    try {

        let {userEmail,userId,orderItems,totalAmount,paymentMethod,shippingAddress} = req.body;

        let newOrder = new orderModel({
            userId,
            userEmail,
            orderItems,
            totalAmount,
            paymentMethod,
            shippingAddress
        })

        await newOrder.save();

        console.log(newOrder);

       if (newOrder) {
        res.send({
            status : 200,
            message : 'order place successfully',
            success : true,
            orderId: newOrder._id,
            invoiceNumber: newOrder.invoiceNumber,
          })
       } else {
        res.send({
            status : 403,
            message : 'There was an error while order',
            success : false
          })
       }
        

    } catch (err) {
        console.log(err);
        res.send({
            status : 500,
            message : err.message,
            success : false
          })
        
    }


}

module.exports = setOrder;