let isVerify = (req,res) => {

    res.status(200).json({
        success : true,
        message : 'Token is valid'
    })

}

module.exports = isVerify;