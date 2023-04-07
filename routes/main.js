const express = require("express");
const router = express.Router();
const getHome = require('../controllers/mainController')

router.get("/", getHome);

module.exports = router;

