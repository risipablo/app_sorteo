const express = require('express')
const cors = require('cors')
const db = require('./Config/data')
const ParticipanteRoute = require("./Routes/participanteRoute")

require("dotenv").config()

const app = express()
app.use(express.json())

const corsOption = {
    origin: ['http://localhost:5173','https://app-sorteo-bgv7.vercel.app','https://app-sorteo-tnrq.onrender.com'],
    optionsSuccessStatus: 200,
    methods: 'GET,POST,DELETE,PUT,PATCH',
    credentials: true,
}

app.use(cors(corsOption))


db()

app.use('/api',ParticipanteRoute)


app.listen(3001, () => {
    console.log('Servidor corriendo en el local' )
})