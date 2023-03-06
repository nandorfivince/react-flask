import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState("");
  const [consoleText, setConsoleText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  }

  const handleSubmit = () => {
    fetch('/console', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({text: text})
    })
    .then(response => response.text())
    .then(data => {
      console.log(data);
      setConsoleText(data);
    })
    .catch(error => console.log(error))
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src="./logo.svg" className="App-logo" alt="logo" />
        <p>
          Enter some text:
        </p>
        <input type="text" value={text} onChange={handleTextChange} />
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
