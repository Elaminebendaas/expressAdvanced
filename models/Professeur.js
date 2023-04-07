import {mongoose} from "../index.js"

const professeurSchema = new mongoose.Schema({
        prenom: String,
        nom: String,
        cours: [{idDuCours: String}] 
    }
)
const Professeur = mongoose.model("Professeur", professeurSchema);

export default Professeur;
