require('dotenv').config();
const path = require('path');
const connectDB = require('../config/db');
const cloudinary = require('../config/cloudinary');
const ProductModel = require('../models/products'); // file name plural tha is liye use ka model bhi plural tha

const productsArray = [
  {
    name: "Practical Copper Table",
    useFor: 'Respiratory',
    type: 'trending',
    category: 'health care',
    price: 1200,
    image1: "../images/asset 25.jpeg",
    image2: "../images/asset 26.jpeg",
    stock : 10,
    inStock : true
  },

  // 1 x 5 = 5
  {
    name: "Practical Copper Table",
    useFor: 'Medicine',
    type: 'popular',
    category: 'supplements',
    price: 1200,
    image1: "../images/asset 27.jpeg",
    image2: "../images/asset 28.jpeg",
    stock : 10,
    inStock : true
  },
  {
    name: "Practical Copper Table",
    useFor: 'Medicine',
    type: 'popular',
    category: 'supplements',
    price: 900,
    image1: "../images/asset 29.jpeg",
    image2: "../images/asset 30.jpeg",
    stock : 10,
    inStock : true
  },
  {
    name: "Practical Copper Table",
    useFor: 'Medicine',
    type: 'popular',
    category: 'supplements',
    price: 350,
    image1: "../images/asset 31.jpeg",
    image2: "../images/asset 32.jpeg",
    stock : 10,
    inStock : true
  },  
  {
    name: "Practical Copper Table",
    useFor: 'Medicine',
    type: 'popular',
    category: 'supplements',
    price: 699,
    image1: "../images/asset 33.jpeg",
    image2: "../images/asset 34.jpeg",
    stock : 10,
    inStock : true
  },
  {
    name: "Practical Copper Table",
    useFor: 'Medicine',
    type: 'popular',
    category: 'supplements',
    price: 1700,
    image1: "../images/asset 35.jpeg",
    image2: "../images/asset 36.jpeg",
    stock : 10,
    inStock : true
  },
  // 2 x 5 = 10

  {
    name: "Rustic Linen Keyboard",
    useFor: 'Covid Protection',
    type: 'recent',
    category: 'Diagnostic',
    price: 800,
    image1: "../images/asset 39.jpeg",
    image2: "../images/asset 39.jpeg",
    stock : 20,
    inStock : true
  },
  {
    name: "Rustic Linen Keyboard",
    useFor: 'Covid Protection',
    type: 'recent',
    category: 'Diagnostic',
    price: 240,
    image1: "../images/asset 40.jpeg",
    image2: "../images/asset 41.jpeg",
    stock : 20,
    inStock : true
  },
  {
    name: "Rustic Linen Keyboard",
    useFor: 'Covid Protection',
    type: 'recent',
    category: 'Diagnostic',
    price: 199,
    image1: "../images/asset 42.jpeg",
    image2: "../images/asset 43.jpeg",
    stock : 20,
    inStock : true
  },
  {
    name: "Rustic Linen Keyboard",
    useFor: 'Covid Protection',
    type: 'recent',
    category: 'Diagnostic',
    price: 2200,
    image1: "../images/asset 44.jpeg",
    image2: "../images/asset 45.jpeg",
    stock : 20,
    inStock : true
  },
  {
    name: "Rustic Linen Keyboard",
    useFor: 'Covid Protection',
    type: 'recent',
    category: 'Diagnostic',
    price: 950,
    image1: "../images/asset 46.jpeg",
    image2: "../images/asset 47.jpeg",
    stock : 20,
    inStock : true
  },
  {
    name: "Rustic Linen Keyboard",
    useFor: 'Covid Protection',
    type: 'recent',
    category: 'Diagnostic',
    price: 1500,
    image1: "../images/asset 48.jpeg",
    image2: "../images/asset 49.jpeg",
    stock : 20,
    inStock : true
  },

  // 3 x 5 = 15 
   

];

const seedProducts = async () => {
  try {
    // connect the mongo db
    await connectDB();

    // new array, jo mongo db m set kr wyn gy
    const products = [];

    for (let i = 0; i < productsArray.length; i++) {

    
      const product = productsArray[i];  // product = productsArray[0]

      // ✅ Upload image1
      const filePath1 = path.resolve(__dirname, product.image1);

      // image ko Cloudinary par upload karta hai, aur aik object return krta h
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
    process.exit(); // kam pora jo jany k bad, process end, server band yhn ka
  } catch (err) {
    console.error('❌ Error seeding products:', err.message);
    process.exit(1); // there was as error, and also terminate the server
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
