let mongoose = require('mongoose');

let productSchema = mongoose.Schema({

    name :  String,
    useFor : { type: String, enum: ['Respiratory', 'Medicine', 'Covid Protection'], default: 'Medicine' },
    type :   { type: String, enum: ['popular', 'trending', 'recent'], default: 'recent' },
    category :  { type: String, enum: ['Diagnostic', 'supplements', 'health care','beauty'], default: 'health care' },
    price : Number,
    image1 : String,
    image2 : String,
    stock : Number,
    inStock : Boolean,
    

})

let products = mongoose.model('products', productSchema);
module.exports = products;