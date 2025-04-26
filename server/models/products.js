let mongoose = require('mongoose');

let productSchema = mongoose.Schema({

    name :  String,
    subCategory : { type: String, enum: ['Respiratory', 'Medicine', 'Covid Protection'], default: 'Medicine' },
    type :   { type: String, enum: ['Popular', 'Trending', 'Recent'], default: 'Recent' },
    category :  { type: String, enum: ['Diagnostic', 'Supplement', 'Health Care','Beauty'], default: 'Health Care' },
    price : Number,
    image1 : String,
    image2 : String,
    stock : Number,
    inStock : {type : Boolean , dafault : true},
    

})

let products = mongoose.model('products', productSchema);
module.exports = products;