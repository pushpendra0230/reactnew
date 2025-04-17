const express = require("express");
const router = express.Router()
const userController = require(`../controller/userController`)

router.post(`/sign`, userController.signUp)

router.post(`/login`, userController.login)

router.patch("/forgetPassword", userController.forgetPassword);

router.patch(`/resetPassword`, userController.resetPassword);

module.exports = router;
