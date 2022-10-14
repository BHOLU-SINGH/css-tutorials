import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Adl from "../Adl";
import Adr from "../Adr";


const Css_combinators = () => {
const syntax_1 = `>`
const syntax_2 = `
  selector1 selector2{
   /* CSS declarations */
  }
`
const syntax_3 = `
  div span{
   color: red;
  }
`
const syntax_4 = `
  selector1 > selector2{
   /* CSS declarations */
  }
`
const syntax_5 = `
  div > span{
   color: red;
  }
`
const syntax_6 = `
  selector1 + selector2{
   /* CSS declarations */
  }
`
const syntax_7 = `
  li#two + li{
   color: red;
  }
`
const syntax_8 = `
  selector1 ~ selector2{
   /* CSS declarations */
  }
`
const syntax_9 = `
  li.two ~ li{
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
          <h3>CSS Combinators</h3>
          <p>In CSS, we can combine selectors to make fine-grained selections.</p>
          <p>CSS has several ways to select elements based on how they are related to one another.</p>
          <p>A CSS combinator expresses and explains the relationship between selectors.</p>
          <h5>CSS Combinators:</h5>
          <ul>
            <li>
              <div className='d-flex'> descendant combinator 
                <div style={{width: "12px", height: "12px", marginTop: "7px", marginLeft: "5px", background: "#000", borderRadius: "3px"}}></div>
              </div>
            </li>
            <li>child combinator <b>{syntax_1}</b></li>
            <li>adjacent sibling combinator <b>+</b></li>
            <li>general sibling combinator <b>—</b></li>
          </ul>
          <h3>Descendant Combinator</h3> 
          <pre>
            <code>{syntax_2}</code>
          </pre>
          <p>Selects any element matching <b>selector2</b> that is a descendant of an element matching <b>selector1</b> (that is, a child, or a child of a child, etc.).</p>
            <p style={{display: "flex"}}>The descendant combinator is represented by a single space <span style={{width: "12px", height: "12px", marginTop: "7px", marginLeft: "5px", background: "#000", borderRradius: "3px"}}></span>.</p>
          <h5>Example:</h5>
          <pre className='mb-1'>
            <code>{syntax_3}</code>
          </pre>
          <div className='mb-4'><span style={{color: "red"}}>I love these css tutorials.</span><p>I love these <span style={{color: "red"}}>css tutorials</span>.</p></div>
          <h3>Child Combinator</h3>
          <pre className='bottom'>
            <code>{syntax_4}</code>
          </pre>
          <p>Selects any element matching <b>selector2</b> that is a direct child of an element matching <b>selector1</b></p>
          <p>The child combinator is represented by the <b>{syntax_1}</b> character.</p>
          <h5>Example:</h5>
          <pre className='mb-1'>
            <code>{syntax_5}</code>
          </pre>
          <div><span style={{color: "red"}}>I love these css tutorials.</span><p>I love these <span style={{color: "red"}}>css tutorials</span>.</p></div>
          <h3>Adjacent Sibling Combinator</h3>
          <pre className='mb-1'>
            <code>{syntax_6}</code>
          </pre>
          <p>Selects any element matching <b>selector2</b> if it immediately follows elements matching <b>selector1</b> and both are children of the same parent element (container).</p>
          <p>The adjacent sibling combinator is represented by the <b>+</b> character.</p>
          <h5>Example:</h5>
          <pre className='mb-1'>
            <code>{syntax_7}</code>
          </pre>
          <ul>
            <li className='css-comb'>one</li>
            <li className='css-comb' id="two">two</li>
            <li className='css-comb'>three</li>
            <li className='css-comb'>four</li>
          </ul>
          <h3>General Sibling Combinator</h3>
          <pre className='mb-1'>
            <code>{syntax_8}</code>
          </pre>
          <p>Selects any element matching <b>selector2</b> if it follows (not necessarily immediate) elements matching <b>selector1</b> and both are children of the same parent element (container).</p>
          <p>The general sibling combinator is represented by the <b>~</b> character.</p>
          <h5>Example:</h5>
          <pre className='mb-1'>
            <code>{syntax_9}</code>
          </pre>
          <ul>
            <li className='css-comb2'>one</li>
            <li className='css-comb2 two'>two</li>
            <li className='css-comb2'>three</li>
            <li className='css-comb2'>four</li>
          </ul>


		      <div class="container mt-4 mb-4 d-flex justify-content-between">
            <Link class="btn btn-primary" to="/css-tutorials/css-layout-horizontal-and-vertical-align"><Adl /> Previous</Link>
            <Link class="btn btn-primary" to="/css-tutorials/css-pseudo-classes">Next <Adr /></Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Css_combinators; 