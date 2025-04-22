require('dotenv').config();
const path = require('path');
const connectDB = require('../config/db');
const cloudinary = require('../config/cloudinary');
const ProductModel = require('../models/products'); // file name plural tha is liye use ka model bhi plural tha

const productsArray = [
  {
    name: "Teethstr8 Max Vitamizzin 230 Rustic Plastic Knife",
    useFor: 'Respiratory',
    type: 'trending',
    category: 'health care',
    price: 1000,
    image1: "../images/asset 18.jpeg",
    image2: "../images/asset 19.jpeg",
    stock : 50,
    inStock : true
  },
   {
      name: "Teethstr8 Max Vitamizzin 230 Rustic Plastic Knife",
      useFor : 'Respiratory',
      type:'trending',
      category:'health care',
      price: 1000,
      image1: "../images/asset 20.jpeg",
      image2: "../images/asset 21.jpeg",
      stock : 50,
      inStock : true
    },
    {
      name: "Teethstr8 Max Vitamizzin 230 Rustic Plastic Knife",
      useFor : 'Respiratory',
      type:'trending',
      category:'health care',
      price: 1000,
      image1: "../images/asset 22.jpeg",
      image2: "../images/asset 22.jpeg",
      stock : 50,
      inStock : true
    },
    {
      name: "Teethstr8 Max Vitamizzin 230 Rustic Plastic Knife",
      useFor : 'Respiratory',
      type:'trending',
      category:'health care',
      price: 1000,
      image1: "../images/asset 23.jpeg",
      image2: "../images/asset 24.jpeg",
      stock : 50,
      inStock : true
    }

];

const seedProducts = async () => {
  try {
    await connectDB();
    const products = [];

    for (let i = 0; i < productsArray.length; i++) {
      const product = productsArray[i];

      // ✅ Upload image1
      const filePath1 = path.resolve(__dirname, product.image1);
      const result1 = await cloudinary.uploader.upload(filePath1, {
        folder: 'ecommerce_productImages',
      });

      // ✅ Upload image2
      const filePath2 = path.resolve(__dirname, product.image2);
      const result2 = await cloudinary.uploader.upload(filePath2, {
        folder: 'ecommerce_products',
      });

      // ✅ Save in array
      products.push({
        name: product.name,
        useFor: product.useFor,
        type: product.type,
        category: product.category,
        price: product.price,
        image1: result1.secure_url,
        image2: result2.secure_url,
      });

      console.log(`✅ Uploaded images for product ${i + 1}`);
    }

    // ✅ Insert all in MongoDB
    const res = await ProductModel.insertMany(products);
    console.log('🎉 Products inserted successfully!',res);
    process.exit();
  } catch (err) {
    console.error('❌ Error seeding products:', err.message);
    process.exit(1);
  }
};

seedProducts();

//require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });

// cross-env node utils/seedProducts.js

// "scripts": {
//   "seed": "node utils/seedProducts.js"
// }
// Then use:
// npm run seed
