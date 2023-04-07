const {mongoose} = require('../index.js')



function postProf(req, res){
    const {prenom, nom} = req.body;

    if(prenom == '' || nom == ''){
        return "Not valid"
    }
    


}

