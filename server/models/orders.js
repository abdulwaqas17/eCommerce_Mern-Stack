let mongoose = require('mongoose');

let orderSchema = mongoose.Schema({

    orderQunatity : Number,
    orderAmount : Number,
    orderItems : [{type : mongoose.Schema.Types.ObjectId, ref : 'products'}],
    BuyerData :  {type : mongoose.Schema.Types.ObjectId, ref : 'users' },

})

let orders = mongoose.model('orders', orderSchema);
module.exports = orders;