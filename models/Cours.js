import {mongoose} from "../index.js"

const coursSchema = new mongoose.Schema({
        nomDuCours: String,
        nomDuProf: String,
        etudiants: [{studentID: String}]
    }
)

const Cours = mongoose.model("Cours", coursSchema);

module.exports = Cours;
