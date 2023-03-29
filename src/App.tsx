import { useState } from 'react';
import chr21 from '/chr21.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="title">Chromosome 21</h1>
      <div className="image-container">
        <img src={chr21} className="image" alt="Chromosome 21" />
      </div>
      <div className="genes">
          <div className="APP">
            <h2><i>APP</i></h2>
          </div>
          <div className="RUNX1">
            <h2><i>RUNX1</i></h2>
          </div>
          <div className="insights">
            <h2><i>Chromosome Insights</i></h2>
          </div>
      </div>
    </div>
  );
}

export default App;
