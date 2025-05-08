let productsModel = require('../../models/products')

let delProduct = async (req, res) => {
    try {
      const productId = req.params.id;
      await productsModel.findByIdAndDelete(productId);
      res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch (err) {
      res.status(500).json({ success: false, message: "Failed to delete product" }); 
    }
}

module.exports = delProduct