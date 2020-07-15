import React, { useReducer } from 'react';
import numberReducer from './numberReducer';



function Child2(){
    let [number, dipatch] = useReducer(numberReducer,100);
    return <div>
        <h3>Child 2 number {number} </h3>
        <button onClick={()=>{dipatch({type:"INCREMENT", value:100})}}>INCREMENT</button>
        <button onClick={()=>{dipatch({type:"DECREMENT",value:150})}}>DECREMENT</button>
    </div>
}

export default Child2;