const rota = require("express").Router()
const controller = require("../controladora/funcionarios/_funcionariosControladoraIndex")

rota.get("/listarTodosFuncionarios", controller.listarTodosFuncionarios)

rota.get("/listarUmFuncionario", controller.listarUmFuncionario)

module.exports = rota