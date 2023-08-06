import { useState } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import './App.css';

function App() {
  const [text, setText] = useState(
    DOMPurify.sanitize(`

  # This is a heading
  ## This is a sub heading
  [this is a link](https://www.example.com)   <i class="em em-point_left" aria-role="presentation" aria-label="WHITE LEFT POINTING BACKHAND INDEX"></i>
 
  Here's some code :

  \`!not inspired && drinkCoffee( )\` 
  
  
  A code block : 
  \`\`\`
  {
  "firstName": "John",
  "lastName": "Doe",
  "age": 25
}
\`\`\`
- First item of the list
- Second item
- Third item

> This one is a blockquote  

![alt text](/vite.svg)

**Powered by Vite.js**
  `)
  );

  marked.setOptions({
    breaks: true,
  });

  return (
    <div className="App">
      <div className="main-container">
        <h1>Markdown Previewer</h1>
        <textarea
          id="editor"
          className="text-area"
          placeholder="type some text here!"
          rows="20"
          cols="60"
          // autoFocus
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        ></textarea>
        <div
          id="preview"
          className="preview"
          dangerouslySetInnerHTML={{
            __html: marked(text),
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
