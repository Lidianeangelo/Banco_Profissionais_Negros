const express = require('express');
const router = express.Router();
const cors = require("cors")
const controller=require("../controller/perfilController")

router.get("/", cors(),controller.getAllPerfil)
router.get("/id/:id", cors(),controller.getPerfilById)
router.post("/perfilNovo", cors(),controller.addPerfil)
router.delete("/delete/:id", cors(),controller.deletePerfilById)
router.put("/atualiza/:id", cors(),controller.updatePerfil)
router.patch("/atualiza/perfil/:id",cors(),controller.updatePartePerfil)




module.exports=router;


