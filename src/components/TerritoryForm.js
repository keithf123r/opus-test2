// components/TerritoryForm.js
import React, { useState } from 'react';

const TerritoryForm = ({ onAssign }) => {
  const [zipCode, setZipCode] = useState('');
  const [repId, setRepId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAssign(zipCode, repId);
    setZipCode('');
    setRepId('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Zip Code"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
      />
      <input
        type="text"
        placeholder="Rep ID"
        value={repId}
        onChange={(e) => setRepId(e.target.value)}
      />
      <button type="submit">Assign Territory</button>
    </form>
  );
};

export default TerritoryForm;