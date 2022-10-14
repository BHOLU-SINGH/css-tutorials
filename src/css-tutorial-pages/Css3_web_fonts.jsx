import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Adl from "../Adl";
import Adr from "../Adr";


const Css3_web_fonts = () => {
const syntax_1 = `  @font-face{
   font-family: myFont;
   src: url('css/fonts/sans-serif.ttf');
  }
  /* you can now use your custom font */
  h5{
   font-family: myFont;
  }
`
const syntax_2 = `  <!DOCTYPE html>
  <html>
  <head>
   <title> Using Google Fonts </title>
   <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
   <style type="text/css">
      h1{
       font-family: 'Montserrat', sans-serif;
     }
   </style>
  </head>
  <body>
   <h1>CSS Tutorials</h1>
   <p>I love these CSS Tutorials. These tutorials are very helpful for us.</p>
   <p>This demo requires internet connection.</p>
  </body>
  </html>
`
  return(
    <>
    <Menu />
    <div className="container-fluid mt-2">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9 mt-2 p-3 bg-light">
          <h3>CSS3 Web Fonts</h3>
          <p>CSS3 Web Fonts allow web designers/developers to use custom fonts that are not installed on the user agent (or device).</p>
          <h5>Different Font Mime Types</h5>
          <table cellpadding="8px">
            <tr><th>Format</th><th>Mime Type</th><th>Description</th></tr>
            <tr>
              <td>TrueType</td><th>font/ttf</th>
              <td>TrueType is an outline font standard developed by Apple and Microsoft in the late 1980s. It has become the most common format for fonts on the classic Mac OS, macOS, and Microsoft Windows operating systems.</td>
            </tr>
            <tr>
              <td>OpenType</td><th>font/otf</th>
              <td>OpenType is a format for scalable computer fonts developed by Microsoft. It was built on its predecessor TrueType, retaining TrueType's basic structure and adding many intricate data structures for prescribing typographic behavior.</td>
            </tr>
            <tr>
              <td>Web Open File Format</td><th>font/woff</th>
              <td>The Web Open Font Format is a font format for use in web pages. WOFF files are OpenType or TrueType fonts, with format-specific compression applied and additional XML metadata added.</td>
            </tr>
            <tr>
              <td>Web Open File Format 2</td><th>font/woff2</th>
              <td>The second version of Web Open File Format with an improved compression scheme and is recommended by W3C (World Wide Web Consortium).</td>
            </tr>
          </table><br/>
          <h3>The @font-face CSS Rule</h3>
          <p>You can define your own fonts using the <b>@font-face</b> at-rule.</p>
          <p>And with the use of the following properties:</p>
          <ul>
            <li><b>font-family</b>: specifies a name that will be used as the font face value</li>
            <li><b>src</b>: specifies the file path of the font file using the url CSS function, it could be a URL to a remote or local font file location</li>
          </ul>
          <pre className='mb-1'>
            <code>{syntax_1}</code>
          </pre>
          <h5 style={{fontFamily: "sans-serif"}}>I love these CSS Tutorials.</h5>

          <h3>Using Google Fonts</h3>
          <p>Here is an example of using <a href="#">Google Fonts</a>. Click <a href="#">here</a> to find more.</p>
          <pre className='mb-1'>
            <code>{syntax_2}</code>
          </pre>
          <h4 style={{fontFamily: "'Montserrat', sans-serif"}}>CSS Tutorials</h4>
          <p>I love these CSS Tutorials. These tutorials are very helpful for us.</p>
          <p>This demo requires internet connection.</p>


		      <div className="container mt-1 mb-4 d-flex justify-content-between">
            <Link className="btn btn-primary" to="/css-tutorials/css3-text"><Adl /> Previous</Link>
            <Link className="btn btn-primary" to="/css-tutorials/css3-2d-transforms">Next <Adr /></Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Css3_web_fonts;