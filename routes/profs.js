const express = require('express');
const router = express.Router();
const {getProfsPage, postProf, getProf, updateProf} = require('../controllers/profsController');


router
.get("/", getProfsPage)
.post("/", postProf)
.get('/:id', getProf)
.post('/:id', updateProf)


module.exports = router