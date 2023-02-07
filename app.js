require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const router = require('./src/routes/routes.js')
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.use('/', router)
app.listen(PORT, console.log("Servidor en linea"))