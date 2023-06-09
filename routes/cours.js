const express = require("express");
const router = express.Router();
const {getProfs, postCours, getCours, changerCours} = require('../controllers/coursController.js');

router
.get('/', getProfs)
.post('/', postCours)
.get('/:id', getCours)
.post('/:id', changerCours)
module.exports = router;
