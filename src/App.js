import "./App.scss";
import terminal from './assets/terminal.png'
import monitorPic from './assets/monitor.png'
import $ from "jquery";
import { marked } from "marked";

marked.setOptions({
  breaks: true,
});

const placeholder = ` 
  # Welcome to my Markdown Previewer
  ## // h2 header 
  \` <h3>This is an h3 header </h3> \`
  >Abbas
  _____________________________________________________________________________
  <pre><code>Replace this text with anything you would like</code></pre>
  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  <p>
    This **application** uses <strong>Marked</strong>. To know more about it visit their link
    [here](https://marked.js.org/using_advanced)
  </p>
  
  <img src="https://marked.js.org/img/logo-black.svg" alt="marked logo" />
  
  <blockquote>
    Marked lets you convert Markdown into HTML. Markdown is a simple text
    format whose goal is to be very easy to read and write, even when not
    converted to HTML. This demo page will let you type anything you like
    and see how it gets converted.
  </blockquote>
  <code>
  <h1>Test</h1>
  </code>
  ## Random Stuff
  @!#$@$#@$!@$!@
  <h3>Things on mind right now:</h3>
    <ul>
    <li>Showering</li>
    </ul>
    
  - Cooking
    - Eating
  


  \`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
![code Logo](https://cdn.iconscout.com/icon/premium/png-256-thumb/code-283-468507.png)

  `;

function App() {
  $(document).ready(() => {
    $("#preview").html(marked.parse($("#editor").val()));

    $(".terminal").keyup(() => {
      $("#preview").html(marked.parse($("#editor").val()));
    });
  });

  return (
    <div className="App">
        <div className="images-containers"  style={{position:'relative'}}>
          <img src={terminal} alt='terminal'   />
        <textarea
          className="terminal"
          id="editor"
          defaultValue={placeholder}
          style={{position:'absolute'}}
        ></textarea>
        </div>
        <div className="images-containers"  style={{position:'relative', marginTop:'3rem'}}>
          <img src={monitorPic} alt='monitor' />
          <div className="monitor" id="preview"></div>
        </div>
    </div>
  );
}

export default App;
