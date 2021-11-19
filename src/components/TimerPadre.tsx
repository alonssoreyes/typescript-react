import React from 'react'
import { Timer } from './Timer'
import { useState } from 'react';

export const TimerPadre = () => {
    const [milisegundos, setMilisegundos] = useState(1000);
    
    

    return (
        <div>
            <span>Milisegundos {1000}</span>
            <button onClick={() => setMilisegundos(1000)}>1000</button>
            <button onClick={() => setMilisegundos(2000)}>2000</button>

            <Timer milisegundos={milisegundos}/>
        </div>
    )
}
