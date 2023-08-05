import { useState } from 'react';
import { Marked } from 'marked';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [text, setText] = useState('');
  return (
    <div className="App">
      <textarea
        id="editor"
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
      ></textarea>
      <div id="preview">{text}</div>
    </div>
  );
}

export default App;
