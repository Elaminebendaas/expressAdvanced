const express = require("express");
const router = express.Router();
const {getProfs, postCours, getCours} = require('../controllers/coursController.js');

router
.get('/', getProfs)
.post('/', postCours)
.get('/:id', getCours)

module.exports = router;
