// let mongoose = require('mongoose');

// const orderSchema = new mongoose.Schema(
//   {
//     userId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "users",
//       required: true,
//     },
//     userEmail : {
//       type: String,
//       required: true,
//     },
//     orderItems: [
//       {
//         productId: {
//           type: mongoose.Schema.Types.ObjectId,
//           ref: "products",
//           required: true,
//         },
//         qty: {
//           type: Number,
//           required: true,
//           min: 1,
//         },
//       },
//     ],
//     totalAmount: {
//       type: Number,
//       required: true,
//     },
//     status: {
//       type: String,
//       enum: ["Pending", "Processing", "Shipped","Approved", "Delivered", "Canceled"],
//       default: "Pending",
//     },
//     paymentMethod: {
//       type: String,
//       enum: ["COD", "Card"],
//       required: true,
//     },
//     shippingAddress: {
//       fullName: { type: String, required: true },
//       phone: { type: String, required: true },
//       address: { type: String, required: true },
//       country: { type: String, required: true },
//     //   zip: { type: String, required: false },
//     },
//     invoiceNumber: {
//       type: String,
//       unique: true,
//       required: true,

//       // uuid 
//       default: () => `INV-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
//     },
//     orderDate: { type: Date, default: Date.now }
//   },
//   {
//     timestamps: true, // createdAt & updatedAt will be added automatically
//   }
// );

// // let orders = mongoose.model("orders", orderSchema); 
// // module.exports = orders

// let orders = mongoose.model('orders', orderSchema);
// module.exports = orders;
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },

     userEmail: {
      type: String,
      required: true,
    },

    // 🛒 Cart items
    orderItems: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "products",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
        price: {
          type: Number,
          required: true,
          min: 0,
        }
      }
    ],

   
    // 🧾 Order Financials
    subtotal: {
      type: Number,
      required: true,
      min: 0,
    },
    tax: {
      type: Number,
      required: true,
      min: 0,
    },
    deliveryFee: {
      type: Number,
      required: true,
      min: 0,
    },
    total: {
      type: Number,
      required: true,
      min: 0,
    },

    // 🚚 Shipping Details
    shippingAddress: {
      firstName: { type: String, required: true }, // frontend firstName
      lastName: { type: String, required: true }, // frontend lastName
      contact: { type: String, required: true },     // frontend contact
      address: { type: String, required: true },
      city: { type: String, required: true },
      country: { type: String, required: true },
      
    },

    // 📦 Order Status
    status: {
      type: String,
      enum: ["Pending", "Processing", "Shipped", "Approved", "Delivered", "Canceled"],
      default: "Pending",
    },

    // 🧾 Invoice & Date
    invoiceNumber: {
      type: String,
      unique: true,
      required: true,
      default: () => `INV-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    },
    orderDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const orders = mongoose.model('orders', orderSchema);
module.exports = orders;
