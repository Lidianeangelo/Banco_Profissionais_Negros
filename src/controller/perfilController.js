const { response } = require("express")
//const perfilCollection = require("../data/data.json") //quando tem um arquivo json
const perfilCollectionLista = require("../model/perfilSchema")

//GET Lista de Perfis
const getAllPerfil = (request, response) => {
    console.log(request.url)
    perfilCollectionLista.perfilCollection.find((error, perfil) => {
        if (error) {
            return response.status(500).send(error)
        } else {
            return response.status(200).send(perfil)
        }
    })

}

//GET Filtro por ID
const getPerfilById = (request, response) => {
    const id = request.params.id

    perfilCollectionLista.perfilCollection.findById({ _id: id }, (error, perfil) => {
        if (error) {
            return response.status(500).send(error);
        } else {
            if (perfil) {
                return response.status(200).send(perfil)

            } else {
                return response.status(404).send("ID não encontrado")
            }
        }

    }
    )
}

//POST Adicionar Perfil
const addPerfil = (request, response) => {
    const perfilBody = request.body
    const perfilNovo = new perfilCollectionLista.perfilCollection(perfilBody)

    perfilNovo.save((error) => {
        if (error) {
            return response.status(500).send(error)
        } else {
            return response.status(200).send({
                mensagem: "Cadastro feito!",
                perfilNovo
            })
        }
    })
}


//DELETE Deletar Perfil
const deletePerfilById = (request, response) => {
    const idParam = request.params.id
    perfilCollectionLista.perfilCollection.findByIdAndDelete({ _id: idParam }, (error, perfil) => {
        if (error) {
            return response.status(404).send("Contato não encontrado")
        } else {
            return response.status(200).send("Contato deletado com sucesso")
        }
    })
}

//PUT Atualizar Perfil Todo
const updatePerfil = (request, response) => {
    const id = request.params.id
    const body = request.body
    const update = { new: false }
    perfilCollectionLista.perfilCollection.findOneAndUpdate(id, body, update, (error, perfil) => {
        if (error) {
            return response.status(400).send(error)
        } else {
            return response.status(200).send({ mensage: 'Cadastro atualizado com sucesso!', perfil })
        }
    })
}

//PATCH Atualiza parte do Código
const updatePartePerfil = (request, response) => {
    const id = request.params.id
    const body = request.body
    const update = { new: true }
    perfilCollectionLista.perfilCollection.findOneAndUpdate({ _id: id }, body, update, (error, perfil) => {
        if (error) {
            return response.status(404).send(error)
        } else {
            return response.status(200).send({ mensage: 'Campo atualizado com sucesso!', perfil })
        }
    })
}



module.exports = {
    getAllPerfil,
    getPerfilById,
    addPerfil,
    deletePerfilById,
    updatePerfil,
    updatePartePerfil
   

}