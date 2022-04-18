const express = require("express")

const User = require("./Controllers/user")


const router= express.Router()

// router for signup 
router.post("/signup", User.userSignUp)
router.post("/login",User.userLogin)


// router for admin login

router.post("/admin/login")

module.exports= router;


