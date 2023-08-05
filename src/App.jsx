import { useState } from 'react';
import { marked } from 'marked';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

//  a heading element (H1 size), a sub heading element (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.

function App() {
  const [text, setText] = useState(`

  # This is a heading
  ## This is a sub heading
  [this is a link](https://www.example.com) <br><br>
  \`this is some code : !not inspired && drinkCoffee()\`
  \`\`\`

{
  "firstName": "John",
  "lastName": "Doe",
  "age": 25
}

\`\`\`

- First item
- Second item
- Third item
> This one is a blockquote <br><br>
![alt text](/vite.svg) <br><br>
**Powered by Vite.js**
  `);

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
          cols="80"
          autoFocus
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
