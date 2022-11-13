const router = require("express").Router()
const userController = require("../controllers/user.controller")


router.route("/signup").post(userController.signupAuth0)


module.exports = router