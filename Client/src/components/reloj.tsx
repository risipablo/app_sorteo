import { useEffect, useState } from 'react';
import type { IReloj } from '../interfaces/type';
import "../style/reloj.css"

export const Watch = ({fechaLimite}: {fechaLimite: string | Date}) =>{
    const [watch, setWatch] = useState<IReloj>({
        day:0,
        hour:0,
        min:0,
        seg:0
    })

    useEffect(() => {
        const interval = setInterval(() => {
            const today = new Date()
            const limit = new Date(fechaLimite)

            const diference = Number(limit) - Number(today)

            if (diference > 0) {
                const remaininDays = Math.floor(diference / (1000 * 60 * 60 * 24))
                const remainingHours = Math.floor((diference / (1000 * 60 * 60)) % 24)
                const remainingMinutes = Math.floor((diference / (1000 * 60)) % 60)
                const remainingSeconds = Math.floor((diference / 1000) % 60);
            
                // It is passed in the form of an a objet
                setWatch({day:remaininDays, hour:remainingHours, seg:remainingSeconds, min:remainingMinutes})
            
            } else {
                setWatch({
                    day: 0,
                    hour: 0,
                    min: 0, 
                    seg: 0
                })
                clearInterval(interval)
            }
        }, 1000)
        return () => clearInterval(interval)
    },[fechaLimite])


    return(
         <div className="reloj">
      <span className="variable">
        {watch.day}
        <span className="descripcion">Días</span>
      </span>

      <span className="separador"> : </span>

      <span className="variable">
        {watch.hour}
        <span className="descripcion">Horas</span>
      </span>

      <span className="separador"> : </span>

      <span className="variable">
        {watch.min}
        <span className="descripcion">Minutos</span>
      </span>

      <span className="separador"> : </span>

      <span className="variable">
        {watch.seg}
        <span className="descripcion">Segundos</span>
      </span>
    </div>
    )

}