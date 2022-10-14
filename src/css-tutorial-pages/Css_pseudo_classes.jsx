import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Adl from "../Adl";
import Adr from "../Adr";


const Css_pseudo_classes = () => {
const syntax_1 = `
  selector:pseudo-class{
   property: value;
  }
`
const syntax_2 = `
  p:hover{
   color: red;
   font-size: 20px;
  }
  /* optional; specifies the duration of the effect */
  p{
   transition-duration: 2s;
  }
`
const syntax_3 = `<a>`
const syntax_4 = `
  a:link{
   color: orange;
  }
  a:visited{
   color: red;
  }
  a:hover{
   color: green;
  }
  a:active{
   color: pink;
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
          <h3>CSS Pseudo-classes</h3>
          <p>A CSS pseudo-class is a keyword added to a selector that specifies a special state for the targeted elements.</p>
          <h5>Syntax:</h5>
          <pre>
            <code>{syntax_1}</code>
          </pre>
          <h3>The :hover Pseudo-class</h3>
          <p>The CSS <b>:hover</b> pseudo-class can be used to change an element's styles when the user's pointer hovers (mouses over) it.</p>
          <pre className='mb-1'>
            <code>{syntax_2}</code>
          </pre>
          <p class="css-pseudo-cls"> I love free css tutorials because these tutorials are easy to understand. </p>
          <p class="css-pseudo-cls"> I love free css tutorials. </p>
          <h3>CSS Anchor Pseudo-classes</h3>
          <p>The following pseudo-classes are used for the anchor (<b>{syntax_3}</b>) element.</p>
          <pre className='mb-1'>
            <code>{syntax_4}</code>
          </pre>
          <p> Go to <a class="anchor-pseudo-class" href="https:freeprojects1.blogspot.com">Free Projects1</a>.</p>
          <p>Note! In the CSS definition, the <b>:hover</b> pseudo-class should come after the <b>:link</b> and <b>:visited</b> pseudo-classes. And the <b>:active</b> pseudo-class must come after the <b>:hover</b> pseudo-class.</p>
          <h3>Index of CSS Pseudo-classes</h3>
          <p>Click the examples to Try It Yourself and see description.</p>
          <table cellpadding="5px" width="100%">
            <tr><th>Pseudo-class</th><th>Example</th></tr>
            <tr><th>:active</th><th>a:active</th></tr>
            <tr><th>:checked</th><th>input:checked</th></tr>
            <tr><th>:disabled</th><th>input:disabled</th></tr>
            <tr><th>:empty</th><th>div:empty</th></tr>
            <tr><th>:enabled</th><th>input:enabled</th></tr>
            <tr><th>:first-child</th><th>p:first-child</th></tr>
            <tr><th>:first-of-type</th><th>h2:first-of-type</th></tr>
            <tr><th>:focus</th><th>input:focus</th></tr>
            <tr><th>:hover</th><th>button:hover</th></tr>
            <tr><th>:in-range</th><th>input:in-range</th></tr>
            <tr><th>:invalid</th><th>input:invalid</th></tr>
            <tr><th>:lang(language)</th><th>p:lang(en)</th></tr>
            <tr><th>:last-child</th><th>p:last-child</th></tr>
            <tr><th>:last-of-type</th><th>h2:last-of-type</th></tr>
            <tr><th>:link</th><th>a:link</th></tr>
            <tr><th>:not(selector)</th><th>:not(p)</th></tr>
            <tr><th>:nth-child(n)</th><th>tr:nth-child(2)</th></tr>
            <tr><th>:nth-last-child(n)</th><th>tr:nth-last-child(n)</th></tr>
            <tr><th>:nth-last-of-type(n)</th><th>span:nth-last-of-type(2)</th></tr>
            <tr><th>:nth-of-type(n)</th><th>span:nth-of-type(n)</th></tr>
            <tr><th>:only-of-type</th><th>span:only-of-type</th></tr>
            <tr><th>:only-child</th><th>p:only-child</th></tr>
            <tr><th>:optional</th><th>input:optional</th></tr>
            <tr><th>:out-of-range</th><th>input:out-of-range</th></tr>
            <tr><th>:read-only</th><th>input:read-only</th></tr>
            <tr><th>:read-write</th><th>input:read-write</th></tr>
            <tr><th>:required</th><th>input:required</th></tr>
            <tr><th>:root</th><th>:root</th></tr>
            <tr><th>:target</th><th>p:target</th></tr>
            <tr><th>:valid</th><th>input:valid</th></tr>
            <tr><th>:visited</th><th>a:visited</th></tr>
          </table>


		      <div class="container mt-4 mb-4 d-flex justify-content-between">
            <Link class="btn btn-primary" to="/css-tutorials/css-combinators"><Adl /> Previous</Link>
            <Link class="btn btn-primary" to="/css-tutorials/css-pseudo-elements">Next <Adr /></Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Css_pseudo_classes;