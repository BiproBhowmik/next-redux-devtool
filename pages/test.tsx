import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incNum } from '../Services/Actions';

export default function test() {

const dispatch = useDispatch();

const stateValue = useSelector((state: any) => {
    return state.changeNumber
});

console.log(stateValue, "cardSectiion");


  return (
      <>
        <h1>Increment-Decriment with Redux</h1>
        <h2>Value = {stateValue}</h2>
        <button onClick={()=> increment(1)}>+</button>
        <button>-</button>
      </>
  );
}

const increment = (arg0: number)=> {
    dispatch(incNum(arg0))
}

