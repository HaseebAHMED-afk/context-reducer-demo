import React, { useState } from 'react';
import Parent from './Parent';
import ContextValue from './ContextValue';

function App() {
  let value = useState(45);
  return <ContextValue.Provider value={value}> 
    <div>
      <h3>Hello World</h3>
      <Parent />
    </div>
  </ContextValue.Provider>
}

export default App;
