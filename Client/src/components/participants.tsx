import { useState } from "react"
import { useParticipante } from "../hook/useParticipants"
import { Trash } from "lucide-react"
import { ModalConfirmation } from "./confirm"
import "../style/participantes.css"

export const Participants = () => {
    const{participant,addParticipant, deleteParticipant,deleteAllParticipant} =useParticipante()

    const [name,setName] = useState<string>("")

    const handleAddParticipant = () => {
        addParticipant(name)
        setName("")
    }

    const handleDeleteParticipant = (id:number) => {
        deleteParticipant(id)
    }

    const [selectId, setSelectId] = useState<number | null>(null)
    
    const handleShowDelete = (id: number | null) => {
        setSelectId(id === selectId ? null : id)
    }

    const [showModal, setShowModal] = useState<boolean>(false)


    const modalDelete = () => {
        setShowModal(true)
    }
    const HandleModalDelete = () => {
        deleteAllParticipant()
        setShowModal(false)
    }

    return(
        <div className="container-participantes">
            <h2> Participantes </h2>

            <div className="boton-agregar">
                <input type="text"
                 placeholder="Agregar participante"
                 onChange={(event) => setName(event.target.value)} 
                 value={name}/>

                 <button className="agregar" onClick={handleAddParticipant}>Agregar</button>
                 
            </div>

              {participant.length === 0 ? ''
                    :  <button  className="delete-all" onClick={ modalDelete}> Eliminar Todos</button>
                }

            <div className="list-participantes">
                {participant.map((element) => (
                    <ul key={element._id}>
                        
                        <li onClick={() => handleShowDelete(element._id)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                            {element.name}

                            {selectId === element._id && (
                            
                                <button 
                                    onClick={() => handleDeleteParticipant(element._id)}
                                    style={{
                                        marginLeft: '10px',
                                        backgroundColor: 'transparent',
                                        border: 'none',
                                        cursor: 'pointer',
                                        
                                    }}> 
                                        <Trash  style={{ color: 'red' }}/> 
                                </button>

                            )}
                       
                        </li>


                    </ul>
                ))}
            </div>
            
            <ModalConfirmation isOpen={showModal} onClose={() => setShowModal(false)} onConfirm={HandleModalDelete}/>
        </div>
    )
}