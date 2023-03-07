import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState("");
  const [consoleText, setConsoleText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/console', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
        'Accept': 'text/plain'
      },
      body: text
    })
    .then(response => response.text())
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
