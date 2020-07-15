import React from 'react';
import Child from './Child';
import Child2 from './Child2';

function Parent(){
    return <div>
        <h3>This is a parent</h3>
        <Child />
        <Child2 />
    </div>
}

export default Parent;
