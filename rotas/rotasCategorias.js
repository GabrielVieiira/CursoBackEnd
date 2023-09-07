const rota = require("express").Router()

const controller = require("../controladora/categorias/_categoriasControladoraIndex")

rota.get("/ListarTodasCategorias", controller.listarTodasCategorias)

rota.get("/ListarUmaCategoria", controller.listarUmaCategoria)

module.exports = rota