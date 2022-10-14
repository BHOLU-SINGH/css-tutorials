import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Adl from "../Adl";
import Adr from "../Adr";

const Css_fonts = () => {
const syntax_1 = `<generic-name>`
const syntax_2 = `<family-name>`
const syntax_3 = `
  p{
    font-family: Arial, Verdana, sans-serif;
  }
`
const syntax_4 = `<length>`
const syntax_5 = `<percentage>`
const syntax_6 = `
  p{
    font-size: medium;
  }
`
const syntax_7 = `
  p{
    font-size: 32px;
  }
`
const syntax_8 = `
  #p1{
    font-size: 1em;
  }
  #p2{
    font-size: 2em;
  }
`
const syntax_9 = `
  #p1{
    font-style: normal;
  }
  #p2{
    font-style: italic;
  }
  #p3{
    font-style: oblique;
  }
`
const syntax_10 = `<number>`
const syntax_11 = `
  #p1{
    font-weight: normal;
  }
  #p2{
    font-weight: bold;
  }
  #p3{
    font-weight: lighter;
  }
  #p4{
    font-weight: bolder;
  }
  #p5{
    font-weight: 1000;
  }
`
const syntax_12 = `
  #p1{
    font-variant: normal;
  }
  #p2{
    font-variant: small-caps;
 }
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
         <h3>CSS Fonts</h3>
    		<p>CSS Fonts define the font family, size, style, weight or boldness and variant of a text.</p>
         <h3>CSS Font Family</h3>
         <p>There are two types of font family names in CSS:</p>
         <ul>
            <li><b>{syntax_1}</b>: a group of font families which have similar looks e.g. Sans-serif, Monospace</li>
            <li><b>{syntax_2}</b>: a specific font family name e.g. Lucida Console, Verdana </li>
         </ul>
         <p>Here is a table of the most common generic font names with some of their specific font family names.</p>
         <table>
            <tr>
               <th style={{width: "15%"}}>{syntax_1}</th>
               <th>{syntax_2}</th>
            </tr>
            <tr>
               <th>serif</th>
               <td>"Times New Roman", Georgia, Lucida Bright, Lucida Fax, Palatino, "Palatino Linotype", Palladio, "URW Palladio"</td>
            </tr>
            <tr>
               <th>sans-serif</th>
               <td>Arial, Verdana, "Open Sans", "Fira Sans", "Lucida Sans", "Lucida Sans Unicode", "Trebuchet MS", "Liberation Sans", "Nimbus Sans L"</td>
            </tr>
            <tr>
               <th>monospace</th>
               <td>"Courier New", "Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console"</td>
            </tr>
            <tr>
               <th>cursive</th>
               <td>"Brush Script MT", "Brush Script Std", "Lucida Calligraphy", "Lucida Handwriting", "Apple Chancery"</td>
            </tr>
            <tr>
               <th>fantasy</th>
               <td>Papyrus, Herculanum, Party LET, Curlz MT, Harrington</td>
            </tr>
         </table>
         <p><b>Note!</b> It is recommended to enquote font family names with multiple words e.g. "Lucida Console" (double quotes), 'Liberation Mono' (single quotes)</p>
         <p>The <b>font-family</b> CSS property specifies a list of prioritized font families.</p>
         <p>Each font family name or generic names should be separated by a comma "<b>,</b>"</p>
         <p>Having multiple font family names specified lets the browser select an acceptable fallback font when necessary.</p>
         <p>The browser will then pick a font to use from the specified list starting from first to last specified.</p>
         <p>If the browser does not support the first font, it will try the second font and so on.</p>
         <pre>
            <code>{syntax_3}</code>
         </pre>
         <h3>CSS Font Size</h3>
         <p>The <b>font-size</b> CSS property sets the size of a font.</p>
         <h5>Valid Values:</h5>
         <ul>
            <li><b>xx-small, x-small, small, medium, large, x-large, xx-large</b>: absolute-size keywords</li>
            <li><b>smaller , larger</b>: relative-size keywords the font would either be smaller or larger than its parent element</li>
            <li><b>{syntax_4}</b>: <b>px</b> and <b>em</b> are the most common and recommended</li>
            <li><b>{syntax_5}</b>: relative to the font size of the parent element</li>
         </ul>
         <h5>Example:</h5>
         {/* <p>Click the 'Play It Yourself' button below to play with all the keyword values.</p> */}
         <pre>
            <code>{syntax_6}</code>
         </pre>
         <h3>Setting Font Size in Pixels</h3>
         <p>A <b>px</b> value is a good choice and recommended esp. if we need pixels accuracy.</p>
         <p>A <b>px</b> value is static.</p>
         <pre>
            <code>{syntax_7}</code>
         </pre>
         <h3>Setting Font Size in Ems</h3>
         <p>Setting font size with the <b>em</b> value is highly recommended. It allows the user to resize text in the browser's settings.</p>
         <p>An <b>em</b> value is dynamic. It uses the browser's default font size which is 16px so lem = 16px.</p>
         <p>To convert <b>px</b> to <b>em</b> , use this formula: em = pixels/16</p>
         <pre>
            <code>{syntax_8}</code>
         </pre>
         <h3>CSS Font style</h3>
         <p>The <b>font-style</b> CSS property sets how a font should be styled.</p>
         <h5>Valid Values:</h5>
         <ul>
            <li><b>normal</b>: sets the font to its normal style</li>
            <li><b>italic</b>: italicizes a font</li>
            <li><b>oblique</b>: selects the font style classified as oblique</li>
         </ul>
         <pre>
            <code>{syntax_9}</code>
         </pre>
         <h3>CSS Font Weight</h3>
         <p>The <b>font-weight</b> CSS property sets the weight or boldness of a font.</p>
         <h5>Valid Values:</h5>
         <ul>
            <li><b>{syntax_10}</b>: a number from 1 to 1000</li>
            <li><b>normal</b>: sets a font to its normal weight; same as <b>400</b></li>
            <li><b>bold</b>: emboldens a font; same as 700</li>
            <li><b>lighter</b>: sets the font weight to be lighter than its parent element's available font weights</li>
            <li><b>bolder</b>: sets the font weight to be heavier than its parent element's available font weights</li>
         </ul>
         <pre>
            <code>{syntax_11}</code>
         </pre>
         <h3>CSS Font Variant</h3>
         <p>The <b>font-variant</b> CSS property sets whether a text should be displayed normally or in small-caps.</p>
         <h5>Valid Values:</h5>
         <ul>
            <li><b>normal</b>: specifies a normal font face</li>
            <li><b>small-caps</b>: lowercase letters are converted to uppercase; converted uppercase letters appears in a smaller font size</li>
         </ul>
         <pre>
            <code>{syntax_12}</code>
         </pre>
               

		   <div class="container mt-4 mb-4 d-flex justify-content-between">
            <Link class="btn btn-primary" to="/css-tutorials/css-text"><Adl /> Previous</Link>
            <Link class="btn btn-primary" to="/css-tutorials/css-icons">Next <Adr /></Link>
         </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Css_fonts;