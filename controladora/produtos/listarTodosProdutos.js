const {conexaoBanco} = require("../../bd/banco")

exports.listarTodosProdutos = (req , res) =>{
    const sql = "SELECT * FROM PRODUTOS"
    conexaoBanco.all(sql, (err, row) =>{
        if(err)
            console.log(err)
        res.send(row)
    })
}