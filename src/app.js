const express=require("express")
const app=express()
const cors=require("cors")

const db = require("../src/model/repository")
db.connect()

app.use(cors())
app.use(express.json())

const index=require("../src/route/index")
const perfil=require("../src/route/perfilRoute")


app.use("/", index)
app.use("/perfil", perfil)

module.exports=app