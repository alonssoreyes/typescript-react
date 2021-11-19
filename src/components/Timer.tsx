import React, { useEffect, useRef } from 'react'
import { useState } from 'react';

type Timer = {
    milisegundos:number
}

/**
 * 
 * @param args 
 * @returns 
 */
export const Timer = (args: Timer) => {
    const ref = useRef<NodeJS.Timeout>();
    const [seconds, setSeconds] =  useState(0);

    useEffect(() => {
        ref.current && clearInterval(ref.current)

        ref.current = setInterval(() => {
            setSeconds(sec => sec + 1);
        }, args.milisegundos);
    }, [args.milisegundos])

    return (
        <>
          <h4>Timer : <small>{seconds}</small></h4>  
        </>
    )
}
