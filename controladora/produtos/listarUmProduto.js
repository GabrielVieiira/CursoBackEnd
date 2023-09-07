const {conexaoBanco} = require("../../bd/banco")

exports.listarUmProduto = (req, res) => {
    const id = req.query.id
    const sql = "SELECT * FROM PRODUTOS WHERE ID_PRO = ?"

    conexaoBanco.all(sql,[id], (err, row) =>{
        if(err)
            console.log(err)
        res.send(row)
    })
}