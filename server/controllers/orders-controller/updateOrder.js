const Order = require('../../models/orders');

let updateOrder = async (req, res) => {
  try {
    const { status } = req.body;

    const validStatuses = ["Pending", "Approved", "Canceled"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status value.",
      });
    }

    const orderId = req.params.id;
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found.",
      });
    }

    order.status = status;
    await order.save();

    let allOrders = await Order.find();

    res.status(200).json({
      success: true,
      message: "Order status updated successfully.",
      updatedStatus: order.status,
      allOrders : allOrders
    });
  } catch (err) {
    console.error("Error updating order status:", err.message);
    res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

module.exports = updateOrder;
