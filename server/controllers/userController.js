let sendUser = async (req,res) => {

try {

    return res.send(
        {
        status : 200,
        data : req.user,
        message : 'getting user data successfully'
        }
    )

} catch (err) {
    console.log(err);

    return res.send(
        {
        status : 500,
        message : err.message
        }
    )

    
}

}

module.exports = sendUser