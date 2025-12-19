const path = require('path');
const express = require('express');
const siteController = require('../controllers/siteController');

const router = express.Router();

router.get('/', siteController.getHome);
router.get('/capabilities', siteController.getCapabilities)

module.exports = router;