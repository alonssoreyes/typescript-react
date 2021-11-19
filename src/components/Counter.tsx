import {useState} from 'react'

export const Counter = () => {
    const [state, setState] = useState(0);

    const handleIncrease = (number: number):void => {
        setState(number);
    }

    return (
        <div className="mt-5">
            <h3>Counter: {state}</h3>
            <br />
            <button className="btn btn-outline-primary mt-3" onClick={() => handleIncrease(state + 1 )}>+1</button>
            <button className="btn btn-outline-primary mt-3" onClick={() => handleIncrease(state - 1)}>-1</button>

        </div>
    )
}
