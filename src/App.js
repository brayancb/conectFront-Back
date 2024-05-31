import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mi Portafolio</h1>
        {data ? (
          <div>
            <h2>{data.title}</h2>
            <p>{data.message}</p>
          </div>
        ) : (
          <p>Cargando...</p>
        )}
      </header>
    </div>
  );
}

export default App;
