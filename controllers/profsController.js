const {mongoose} = require('../index.js')
const Professeur = require('../models/Professeur.js')

async function postProf(req, res){
    const {prenom, nom} = req.body;

    if(prenom == '' || nom == ''){
        return "Not valid"
    }
    const tempProf = new Professeur({prenom: prenom, nom: nom})
    await tempProf.save();
    
    res.render('profs')
}

async function getProfsPage(req, res){
    const listOfProfs = await Professeur.find()
    console.log(listOfProfs)
    res.render('profs',{data: listOfProfs})
}

async function getProf(req, res){
    const leProf = await Professeur.find({_id: req.params.id});
    console.log(leProf);
    res.render("prof", {data: leProf})
}

module.exports = {postProf, getProfsPage, getProf}
