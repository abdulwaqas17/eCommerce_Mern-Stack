const productsModel = require('../../models/products');


const getProduct = async (req,res) => {

    try {

        let product = await productsModel.findById(req.params.id);

        if(product) {
            return res.send({
                status : 200,
                message : 'getting product successfully',
                success : true
            })
        } else {

            return res.send({
                status : 404,
                message : 'error in getting product',
                success : false
    
            })

        }


    } catch (err) {
        console.log(err);
        return res.send({
            status : 500,
            message : err.message,
            success : false

        })
        
    }
}

module.exports = getProduct