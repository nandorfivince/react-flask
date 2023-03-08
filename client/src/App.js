import React from 'react';
import { useState, useEffect } from "react";
import './App.css';

function App() {

  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("/current-date")
        .then((response) => response.text())
        .then((data) => setCurrentDate(data));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      fetch("/current-time")
        .then((response) => response.text())
        .then((data) => setCurrentTime(data));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div className="header">
        <h1 className="title">Súlyemelő verseny</h1>
        <h3 className="date">Budapest - {currentDate} - {currentTime}</h3>
      </div>
      <div className="container">
        <div className="column">
          <h2 className="subtitle">Felkészül</h2>
          <p>Murcsik Gábor</p>
        </div>
        <div className="separator"></div>
        <div className="column">
          <h2 className="subtitle">Gyakorlatot végez</h2>
          <p>Hamzsabégi Marika</p>
        </div>
        <div className="separator"></div>
        <div className="column">
          <h2 className="subtitle">Információk</h2>
          <p>Nő</p>
          <p>70 kg</p>
          <p>165 cm</p>
          <p>54 éves</p>
        </div>
      </div>
    </div>
  );
}

export default App;
