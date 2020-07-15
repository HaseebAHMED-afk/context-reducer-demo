import React from 'react';

const numberReducer = (state,action) =>{
    switch (action.type) {
        case "INCREMENT":
            return state + action.value;
        case "DECREMENT":
            return state - action.value;
    }
}

export default numberReducer;