const { conexaoBanco } = require("../../bd/banco")

exports.listarTodosFuncionarios = (req,res) =>{
    const sql = "SELECT * FROM FUNCIONARIOS"

    conexaoBanco.all(sql, (err, row) =>{
        if(err)
            console.log(err)
        res.send(row)
    })
}