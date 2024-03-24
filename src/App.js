// App.js
import React, { useState } from 'react';
import Map from './components/Map';
import TerritoryForm from './components/TerritoryForm';
import './App.css';

const App = () => {
  const [territories, setTerritories] = useState({});

  const handleTerritoryAssignment = (zipCode, repId) => {
    setTerritories({ ...territories, [zipCode]: repId });
  };

  return (
    <div className="app">
      <h1>Sales Territory Planner</h1>
      <div className="main-content">
        <Map territories={territories} />
        <TerritoryForm onAssign={handleTerritoryAssignment} />
      </div>
    </div>
  );
};

export default App;