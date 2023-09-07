const { conexaoBanco } = require("../../bd/banco")

exports.listarTodasCategorias = (req, res) => {
    const sql = "SELECT * FROM CATEGORIA_PRODUTOS"

    conexaoBanco.all(sql, (err, row) =>{
        if (err)
            console.log(err)
        res.send(row)
    })
}