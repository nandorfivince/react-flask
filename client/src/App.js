import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState("");
  const [consoleText, setConsoleText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault(); // megakadályozza az alapértelmezett formanyugi viselkedést
    fetch('/console', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain', // sima szöveg típusra állítja be a tartalom típusát
        'Accept': 'text/plain' // text típusú választ vár a backendtől
      },
      body: text // csak a szöveget adja át a requestnek
    })
    .then(response => response.text()) // text típusú választ vár a backendtől
    .then(data => {
      console.log(data);
      setConsoleText(data);
    })
    .catch(error => console.log(error))
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Enter some text:
        </p>
        <input type="text" value={text} onChange={handleTextChange} onKeyPress={handleKeyPress} />
        <br />
        <button onClick={handleSubmit}>Submit</button>
        <br />
        <p>
          Console Text:
        </p>
        <textarea value={consoleText} readOnly />
      </header>
    </div>
  );
}

export default App;
