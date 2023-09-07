const rota = require("express").Router()
const controller = require("../controladora/produtos/_produtosControladoraIndex")

rota.get("/listarTodosProdutos", controller.listarTodosProdutos)

rota.get("/listarUmProduto", controller.listarUmProduto)

module.exports = rota