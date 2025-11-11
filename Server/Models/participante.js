const mongoose = require('mongoose')

const participanteSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    }
})

const Participantes = mongoose.model('Participante', participanteSchema)
module.exports = Participantes