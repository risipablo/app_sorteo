// import { useState } from "react";
import { useEffect, useState } from "react";
import { Participants } from "./participants";
import { Watch } from "./reloj";
import { useParticipante } from "../hook/useParticipants";
import { ThreeDots } from "react-loader-spinner";
import "../style/sorteo.css"

export function Sorteo(){
    const[deadline, setDeadline] = useState<string>(() => {
        return localStorage.getItem("deadLine") || "0000-00-00T00:00:00";
    })

    const{participant} = useParticipante()

    const [winner,setWinner] = useState<string>("")
    const [lottery, setLottery] = useState<boolean>(false)
    const [showWinner, setShowWinner] = useState<boolean>(false)
    const [spinner, setSpinner] = useState<boolean>(false)
    const [title,setTitle] = useState<boolean>(false)

    const handleNewDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newDate = e.target.value
        setDeadline(newDate)
        localStorage.setItem("deadLine",newDate)
    }

    const resetSorteo = () => {
        setWinner('')
        setLottery(false)
        setShowWinner(false)
    }

    const handleWinner = () => {
        resetSorteo()
        setShowWinner(false)
        setSpinner(true)
        setTitle(false)

        setTimeout(() => {
            const winnerIndex = Math.floor(Math.random() * participant.length)
            setWinner(participant[winnerIndex].name)
            setSpinner(false)
            setLottery(true)
        },3000)
    }

    useEffect(() => {
        if (lottery){
            setTimeout(() => {
                setTitle(true)
            }, 800);
            setTimeout(() => setShowWinner(true),1200)
        }
    })




    return(
        <div className="container-sorteo">

            <div className="fecha-limite">
              
                <label htmlFor="date">Establecer fecha limite: </label>
                <input type="datetime-local" id="date" value={deadline} onChange={handleNewDate} />
            </div>
            


            <Participants/>

            <div className="reloj-container">
                <p> Se revelara al ganador en: </p>
                  <Watch fechaLimite={deadline}/>
            </div>

            <button className="sortear" onClick={handleWinner}>
                <p> Sortear </p>
            </button>

                  {spinner && 
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
                    <ThreeDots
                        visible={true}
                        height="100"
                        width="100"
                        color="purple"
                        radius="9"
                        ariaLabel="three-dots-loading"
                    />
                </div>
            }

            <div className="ganadores">
                {title && <h2> Felicidades ganador </h2>}
                {showWinner && <p className="ganador1 fade-in"> {winner}</p>}

            </div>
            
        </div>
    )
}