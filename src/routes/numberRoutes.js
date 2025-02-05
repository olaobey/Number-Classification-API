const express = require('express');
const numberController = require('../controller/numberController');

const router = express.Router();

// GET /api/classify-number?number=371
router.get('/classify-number', numberController.classifyNumber);

module.exports = router;