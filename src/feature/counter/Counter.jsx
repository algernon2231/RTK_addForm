import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset, incrementByAmount } from './CounterSlice';

const Counter = () => {
    const counter = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState(0);

    const addValue = Number(incrementAmount || 0);

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }
    return (
        <div>
            <h1 className='text-3xl font-bold text-center'>Counter : {counter}</h1>
            <div className='flex justify-between'>
                <div className='flex flex-wrap space-x-4 justify-center'>
                    <button onClick={() => dispatch(increment())}>Inc</button>
                    <button onClick={() => dispatch(decrement())}>Dec</button>
                    <button onClick={() => dispatch(reset())}>Reset</button>
                </div>
                <div>
                    <input className='border border-gray-300 px-2 py-2 outline-none' type="text" value={incrementAmount} onChange={e => setIncrementAmount(e.target.value)} />
                    <button onClick={() => dispatch(incrementByAmount(addValue))} >Add Amount</button>
                    <button onClick={resetAll}>Reset All</button>
                </div>
            </div>
        </div>
    )
}

export default Counter