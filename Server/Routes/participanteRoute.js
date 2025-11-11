const express = require('express')
const { getParticipante, addParticipante, deleteParticipante, deleteAllParticipants } = require('../Controllers/participanteController')
const router = express.Router()

router.get('/participantes', getParticipante)
router.post('/participantes', addParticipante)
router.delete('/participantes/:id', deleteParticipante)
router.delete('/delete-all', deleteAllParticipants)

module.exports = router