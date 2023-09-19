import React from 'react'
import { useSelector, useDispatch  } from 'react-redux'
import { INCREMENT_CREATOR } from '../actions/action';

const Counter = () => {
   const counter = useSelector((state: any) => state.count);
   const dispatch = useDispatch();
  return (
    <div>
        <button onClick={() => dispatch(INCREMENT_CREATOR(5))}>INCREMENT</button>
        <button onClick={() => dispatch({ type:'DECREMENT'})}>DECREMENT</button>
        <br />
        <span>Counter {counter} </span>
    </div>
  )
}

export default Counter
