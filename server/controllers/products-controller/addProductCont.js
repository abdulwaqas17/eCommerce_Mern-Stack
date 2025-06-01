// productController.js
const productModel = require('../../models/products');
const cloudinary = require('../../config/cloudinary');
 

const addProduct = async (req, res) => {
 
  try {
    const { name, price, stock, category, useFor, type } = req.body;

    // Check files exist
    if (!req.files || !req.files.image1 || !req.files.image2) {
      return res.status(400).json({ status: 400, message: 'Images are required' });
    }

    // Upload images to Cloudinary
    const result1 = await cloudinary.uploader.upload(req.files.image1[0].path, {
      folder: 'ecommerce_products',
    });
    const result2 = await cloudinary.uploader.upload(req.files.image2[0].path, {
      folder: 'ecommerce_products',
    });

    // Create product
    const newProduct = new productModel({
      name,
      price,
      stock,
      category,
      useFor,
      type,
      image1: result1.secure_url,
      image2: result2.secure_url,
    });

    await newProduct.save();

    return res.status(201).json({
      status: 201,
      message: 'Product added successfully',
      product: newProduct,
    });
  } catch (err) {
    console.error('Add product error:', err);
    return res.status(500).json({ status: 500, message: 'Server error' });
  }
};

module.exports = addProduct;
