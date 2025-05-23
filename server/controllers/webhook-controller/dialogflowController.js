// const { WebhookClient } = require("dialogflow-fulfillment");

// const handleWebhook = (req, res) => {
//   const agent = new WebhookClient({ request: req, response: res });

//   const checkOrderStatus = (agent) => {
//     const orderNumber = agent.parameters.order_number;
//     agent.add(`Your order ${orderNumber} is currently being processed.`);
//   };

//   let intentMap = new Map();
//   intentMap.set("Order Status", checkOrderStatus);

//   agent.handleRequest(intentMap);
// };


// module.exports = handleWebhook;
const { WebhookClient } = require("dialogflow-fulfillment");

const handleWebhook = (req, res) => {
    console.log("Dialogflow body:", JSON.stringify(req.body, null, 2));
  const agent = new WebhookClient({ request: req, response: res });


  // Order Status Intent
  const checkOrderStatus = (agent) => {
    const orderNumber = agent.parameters.order_number;
    
    // You would typically look up the order in your database here
    // For example:
    // const order = await Order.findOne({ _id: orderNumber, user: req.user._id });
    
    // For now, we'll just return a generic response
    agent.add(`Your order #${orderNumber} is currently being processed.`);
    
    // You could add more detailed responses based on actual status:
    // if (order.status === "Shipped") {
    //   agent.add(`Your order #${orderNumber} was shipped on ${order.shipDate}.`);
    // }
  };

  // Welcome Intent
  const welcome = (agent) => {
    agent.add("Welcome to our customer support! How can I help you today?");
    agent.add("You can ask about your order status, returns, or general questions.");
  };

  // Fallback Intent
  const fallback = (agent) => {
    agent.add("I didn't understand that. Can you rephrase?");
    agent.add("I can help with order status, returns, and general questions.");
  };

  // Setup intent map
  let intentMap = new Map();
  intentMap.set("Order Status", checkOrderStatus);
  intentMap.set("Default Welcome Intent", welcome);
  intentMap.set("Default Fallback Intent", fallback);

  agent.handleRequest(intentMap);
};

module.exports = handleWebhook;