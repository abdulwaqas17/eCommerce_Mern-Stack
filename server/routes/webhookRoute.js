const express = require("express");
const handleWebhook = require("../controllers/webhook-controller/dialogflowController");
const router = express.Router();

router.post("/api/webhook", handleWebhook);

module.exports = router;
