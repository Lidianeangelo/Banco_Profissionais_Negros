const mongoose = require("mongoose")
const Schema = mongoose.Schema

const perfilSchema = new Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        auto: true,
        required: true
    },
    Nome: {
        type: String,
        required: true
    },
    Gênero: {
        type: String,
        required: true
    },
    Autodeclaração: {
        type: String,
        required: true
    },
    Nível: {
        type: String,
        required: true
    },
    Cargo: {
        type: String,
        required: true
    },
    Área: {
        type: String,
        required: true
    },
    Empresa: {
        type: String,
        required: true
    },
    E_mail: {
        type: String,
        required: true
    },
    Telefone: {
        type: String,
        required: true
    },
    Cidade: {
        type: String,
        required: true
    },
    Estado: {
        type: String,
        required: true
    },
    Bio: {
        type: String,
        required: true
    },
    Portfólio: {
        type: String,
        required: false
    },
    Linkedin: {
        type: String,
        required: false
    },
    Competencias: {
        type: String,
        required: true
    },
    Trabalhos: {
        type: String,
        required: false
    },
    FotoPerfil: {
        type: String,
        required: false
    },
    tag: {
        type: String,
        required: true
    },
    

},
{
    collection: "perfil",
    versionKey: false

}
)

const perfilCollection = mongoose.model("perfil", perfilSchema)

module.exports = { perfilCollection }