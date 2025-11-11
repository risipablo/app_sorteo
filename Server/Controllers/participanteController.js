
const participanteModel = require("../Models/participante")

exports.getParticipante = async(req,res) => {
    try{
        const participante = await participanteModel.find()
        res.json(participante)
    } catch (err){
        res.status(500).json({error:err.message})
    }
}

exports.addParticipante = async(req,res) => {
    const {name} = req.body;

    if(!name){
        return res.status(400).json({error: 'Faltan datos'})
    }
    
    try{
        const newName = new participanteModel({name})
        const result = await newName.save()
        res.json(result)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: err.message})
    }
}


exports.deleteParticipante = async (req,res) => {
    const {id} = req.params

    try{
        const deletedPar = await participanteModel.findByIdAndDelete(id)
        res.json(deletedPar)
    } catch(err){
        res.status(500).json({error: err.message})
    }
}

exports.deleteAllParticipants = async (req,res) => {
    try{
        const result = await participanteModel.deleteMany({})
        res.json({message: `${result.deletedCount} participantes eliminados`, result})
    } catch (err) {
        res.status(500).json({error: 'Server error: ' + err.message})
    }
}