let productsModel = require('../../models/products');

const getProducts = async (req, res) => {
  try {
    const products = await productsModel.find(); 

    res.status(200).json({
      success: true,
      message: 'Products fetched successfully',
      data: products,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: 'Error occurred while fetching products',
      error: err.message,
    });
  }
};

module.exports = getProducts;
