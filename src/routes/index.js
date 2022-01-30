const express = require('express');
const router = express.Router();
const homepage = require('./homepageRoute/homepage');

router.use('/home', homepage);

module.exports = router;
