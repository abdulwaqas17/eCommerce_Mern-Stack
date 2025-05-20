// controllers/orderController.js

const OrderModel = require('../../models/orders');

// POST: Place a new order
const setOrder = async (req, res) => {
  try {
    const {
      userEmail,
      userId,
      orderItems,
      totalAmount,
      paymentMethod,
      shippingAddress
    } = req.body;

    // ✅ Basic validation (can be replaced with Joi/Yup later)
    if (!userEmail || !userId || !orderItems || !totalAmount || !paymentMethod || !shippingAddress) {
      return res.status(400).json({
        success: false,
        message: 'Missing required order fields.',
      });
    }

    const newOrder = new OrderModel({
      userId,
      userEmail,
      orderItems,
      totalAmount,
      paymentMethod,
      shippingAddress
    });

    const savedOrder = await newOrder.save();

    return res.status(201).json({
      success: true,
      message: 'Order placed successfully.',
      orderId: savedOrder._id,
      invoiceNumber: savedOrder.invoiceNumber,
    });

  } catch (error) {
    console.error('Order Placement Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message
    });
  }
};

module.exports = setOrder;
