const {mongoose} = require('../index.js')
const Professeur = require('../models/Professeur.js')

async function postProf(req, res){
    const {prenom, nom} = req.body;

    if(prenom == '' || nom == ''){
        const listOfProfs = await Professeur.find()
        res.render('profs', {data: listOfProfs})
        return "Not valid"
    }

    const tempProf = new Professeur({prenom: prenom, nom: nom})
    await tempProf.save();
    const listOfProfs = await Professeur.find()
    res.render('profs', {data: listOfProfs})
}

async function getProfsPage(req, res){
    const listOfProfs = await Professeur.find()
    res.render('profs', {data: listOfProfs})
}

async function getProf(req, res){
    const leProf = await Professeur.find({_id: req.params.id});
    res.render("prof", {data: leProf})
}

async function updateProf(req, res){
    const tempProf = new Professeur({prenom: prenom, nom: nom})
    Professeur.updateOne({_id: req.params.id},)


}

module.exports = {postProf, getProfsPage, getProf}
