const loginUser = async(req,res)=>{
    res.status(200).json({
        status : "success",
        message : "login to continue"
    })
}


module.exports = {loginUser}