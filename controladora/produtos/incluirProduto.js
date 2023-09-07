const {conexaoBanco} = require("../../bd/banco")

exports.incluirProduto = (req,res) =>{
    const {nome_pro, valor_pro, estoque_pro, fornecedor_pro, categoria_pro} = req.body
    const sql = "INSERT INTO PRODUTOS (?,?,?,?,?)"

    conexaoBanco.run()
}