import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Adl from "../Adl";
import Adr from "../Adr";

const Css_text = () => {
const syntax_1 = `<color>`
const syntax_2 = `
  #p1{
    color: red;
  }
  #p2{
    color: rgb(23, 52, 89);
  }
`
const syntax_3 = `
  #p1{
    text-align: left;
  }
  #p2{
    text-align: center;
  }
  #p3{
    text-align: right;
  }
  #p4{
    text-align: justify;
  }
`
const syntax_4 = `
  #p1{
    text-transform: none;
  }
  #p2{
    text-transform: capitalize;
  }
  #p3{
    text-transform: uppercase;
  }
  #p4{
    text-transform: lowercase;
  }
`
const syntax_5 = `<length>`
const syntax_6 = `<percentage>`
const syntax_7 = `
  #p1{
    text-indent: 15px;
  }
  #p2{
    text-indent: 25%;
  }
`
const syntax_8 = `
  #p1{
    text-decoration: solid dotted red;
  }
`
const syntax_9 = `
  #p1{
    /* offset-x | offset-y | blur-radius | color */
    text-shadow: 2px 2px 3px red;
  }
  #p2{
    /* color | offset-x | offset-y | blur-radius */
    text-shadow: #173459 1px 0 10px;
  }
  #p3{
    /* offset-x | offset-y | color */
    text-shadow: 2px 2px rgb(128, 0, 255);
  }
  #p4{
    /* color | offset-x | offset-y */
    text-shadow: fuchsia 2px 5px;
  }
  #p5{
    /* offset-x | offset-y */
    text-shadow: 1px 3px;
  }
`
const syntax_10 = `
  #p1{
    letter-spacing: normal;
  }
  #p2{
    letter-spacing: 3px;
  }
`
const syntax_11 = `
  #p1{
    word-spacing: normal;
  }
  #p2{
    word-spacing: 4px;
  }
  #p3{
    word-spacing: 20%;
  }
`
const syntax_12 = `<number>`
const syntax_13 = `
  #p1{
    line-height: 3px;
  }
`
const syntax_14 = `<br>`
const syntax_15 = `
  #p1{
    white-space: normal;
  }
  #p2{
    white-space: nowrap;
  }
  #p3{
    white-space: pre;
  }
  #p4{
    white-space: pre-wrap;
  }
  #p5{
    white-space: pre-line;
  }
`
const syntax_16 = `
  #ltr{
    direction: ltr;
  }
  #rtl{
    direction: rtl;
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
         <h3>CSS Text</h3>
    		<p>CSS provides a lot of ways to format text including changing color, indentation, adding text-decoration and a lot more.</p>
         <h3>CSS Text Color</h3>
         <p>The color CSS property sets the color of a text.</p>
         <h5>Valid Values:</h5>
         <ul><li><b>{syntax_1}</b></li></ul>
         <h5>Example:</h5>
         <pre>
            <code>{syntax_2}</code>
         </pre>
         <h3>CSS Text Align</h3>
         <p>The text-align CSS property sets the horizontal alignment of a text.</p>
         <h5>Valid Values:</h5>
         <ul>
            <li><b>left</b>: aligns text to the left edge</li>
            <li><b>center</b>: aligns text to the center</li>
            <li><b>right</b>: aligns text to the right edge</li>
            <li><b>justify</b>: aligns text its left and right edges to the left and right edges of the line box except for the last line</li>
         </ul>
         <h5>Example:</h5>
         <pre>
            <code>{syntax_3}</code>
         </pre>
         <h3>CSS Text Transform</h3>
         <p>The <b>text-transform</b> CSS property sets the capitalization of the text.</p>
         <h5>Valid Values:</h5>
         <ul>
            <li><b>none</b>: prevents the case of the text from being changed</li>
            <li><b>capitalize</b>: converts the first letter of each word to uppercase; other characters are unchanged</li>
            <li><b>uppercase</b>: converts a text to uppercase</li>
            <li><b>lowercase</b>: converts a text to lowercase</li>
         </ul>
         <pre>
            <code>{syntax_4}</code>
         </pre>
         <h3>CSS Text Indent</h3>
         <p>The text-indent CSS property sets the length of the indentation of a text.</p>
         <h5>Valid Values:</h5>
         <ul>
            <li><b>{syntax_5}</b></li>
            <li><b>{syntax_6}</b></li>
         </ul>
         <h5>Example:</h5>
         <pre>
            <code>{syntax_7}</code>
         </pre>
         <h3>CSS Text Decoration</h3>
         <p>The <b>text-decoration</b> CSS property sets the text decoration line, color and style.</p>
         <p>The <b>text-decoration</b> CSS property is actually a shorthand for <br />text-decoration-line, <br />text-decoration-style and <br />text-decoration-color properties.</p>
         <p><b>Note!</b> The <b>text-decoration-line</b> property is required.</p>
         <p><b>text-decoration-line</b> Valid Values:</p>
         <ul>
            <li><b>none</b>: provides no decorative line</li>
            <li><b>underline</b>: provides a decorative line beneath a text</li>
            <li><b>overline</b>: provides a decorative line above a text</li>
            <li><b>line-through</b>: provides a decorative line going through the middle of a text</li>
         </ul>
         <p>text-decoration-style Valid Values:</p>
         <ul>
            <li><b>solid</b>: draws a solid line</li>
            <li><b>dotted</b>: draws a dotted line</li>
            <li><b>dashed</b>: draws a dashed line</li>
            <li><b>double</b>: draws a double line</li>
            <li><b>wavy</b>: draws a wavy line</li>
         </ul>
         <p><b>text-decoration-color</b> Valid Values:</p>
         <ul><li><b>{syntax_1}</b></li></ul>
         <h5>Example:</h5>
         <p>Click the 'Play It Yourself' button below to play with all the values.</p>
         <pre>
            <code>{syntax_8}</code>
         </pre>
         <h3>CSS Text Shadow</h3>
         <p>The text-shadow CSS property adds shadows to text. Each shadow is described by some combination of X and Y offsets from the element, blur radius, and color.</p>
         <h5>Valid Values:</h5>
         <ul>
            <li><b>{syntax_8}</b>: optional; sets the color of the shadow; ifthis is not defined the value is left up tothe user-agent</li>
            <li><b>offset-x offset-y</b>: required value; it specifies the shadow's distance from the text; offset-x is the horizontal distance while offset-y is the vertical distance</li>
            <li><b>blur-radius</b>: optional; defaults to O; this isa slength2 value, it defines the size of the blur/shadow</li>
         </ul>
         <p>If the optional values are not present they will be set to their default values.</p>
         <h5>Example:</h5>
         <pre>
            <code>{syntax_9}</code>
         </pre>
         <h3>CSS Letter Spacing</h3>
         <p>The <b>letter -spacing</b> CSS property sets the length and behavior of the space between letters.</p>
         <h5>Valid Values:</h5>
         <ul>
            <li><b>normal</b>: sets the normal letter spacing for the current font</li>
            <li><b>{syntax_5}</b></li>
         </ul>
         <h5>Example:</h5>
         <pre>
            <code>{syntax_10}</code>
         </pre>
         <h3>CSS Word Spacing</h3>
         <p>The <b>word-spacing</b> CSS property sets the length of the space words.</p>
         <h5>Valid Values:</h5>
         <ul>
            <li><b>normal</b>: sets the normal word spacing as defined by the browser</li>
            <li><b>{syntax_5}</b></li>
            <li><b>{syntax_6}</b></li>
         </ul>
         <pre>
            <code>{syntax_11}</code>
         </pre>
         <h3>CSS Line Height</h3>
         <p>The <b>line-height</b> specifies the amount of space used in lines such as in text.</p>
         <h5>Valid Values:</h5>
         <ul>
            <li><b>normal</b>: depends on the user agent</li>
            <li><b>{syntax_12}</b>: the value is multiplied by the element's current font size; this is the preferred way to set <b>line-height</b></li>
            <li><b>{syntax_5}</b></li>
            <li><b>{syntax_6}</b></li>
         </ul>
         <h5>Example:</h5>
         <pre>
            <code>{syntax_13}</code>
         </pre>
         <h3>CSS White Space</h3>
         <p>The white-space CSS property sets how the white space is handled inside an element.</p>
         <h5>Valid Values:</h5>
         <ul>
            <li><b>normal</b>: Sequences of white space are collapsed. Newline characters in the source are handled the same as other white space. Lines are broken as necessary to fill line boxes.</li>
            <li><b>nowrap</b>: Collapses white space as for normal, but suppresses line breaks (text wrapping) within the source.</li>
            <li><b>pre</b>: Sequences of white space are preserved. Lines are only broken at newline characters in the source and at {syntax_14} elements.</li>
            <li><b>pre-wrap</b>: Sequences of white space are preserved. Lines are broken at newline characters, at {syntax_14} , and as necessary to fill line boxes.</li>
            <li><b>pre-line</b>: Sequences of white space are collapsed. Lines are broken at newline characters, at {syntax_14} , and as necessary to fill line boxes.</li>
         </ul>
         <h5>Example:</h5>
         <pre>
            <code>{syntax_15}</code>
         </pre>
         <h3>CSS Text Direction</h3>
         <p>The <b>direction</b> CSS property sets the direction of a text (and more).</p>
         <h5>Valid Values:</h5>
         <ul>
            <li><b>ltr</b>: sets text and other elements go from left to right</li>
            <li><b>rtl</b>: sets text and other elements go from right to left</li>
         </ul>
         <h5>Example:</h5>
         <pre>
            <code>{syntax_16}</code>
         </pre>
               

		   <div class="container mt-4 mb-4 d-flex justify-content-between">
            <Link class="btn btn-primary" to="/css-tutorials/css-box-models"><Adl /> Previous</Link>
            <Link class="btn btn-primary" to="/css-tutorials/css-fonts">Next <Adr /></Link>
         </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Css_text;