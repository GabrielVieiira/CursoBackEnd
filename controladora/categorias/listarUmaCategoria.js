const { conexaoBanco } = require("../../bd/banco")

exports.listarUmaCategoria = (req, res) =>{
    const id = req.query.id
    const sql = "SELECT * FROM CATEGORIA_PRODUTOS WHERE ID = ?"

    conexaoBanco.all(sql,[id], (err,row) =>{
        res.send(row)
    })
}