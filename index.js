const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT
app.use(require('./rotas/_rotasIndex'))


app.listen(port, () =>{
console.log(`Servidor rodando em: http://localhost:${port}`)
})