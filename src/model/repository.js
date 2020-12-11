const mongoose = require("mongoose")

const dotenv = require("dotenv")
dotenv.config()

//const DB_URL="mongodb://localhost:27017/banco_profissionais"
const DB_URI = process.env.DB_URI || "mongodb+srv://admin_banco:camila02042009@cluster0.jmolg.mongodb.net/banco_profissionaisnegros?retryWrites=true&w=majority"

const JWT = process.env.JWT

/*const connect = () => {
    mongoose.connect(DB_URI,
        { useNewUrlParser: true })
    const connection = mongoose.connection

    connection.on("error", () => console.error("Erro ao se conectar com o servidor"))
    connection.once("open", () => console.log("Servidor conectado, linda!"))
}*/
const connect = () => {
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:camila02042009@cluster0.jmolg.mongodb.net/banco_profissionaisnegros?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
})
}

module.exports = { connect }