// const express = require("express");
// const router = express.Router()
// const userController = require(`../controller/userController`)

// router.post(`/sign`, userController.signUp)

// router.post(`/login`, userController.login)

// router.patch("/forgetPassword", userController.forgetPassword);

// router.patch(`/resetPassword`, userController.resetPassword);

// module.exports = router;






const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

// Sign Up route
router.post('/sign', userController.signUp);

// Login route
router.post('/login', userController.login);

// Forget Password route
router.patch('/forgetPassword', userController.forgetPassword);

// Reset Password route
router.patch('/resetPassword', userController.resetPassword);

module.exports = router;