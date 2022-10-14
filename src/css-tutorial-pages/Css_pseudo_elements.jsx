import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Adl from "../Adl";
import Adr from "../Adr";


const Css_pseudo_elements = () => {
const syntax_1 = `
  selector::pseudo-element{
   property: value;
  }
`
const syntax_2 = `
  .true::after{
   content: "-> True";
   color: green;
  }
  .false::after{
   content: "-> False";
   color: red;
  }
`
const syntax_3 = `
  .true::before{
   content: "-> True";
   color: green;
  }
  .false::before{
   content: "-> False";
   color: red;
  }
`
const syntax_4 = `
  ul{
   list-style-type: none;
  }
  li::before{
   content: "->";
   color: blue;
  }
`
const syntax_5 = `
  p::first-letter{
   text-decoration: overline;
   font-size: 250%;
   color: red;
  }
`
const syntax_6 = `
  p::first-line{
   color: #f8f9f9;
   background-color: #173459;
  }
`
const syntax_7 = `
  p::selection, textarea::selection{
   color: #f8f9f9;
   background-color: #173459;
  }
`
const syntax_8 = `
  ::selection{
   property: value;
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
          <h3>CSS Pseudo-elements</h3>
          <p>A CSS pseudo-element is a keyword added to a selector that lets you style a specific part of the selected element(s).</p>
          <h5>Syntax:</h5>
          <pre>
            <code>{syntax_1}</code>
          </pre>
          <p>In this lesson we'll study the following CSS pseudo elements:</p>
          <ul>
            <li><b>::after</b></li>
            <li><b>::before</b></li>
            <li><b>::first-letter</b></li>
            <li><b>::first-line</b></li>
            <li><b>::selection</b></li>
          </ul>
          <h3>The ::after Pseudo-element</h3>
          <p>The <b>::after</b> CSS pseudo-element creates a pseudo-element that is the last child of the selected element.</p>
          <p>It is commonly used with the <b>content</b> CSS to add cosmetics to the selected element.</p>
          <p>The created element is inline by default.</p>
          <pre className='mb-1'>
            <code>{syntax_2}</code>
          </pre>
          <p class="css-pseudo-elmnt-true"> Birds can fly.</p>
          <p class="css-pseudo-elmnt-false">  Monkeys can fly.</p>
          <h3>The ::before Pseudo-element</h3>
          <p>The <b>::before</b> CSS pseudo-element creates a pseudo-element that is the first child of the selected element.</p>
          <p>It is commonly used with the <b>content</b> CSS to add cosmetics to the selected element.</p>
          <p>The created element is inline by default.</p>
          <pre className='mb-1'>
            <code>{syntax_3}</code>
          </pre>
          <p class="css-pseudo-elmnt-true2"> Birds can fly.</p>
          <p class="css-pseudo-elmnt-false2"> Monkeys can fly.</p>
          <p>We can also use it on HTML lists to add custom bullets:</p>
          <pre className='mb-1'>
            <code>{syntax_4}</code>
          </pre>
          <ul class="css-pseudo-elmnt-ul">
            <li>Apple</li>
            <li>Orange</li>
            <li>Banana</li>
          </ul>
          <h3>The ::first-letter Pseudo-element</h3>
          <p>The <b>::first-letter</b> CSS pseudo-element applies styles to the first letter of the first line of the selected block-level element.</p>
          <p>Allowed CSS Properties:</p>
          <ul>
            <li>All <b>font</b> properties</li>
            <li>All <b>background</b> properties</li>
            <li>All <b>margin</b> properties</li>
            <li>All <b>padding</b> properties</li>
            <li>All <b>border</b> properties</li>
            <li>The <b>color</b> property</li>
            <li><b>word-spacing , letter-spacing, text-decoration, text-transform, line-height, text-shadow, text-decoration, text-decoration-color, text-decoration-line, text-decoration-style, vertical-align</b></li>
          </ul>
          <pre className='mb-2'>
            <code>{syntax_5}</code>
          </pre>
          <p class="css-pseudo-elmnt-p-tag">These tutorials are best for every css lover.</p>
          <h3>The ::first-line Pseudo-element</h3>
          <p>The ::first-line CSS pseudo-element applies styles to the first line of the selected block-level element.</p>
          <p>Allowed CSS Properties:</p>
          <ul>
            <li>All <b>font</b> properties</li>
            <li>All <b>background</b> properties</li>
            <li>The <b>color</b> property</li>
            <li><b>word-s pacing , letter-spacing, text-decoration, text-transform, line-height, text-shadow, text-decoration, text-decoration-color, text-decoration-line, text-decoration-style, vertical-align</b></li>
          </ul>
          <pre className='mb-1'>
            <code>{syntax_6}</code>
          </pre>
          <p className="css-pseudo-elmnt-p-line mb-4">I love these CSS Tutorials. These tutorials provide easy and quick way to learn css. I love these CSS Tutorials. These tutorials provide easy and quick way to learn css. I love these CSS Tutorials. These tutorials provide easy and quick way to learn css.</p>
          <h3>The ::selection Pseudo-element</h3>
          <p>The ::selection CSS pseudo-element applies styles to the part of a document that has been highlighted or selected by the user.</p>
           <p>Allowed CSS Properties:</p>
          <ul>
            <li><b>color</b></li>
            <li><b>background-color</b></li>
            <li><b>cursor</b></li>
            <li><b>caret-color</b></li>
            <li><b>outline</b> CSS properties</li>
            <li><b>text-decoration</b> and its associated properties</li>
            <li><b>text-emphasis-color</b></li>
            <li><b>text-shadow</b></li>
          </ul>
          <pre className='mb-1'>
            <code>{syntax_7}</code>
          </pre>
          <p className="css-pseudo-elmnt-p-selection">I love these CSS Tutorials. These these CSS tutorials are easy to understand.</p>
          <textarea className="css-pseudo-elmnt-text-selection mb-4">I love these CSS Tutorials.</textarea>
          <p>You can style all the selections in a document using the code below:</p>
          <pre>
            <code>{syntax_8}</code>
          </pre>


		      <div class="container mt-4 mb-4 d-flex justify-content-between">
            <Link class="btn btn-primary" to="/css-tutorials/css-pseudo-classes"><Adl /> Previous</Link>
            <Link class="btn btn-primary" to="/css-tutorials/css-attribute-selectors">Next <Adr /></Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Css_pseudo_elements;