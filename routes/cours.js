const express = require("express");
const router = express.Router();
const getProfs = require('../controllers/coursController.js');

router
.get('/', getProfs)


module.exports = router;
