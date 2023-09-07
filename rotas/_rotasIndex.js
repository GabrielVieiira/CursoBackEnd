
const rota = require("express").Router()
const rotaPadrao = "/apiMercado/"

rota.use(rotaPadrao + "Categorias", require("./rotasCategorias"))
rota.use(rotaPadrao + "Funcionarios", require("./rotasFuncionarios"))
rota.use(rotaPadrao + "Produtos", require("./rotasProdutos"))

module.exports = rota