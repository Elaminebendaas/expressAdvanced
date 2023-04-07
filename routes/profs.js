const express = require('express');
const router = express.Router();
const {getProfsPage, postProf, getProf} = require('../controllers/profsController');


router
.get("/", getProfsPage)
.post("/", postProf)
.get('/:id', getProf)


module.exports = router