import { useState } from "react";
import "./App.css";
import ReactMarkdown from "react-markdown";

// defaultMarkdown contains valid markdown that represents at least one of each of the following elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text
const defaultMarkdown = `\
# freecodecamp Solutions:
## Build a markdown previewer
[Learn more about the freecodecamp.org project](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-drum-machine).

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

\`This is an example of inline code\`

\`\`\`
function exampleOf() {
  return multiLineCodeBlock;
}
\`\`\`

- This
- is
- an
- example
- of
- list
- items

> This is an example of block quote

![freecodecamp](https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png)

**This is an example of Bolded Text**`;


function App() {
  const [markdownText, setMarkdownText] = useState<string>(defaultMarkdown);

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>Markdown Previewer</h1>
        <div className="boxes-container">
          <textarea
            name="editor"
            id="editor"
            value={markdownText}
            onChange={(e) => setMarkdownText(e.target.value)}
          ></textarea>
          <div id="preview">
            <ReactMarkdown>{markdownText}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;