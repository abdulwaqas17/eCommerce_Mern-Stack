let productsModel = require('../../models/products')

const getProducts = async (req,res) => {

    try {
  
        // to find all the carts
        const products = await productsModel.find();
  
        res.send({
            status : 200,
            message : 'getting products successfully',
            products : products
        })
  
    } catch (err) {
        console.log(err);
  
        res.send({
            status : 400,
            message : 'Error occur in getting carts',
            
        })
    }
}

module.exports = getProducts;