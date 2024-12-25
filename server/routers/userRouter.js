const router = require("express").Router();
const userModel = require("../model/userModel");

router.post("/signin",async (req, res) => {
    const {username, password, year} = req.body;
    try{
        const user = await userModel.findOne({username, password});
        if(user){
            return res.status(200).json({
                status: true,
                user: user.username
            })
        }else throw new Error("Please enter valid user credentials")
    }catch(err){
        return res.json({
            status: false,
            error: err.message
        })
    }
})

module.exports = router;