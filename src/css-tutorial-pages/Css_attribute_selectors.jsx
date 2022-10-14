import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Adl from "../Adl";
import Adr from "../Adr";


const Css_pseudo_elements = () => {
const syntax_1 = `<a>`
const syntax_2 = `
  a[title]{
   color: red; 
  }
`
const syntax_3 = `
  a[title="freeprojects1"]{
   color: red;
  }
`
const syntax_4 = `
  a[title~="freeprojects1"]{
   color: red;
  }
`
const syntax_5 = `<div>`
const syntax_6 = `
  div[lang|="en"]{
   color: green;
  }
`
const syntax_7 = `
  div[lang|="zh"]{
   color: red;
  }
`
const syntax_8 = `
  a[href^="#"]{
   color: fuchsia;
  }
`
const syntax_9 = `
  a[href$=".org"]{
   color: red;
  }
`
const syntax_10 = `
  a[href*="projects"]{
   color: red;
  }
`
const syntax_11 = `
  a[title="projects" j]{
   color: red;
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
          <h3>CSS Attribute Selectors</h3>
          <p>The CSS attribute selectors target elements based on the presence or value of a given attribute.</p>
          <h3>[attr]</h3>
          <p>Selects elements with an attribute name of <b>attr</b>.</p>
          <p>The example below selects <b>{syntax_1}</b> elements with the <b>title</b> attribute.</p>  
          <pre className='mb-1'>
            <code>{syntax_2}</code>
          </pre>
          <p>Go to <a className="css-attr-sele-anchor" href="https://freeprojects1.blogspot.com" target="_blank">Free Projects1</a>.</p> <p className='mb-4'>Go to <a className="css-attr-sele-anchor" href="https://freeprojects1.blogspot.com" title="FreeProjects1" target="_blank">Free Projects1</a>(with title attribute).</p>

          <h3>[attr=value]</h3>
          <p>Selects elements with an attribute name of <b>attr</b> whose value is exactly <b>value</b>.</p>
          <p>The example below selects <b>{syntax_1}</b> elements whose <b>title</b> attribute's value is exactly <b>freeprojects1</b>.</p>
          <pre className='mb-1'>
            <code>{syntax_3}</code>
          </pre>
          <p>Go to <a className="css-attr-sele-anchor2" href="https://freeprojects1.blogspot.com" title="css" target="_blank">Free Projects1</a>.</p><p className='mb-4'>Go to <a className="css-attr-sele-anchor2" href="https://freeprojects1.blogspot.com" title="freeprojects1" target="_blank">Free Projects1</a>.</p>

          <h3>[attr~=value]</h3>
          <p>Selects elements with an attribute name of <b>attr</b> whose value is exactly <b>value</b> .</p>
          <p>It can select elements with the attribute name <b>attr</b> that has multiple values (separated by white-spaces) including <b>value</b>.</p>
          <p>The example below selects <b>{syntax_1}</b> elements whose <b>title</b> attributes' values are <b>freeprojects1</b>, <b>freeprojects1 css</b>, <b>css freeprojects1</b>, <b>html freeprojects1 css</b>, but NOT <b>freeprojects1s</b> and <b>freeprojects1-css</b></p>
          <pre className='mb-1'>
            <code>{syntax_4}</code>
          </pre>
          <p>Go to <a className="css-attr-sele-anchor3" href="https://freeprojects1.blogspot.com" title="freeprojects1" target="_blank">Free Projects1</a>.</p>
          <p>Go to <a className="css-attr-sele-anchor3" href="https://freeprojects1.blogspot.com" title="freeprojects1 css" target="_blank">Free Projects1</a>.</p>
          <p>Go to <a className="css-attr-sele-anchor3" href="https://freeprojects1.blogspot.com" title="css freeprojects1" target="_blank">Free Projects1</a>.</p>
          <p>Go to <a className="css-attr-sele-anchor3" href="https://freeprojects1.blogspot.com" title="html freeprojects1 css" target="_blank">Free Projects1</a>.</p>
          <p>Go to <a className="css-attr-sele-anchor3" href="https://freeprojects1.blogspot.com" title="freeprojects1s" target="_blank">Free Projects1</a>.</p>
          <p className='mb-4'>Go to <a className="css-attr-sele-anchor3" href="https://freeprojects1.blogspot.com" title="freeprojects1-css" target="_blank">Free Projects1</a>.</p>

          <h3>[attr |=value]</h3>
          <p>Selects elements with an attribute name of <b>attr</b> whose value can be exactly <b>value</b> or can begin with <b>value</b> immediately followed by a hyphen, <b>(-)</b>.</p>
          <p>It is often used for language subcode matches.</p>
          <p>The example below selects <b>{syntax_5}</b> elements whose <b>lang</b> attribute values start with <b>en-</b>.</p>
          <pre className='mb-1'>
            <code>{syntax_6}</code>
          </pre>
          <div lang="en-US" className="css-attr-sele-language"> I love these CSS Tutorials. </div><div lang="en-GB" className="css-attr-sele-language"> I love these CSS Tutorials. </div><div lang="en-AU" className="css-attr-sele-language"> I love these CSS Tutorials. </div><div lang="zh-CN" className="css-attr-sele-language"> I love these CSS Tutorials.</div><div lang="zh-TW" className="css-attr-sele-language mb-4"> I love these CSS Tutorials.</div>

          <p>The example below selects <b>{syntax_5}</b> elements whose <b>lang</b> attribute values start with <b>zh-</b>.</p>
          <pre className='mb-1'>
            <code>{syntax_7}</code>
          </pre>
          <div lang="en-US" className="css-attr-sele-language2"> I love these CSS Tutorials. </div><div lang="en-GB" className="css-attr-sele-language2"> I love these CSS Tutorials. </div><div lang="en-AU" className="css-attr-sele-language2"> I love these CSS Tutorials. </div><div lang="zh-CN" className="css-attr-sele-language2"> I love these CSS Tutorials.</div><div lang="zh-TW" className="css-attr-sele-language2 mb-4"> I love these CSS Tutorials.</div>

          <h3>[attr^=va1ue]</h3>
          <p>Selects elements with an attribute name of <b>attr</b> whose value is prefixed (preceded) by <b>value</b>.</p>
          <p>The example below selects internal links (<b>{syntax_1}</b> elements whose <b></b> value starts with a hash <b>#</b>)</p>
          <pre className='mb-1'>
            <code>{syntax_8}</code>
          </pre>
          <p>Go to <a className="css-attr-sele-language3" href="https://freeprojects1.blogspot.com" target="_blank">Free Projects1</a>.</p><p className='mb-4'>Go to <a className="css-attr-sele-language3" href="#sectio1">Section 1</a>.</p>

          <h3>[attr$=value]</h3>
          <p>Selects elements with an attribute name of <b>attr</b> whose value is suffixed (followed) by <b>value</b>.</p>
          <p>The example below selects <b>{syntax_1}</b> elements whose <b>href</b> value ends with <b>.org</b></p>
          <pre className='mb-1'>
            <code>{syntax_9}</code>
          </pre>
          <p>Go to <a className="css-attr-sele-language4" href="https://freeprojects1.blogspot.com" target="_blank">freeprojects1.blogspot.com</a>.</p><p className='mb-4'>Go to <a className="css-attr-sele-language4" href="https://www.wikipedia.org" target="_blank">wikipedia.org</a>.</p>

          <h3>[attr*=value]</h3>
          <p>Selects elements with an attribute name of <b>attr</b> whose value contains at least one occurrence of <b>value</b> within the string (text).</p>
          <p>The example below selects <b>{syntax_1}</b> elements whose <b>href</b> value contains the text <b>exam</b>.</p>
          <pre className='mb-1'>
            <code>{syntax_10}</code>
          </pre>
          <p>Go to <a className="css-attr-sele-language5" href="https://freeprojects1.blogspot.com" target="_blank">freeprojects1.blogspot.com</a>.</p><p>Go to <a className="css-attr-sele-language5" href="https://www.wikipedia.org" target="_blank">wikipedia.org</a>.</p>
          <p><b>Note!</b> All attribute selectors' values are <b>cased sensitive</b> by default.</p>
          <p>To make the value be compared case-insensitively, simply add an <b>i</b> or <b>I</b> before the closing bracket.</p>
          <pre className='mb-1'>
            <code>{syntax_11}</code>
          </pre>
          <p>Go to <a className="css-attr-sele-language6" href="https://freeprojects1.blogspot.com" title="PrOjEcTs" target="_blank">Free Projects1</a>.</p><p>Try to remove the "<b>j</b>" from the attribute selector to see the difference.</p>


		      <div className="container mt-4 mb-4 d-flex justify-content-between">
            <Link className="btn btn-primary" to="/css-tutorials/css-pseudo-elements"><Adl /> Previous</Link>
            <Link className="btn btn-primary" to="/css-tutorials/css-opacity">Next <Adr /></Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Css_pseudo_elements;
