import React, { useReducer } from 'react'


const initialState = {
    counter: 0
}

type ActionType = {
    type: 'increase' | 'decrease'
} | {
    type: 'custom',
    payload: number
}

const counterReducer = (state: typeof initialState, action: ActionType) => {
    switch (action.type) {
        case 'increase':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'decrease':
            return {
                ...state,
                counter: state.counter - 1
            }

        case 'custom':
            return {
                ...state,
                counter: action.payload
            }

        default:
            return state;
    }
}
export const CounterReducer = () => {

    const [state, dispatch] = useReducer(counterReducer, initialState);
    return (
        <>
            <h2>Counter: {state.counter}</h2>
            <button className="btn btn-primary" onClick={() => dispatch({ type: 'increase' })}>+1</button>
            <button className="btn btn-primary" onClick={() => dispatch({ type: 'decrease' })}>-1</button>
            <button className="btn btn-primary" onClick={() => dispatch({ type: 'custom', payload: 1000 })}>1000</button>


        </>
    )
}
