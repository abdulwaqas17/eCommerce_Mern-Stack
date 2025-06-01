// // // const { WebhookClient } = require("dialogflow-fulfillment");

// // // const handleWebhook = (req, res) => {
// // //   const agent = new WebhookClient({ request: req, response: res });

// // //   const checkOrderStatus = (agent) => {
// // //     const orderNumber = agent.parameters.order_number;
// // //     agent.add(`Your order ${orderNumber} is currently being processed.`);
// // //   };

// // //   let intentMap = new Map();
// // //   intentMap.set("Order Status", checkOrderStatus);

// // //   agent.handleRequest(intentMap);
// // // };


// // // module.exports = handleWebhook;
// // const { WebhookClient } = require("dialogflow-fulfillment");

// // const handleWebhook = (req, res) => {
// //     console.log("Dialogflow body:", JSON.stringify(req.body, null, 2));
// //   const agent = new WebhookClient({ request: req, response: res });


// //   // Order Status Intent
// //   const checkOrderStatus = (agent) => {
// //     const orderNumber = agent.parameters.order_number;
    
// //     // You would typically look up the order in your database here
// //     // For example:
// //     // const order = await Order.findOne({ _id: orderNumber, user: req.user._id });
    
// //     // For now, we'll just return a generic response
// //     agent.add(`Your order #${orderNumber} is currently being processed.`);
    
// //     // You could add more detailed responses based on actual status:
// //     // if (order.status === "Shipped") {
// //     //   agent.add(`Your order #${orderNumber} was shipped on ${order.shipDate}.`);
// //     // }
// //   };

// //   // Welcome Intent
// //   const welcome = (agent) => {
// //     agent.add("Welcome to our customer support! How can I help you today?");
// //     agent.add("You can ask about your order status, returns, or general questions.");
// //   };

// //   // Fallback Intent
// //   const fallback = (agent) => {
// //     agent.add("I didn't understand that. Can you rephrase?");
// //     agent.add("I can help with order status, returns, and general questions.");
// //   };

// //   // Setup intent map
// //   let intentMap = new Map();
// //   intentMap.set("Order Status", checkOrderStatus);
// //   intentMap.set("Default Welcome Intent", welcome);
// //   intentMap.set("Default Fallback Intent", fallback);

// //   agent.handleRequest(intentMap);
// // };

// // module.exports = handleWebhook;

// // const asyncHandler = require('express-async-handler')

// const asyncHandler = require('express-async-handler');
// const chatSchema = require('./../../models/chatModel');

// const getChats = asyncHandler(async (req, res) => {
//   try {
//     console.log('Fetching all chats...')

//     console.log('Returning test response for getChats')
//     return res.json({ message: 'getChats controller is working', chats: [] })

//   } catch (error) {
//     console.error('Error in getChats controller:', error)
//     res.status(500)
//     throw new Error('Server error while fetching chats')
//   }
// })


// const getChatById = asyncHandler(async (req, res) => {
//   try {
//     console.log(`Fetching chat with ID: ${req.params.id}`)
//     const chat = await Chat.findById(req.params.id)

//     if (chat) {
//       console.log('Chat found:', chat._id)
//       res.json(chat)
//     } else {
//       console.log('Chat not found')
//       res.status(404)
//       throw new Error('Chat not found')
//     }
//   } catch (error) {
//     console.error('Error in getChatById controller:', error)
//     if (error.kind === 'ObjectId') {
//       res.status(404)
//       throw new Error('Chat not found - Invalid ID')
//     }
//     res.status(500)
//     throw new Error('Server error while fetching chat')
//   }
// })

// const createChat = asyncHandler(async (req, res) => {
//   try {
//     console.log('Creating new chat with data:', req.body)
//     const { name, email, userId, message } = req.body

//     if (!name || !email || !message) {
//       console.log('Missing required fields for chat creation')
//       res.status(400)
//       throw new Error('Please provide name, email, and message')
//     }

//     const chat = new Chat({
//       user: {
//         name,
//         email,
//         userId: userId || null,
//       },
//       messages: [
//         {
//           sender: 'user',
//           content: message,
//           timestamp: new Date()
//         },
//       ],
//       isActive: true,
//       lastActivity: Date.now()
//     })

//     const createdChat = await chat.save()
//     console.log('Chat created successfully with ID:', createdChat._id)
//     res.status(201).json(createdChat)
//   } catch (error) {
//     console.error('Error in createChat controller:', error)
//     if (!res.statusCode || res.statusCode === 200) {
//       res.status(500)
//     }
//     throw new Error(`Failed to create chat: ${error.message}`)
//   }
// })

// const addMessage = asyncHandler(async (req, res) => {
//   try {
//     const { sender, content } = req.body
//     console.log(`Adding message to chat ${req.params.id}:`, { sender, content })

//     const chat = await Chat.findById(req.params.id)

//     if (!chat) {
//       console.log('Chat not found for adding message')
//       res.status(404)
//       throw new Error('Chat not found')
//     }

//     // Validate sender
//     if (sender !== 'user' && sender !== 'admin') {
//       console.log('Invalid sender type:', sender)
//       res.status(400)
//       throw new Error('Invalid sender type')
//     }

//     // Add message to chat
//     chat.messages.push({
//       sender,
//       content,
//       timestamp: new Date()
//     })

//     // Update last activity
//     chat.lastActivity = Date.now()

//     const updatedChat = await chat.save()
//     console.log('Message added successfully')
//     res.json(updatedChat)
//   } catch (error) {
//     console.error('Error in addMessage controller:', error)
//     if (error.kind === 'ObjectId') {
//       res.status(404)
//       throw new Error('Chat not found - Invalid ID')
//     }
//     if (!res.statusCode || res.statusCode === 200) {
//       res.status(500)
//     }
//     throw error
//   }
// })

// const updateChatStatus = asyncHandler(async (req, res) => {
//   try {
//     const { isActive } = req.body
//     console.log(`Updating chat ${req.params.id} status to isActive=${isActive}`)

//     const chat = await Chat.findById(req.params.id)

//     if (!chat) {
//       console.log('Chat not found for status update')
//       res.status(404)
//       throw new Error('Chat not found')
//     }

//     chat.isActive = isActive
//     const updatedChat = await chat.save()
//     console.log('Chat status updated successfully')
//     res.json(updatedChat)
//   } catch (error) {
//     console.error('Error in updateChatStatus controller:', error)
//     if (error.kind === 'ObjectId') {
//       res.status(404)
//       throw new Error('Chat not found - Invalid ID')
//     }
//     res.status(500)
//     throw new Error('Server error while updating chat status')
//   }
// })

// export { getChats, getChatById, createChat, addMessage, updateChatStatus }
