const app=require("./src/app")
const mongoose=require("mongoose")

const dotenv=require("dotenv")
dotenv.config()

const PORT=process.env.PORT || 8081

app.listen(PORT, function(){
    console.log(`Servidor rodando na porta ${PORT}`)
})