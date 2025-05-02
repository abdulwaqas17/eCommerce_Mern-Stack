// let mongoose = require('mongoose');

// let orderSchema = mongoose.Schema({

//     // orderQunatity : Number,
//     // orderAmount : Number,
//     // orderItems : [{type : mongoose.Schema.Types.ObjectId, ref : 'products'}],
//     // BuyerData :  {type : mongoose.Schema.Types.ObjectId, ref : 'users' },

// })

// let orders = mongoose.model('orders', orderSchema);
// module.exports = orders;
let mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    userEmail : {
      type: String,
      required: true,
    },
    orderItems: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "products",
          required: true,
        },
        qty: {
          type: Number,
          required: true,
          min: 1,
        },
      },
    ],
    totalAmount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
    paymentMethod: {
      type: String,
      enum: ["COD", "Card"],
      required: true,
    },
    shippingAddress: {
      fullName: { type: String, required: true },
      phone: { type: String, required: true },
      address: { type: String, required: true },
      country: { type: String, required: true },
    //   zip: { type: String, required: false },
    },
    invoiceNumber: {
      type: String,
      unique: true,
      required: true,

      // uuid 
      default: () => `INV-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    },
    orderDate: { type: Date, default: Date.now }
  },
  {
    timestamps: true, // createdAt & updatedAt will be added automatically
  }
);

// let orders = mongoose.model("orders", orderSchema); 
// module.exports = orders

let orders = mongoose.model('orders', orderSchema);
module.exports = orders;
