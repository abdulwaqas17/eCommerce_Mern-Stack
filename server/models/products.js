let mongoose = require('mongoose');

let productSchema = mongoose.Schema({

    productName :  String,
    productPrice : Number,
    productStock :  Number,
    productImage :  String,
    productDiscription : String

})

let products = mongoose.model('products', productSchema);
module.exports = products;