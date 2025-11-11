import { useEffect, useState } from "react"
import type { IParticipants } from "../interfaces/type"
import axios from "axios"
// import { config } from "../config/data"


const ServerFront = "https://app-sorteo-tnrq.onrender.com"

export const useParticipante = () => {
    const [participant, setParticipant] = useState<IParticipants[]>([])
    
    useEffect(() => {
        axios.get(`${ServerFront}/api/participantes`)
        .then(response => {
            setParticipant(response.data)
        })
        .catch(error => console.log(error))
    },[])


    const addParticipant = (name:string) => {
        if(name.trim() !== ''){
            axios.post(`${ServerFront}/api/participantes`,{
                name:name
            })
            .then( response => {
                setParticipant(prev => {
                    return [...prev, response.data]
                    
                })
                
            }) .catch(error => {
                console.log(error)
            })
        }
    }

    const deleteParticipant = (id:number) => {
        axios.delete(`${ServerFront}/api/participantes/${id}`)
        .then(() => {
            const deletePart = participant.filter((part) => part._id !== id)
            setParticipant(deletePart)
        })
        .catch(err => console.log(err))
    }

    const deleteAllParticipant = () => {
        axios.delete(`${ServerFront}/api/delete-all`)
        .then(() => {
            setParticipant([])
        })
        .catch(err => console.log(err))
    }


    return{participant, addParticipant, deleteParticipant, deleteAllParticipant}
}