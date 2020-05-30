import React from 'react';
import './App.css';
import BabyNames from './data.json';
import Names from './Names'

function App() {
 let bbyNames = BabyNames.sort(function(a, b) {
    return a.name.localeCompare(b.name);
 });
  return (
    <div className="App">
     <Names names={bbyNames} />
    </div>
  );
}

export default App;
