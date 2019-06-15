import React from 'react';
import './App.css';
import Charts from "./Charts";
import Grid from "./Grid";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Grid/>
        <Charts />
      </div>    
    </div>
  );
}

export default App;
