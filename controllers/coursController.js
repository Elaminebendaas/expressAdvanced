const {mongoose} = require('../index.js');
const Professeur = require('../models/Professeur.js');

async function getProfs(req, res) {
    const listOfProfs = await Professeur.find()
    res.render('cours', {data: listOfProfs})
}

module.exports = getProfs;