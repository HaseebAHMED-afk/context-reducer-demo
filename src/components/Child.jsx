import React, { useContext } from 'react';
import ContextValue from './ContextValue';

function Child(){
    let value = useContext(ContextValue);
    return <div>
        <h3>Child Value is {value[0]}</h3>
        <button onClick={()=>{value[1](++value[0])}} >Update</button>
    </div>
}

export default Child;