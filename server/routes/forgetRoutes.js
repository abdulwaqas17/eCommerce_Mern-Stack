// 📁 BACKEND: routes/authRoutes.js
const express = require("express");
const forgotPassword = require("../controllers/forget-controllers/VerifyEmailSendOtp");
const verifyOTP = require("../controllers/forget-controllers/VerifyOtp");
const resetPassword = require("../controllers/forget-controllers/resetPassword");



const router = express.Router();

router.post("/forgot-password", forgotPassword);
router.post("/verify-otp", verifyOTP);
router.post("/reset-password", resetPassword);

module.exports = router;