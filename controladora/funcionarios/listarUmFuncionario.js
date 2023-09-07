const { conexaoBanco } = require("../../bd/banco")

exports.listarUmFuncionario = (req, res) =>{
    const id = req.query.id
    const sql = "SELECT * FROM FUNCIONARIOS WHERE ID_FUNC = ?"

    conexaoBanco.all(sql, [id], (err, row) =>{
        if(err)
            console.log(err)
        res.send(row)
    })
}