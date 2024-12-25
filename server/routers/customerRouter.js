const router = require("express").Router();

router.get("/", (req, res) => {
    return res.json({
        status: true,
        message: "Server is connected Successfully!"
    })
})

module.exports = router;