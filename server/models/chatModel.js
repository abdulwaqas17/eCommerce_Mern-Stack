// const mongoose = require('mongoose')

// const messageSchema = mongoose.Schema(
//   {
//     sender: {
//       type: String,
//       required: true,
//       enum: ['user', 'admin'],
//     },
//     content: {
//       type: String,
//       required: true,
//     },
//     timestamp: {
//       type: Date,
//       default: Date.now,
//     },
//     userName: {
//       type: String,
//       required: false,
//     },
//     userEmail: {
//       type: String,
//       required: false,
//     },
//     isAutoResponse: {
//       type: Boolean,
//       default: false,
//     },
//     responseType: {
//       type: String,
//       enum: ['delivery', 'refund', 'quality', 'promotion', 'payment', 'agent', 'general'],
//       required: false,
//     },
//   },
//   {
//     timestamps: true,
//   }
// )

// const chatSchema = mongoose.Schema(
//   {
//     user: {
//       name: {
//         type: String,
//         required: true,
//       },
//       email: {
//         type: String,
//         required: true,
//       },
//       userId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'users',
//         required: false, 
//       },
//     },
//     messages: [messageSchema],
//     isActive: {
//       type: Boolean,
//       default: true,
//     },
//     lastActivity: {
//       type: Date,
//       default: Date.now,
//     },
//   },
//   {
//     timestamps: true,
//   }
// )

// const Chat = mongoose.model('Chat', chatSchema)

// export default Chat