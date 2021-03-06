require('dotenv').config()

const express = require('express')
const cors = require('cors')

const routes = require('./routes/routes')

const app = express()

//habilita CORS
app.use(cors())

//habilita recepção de dados via json
app.use(express.json())

//definição das rotas
app.use('/api', routes)

//executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))

module.exports = app