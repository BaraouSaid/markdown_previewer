import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [text, setText] = useText('');
  return (
    <div id="app">
      <div>Hello World!!!</div>
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
