let productModel = require('../../models/products');
const cloudinary = require('../../config/cloudinary');

let addProduct = async (req,res) => {

    try {

        console.log(req.body);
        console.log('req.files++>',req.files);
        console.log('req.file ==>',req.file);
        
    let {name,price,stock,category,subCategory,type} = req.body;
    let {image1,image2} = req.files;

    console.log('image1,image2 ==>',image1,image2);
    console.log('image1[0] ==>',image1[0]);
    

    if (
        !name ||
        !price ||
        !stock ||
        !type ||
        !category ||
        !subCategory ||
        !image1 ||
        !image2
      ) {
        return res.send({
            status : 400,
            message : 'Kindly Fill all the details'

        })
      }

      

        const result1 = await cloudinary.uploader.upload(image1[0].path, {
            folder: 'ecommerce_products',
        });

        const result2 = await cloudinary.uploader.upload(image2[0].path, {
            folder: 'ecommerce_products',
        });

        let newProduct = new productModel({
            name,price,stock,category,subCategory,type,
            image1 : result1.secure_url,
            image2 : result2.secure_url,
        })

        await newProduct.save();

        console.log(newProduct);

        res.send({
          status : 200,
          message : 'product add successfully'

      })
        

      } catch (err) {
        console.log(err);
        return res.send({
            status : 500,
            message : err.message

        })
        
      }



}

module.exports = addProduct