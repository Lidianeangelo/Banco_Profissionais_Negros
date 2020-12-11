const mongoose = require("mongoose")

const dotenv = require("dotenv")
dotenv.config()

//const DB_URL="mongodb://localhost:27017/banco_profissionais"
const MONGODB_URI = process.env.MONGODB_URI //|| "mongodb+srv://deploy:camila02042009@cluster0.jmolg.mongodb.net/banco_profissionaisnegros?retryWrites=true&w=majority"

const connect = () => {
    mongoose.connect(MONGODB_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    const connection = mongoose.connection

    connection.on("error", () => console.error("Erro ao se conectar com o servidor"))
    connection.once("open", () => console.log("Servidor conectado, linda!"))
}


module.exports = { connect }

