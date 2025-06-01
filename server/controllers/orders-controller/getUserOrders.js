const Order = require('../../models/orders');

const getUserOrders = async (req, res) => {
    
  try {
    const userId = req.user._id;

    const orders = await Order.find({ userId })
      .populate('orderItems.productId') // optional: show product name/image
      .sort({ createdAt: -1 }); // latest first
    // const orders = await Order.find({ user: userId })
    //   .populate('items.productId') // optional: show product name/image
    //   .sort({ createdAt: -1 }); // latest first

    if(orders) {

        res.status(200).json({
          success: true,
          totalOrders: orders.length,
          orders,
          message : 'getting orders successfully'
        });
    } else {
        res.status(404).json({
            success: false,
            message : 'Orders not found',
            
          });
    }

  } catch (error) {
    console.error("Error getting user orders", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = getUserOrders

