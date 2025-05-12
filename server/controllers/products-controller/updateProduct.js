const productModel = require('../../models/products');
const cloudinary = require('../../config/cloudinary');
const fs = require('fs');

let updateProduct = async (req, res) => {
  try {

    console.log('req.params', req.params);
    console.log('req.file', req.file);


    
    const { id } = req.params;
    const { name, price} = req.body;
 
    const product = await productModel.findById(id);
    if (!product) {
      return res.status(404).send({ status: 404, message: 'Product not found' });
    }

    // Image upload
    let imageUrl = product.image1; // default to old image
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: 'ecommerce_products',
      });
      imageUrl = result.secure_url;

      // delete local file (optional)
      fs.unlinkSync(req.file.path);
    }

    // Update the product
    const updated = await productModel.findByIdAndUpdate(
      id,
      {
        name,
        price,
        image1: imageUrl,
      },
      { new: true }
    );

    res.status(200).send({
      success: true,
      message: 'Product updated successfully',
      updatedProduct: updated,
    });

  } catch (err) {
    console.log(err);
    res.status(500).send({ status: 500, message: err.message });
  }
};

module.exports = updateProduct;
