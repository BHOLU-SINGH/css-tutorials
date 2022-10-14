import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Adl from "../Adl";
import Adr from "../Adr";


const Css_layout_overflow = () => {
const syntax_1= `
  .div1{
   overflow-x: visible;
  }
  .div2{
   overflow-x: hidden;
  }
  .div3{
   overflow-x: scroll;
  }
  .div4{
   overflow-x: auto;
  }
`
const syntax_2= `
  .div1{
   overflow-y: visible;
  }
  .div2{
   overflow-y: hidden;
  }
  .div3{
   overflow-y: scroll;
  }
  .div4{
   overflow-y: auto;
  }
`
const syntax_3= `
  div.container{
   overflow: scroll;
   width: 200px;
   height: 200px;
   border: 1px solid black;
  }
  div.content{
   width: 400px;
   height: 400px;
   background: #173459;
   color: white;
  }
`
const syntax_4= `
  div.container{
   overflow: scroll hidden;  /* same as overflow-x: scroll; overflow-y: hidden; */
   width: 200px;
   height: 200px;
   border: 1px solid black;
  }
  div.content{
   width: 180px;
   height: 250px;
   background: #173459;
   color: white;
  }
`
const syntax_5= `
  div{
   position: fixed;
   width: 50px;
   height: 50px;
   top: 10px;
   right: 10px;
   background: #173459;
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
          <h3>CSS Layout - Overflow</h3>
          <p>Content usually overflows when it is bigger than its container (parent element).</p>
          <p>The  CSS sets what to do when content overflows a block-level element's left and right edges.</p>
          <p>The <b></b> CSS sets what to do when content overflows a block-level element's left and right edges.</p>
          <p>The <b>overflow-y</b> CSS property sets what to do when content overflows a block-level element's top and bottom edges.</p>
          <h5>Valid Values:</h5>
          <ul>
            <li><b>visible</b>: default; content is not clipped, overflowing content is rendered outside the box's edges</li>
            <li><b>hidden</b>: content is clipped if necessary and invisible</li>
            <li><b>scroll</b>: content is clipped if necessary to fit the padding box; browsers will display a scroll bar</li>
            <li><b>auto</b>: if content fits inside the padding box it works the same as <b>visible</b>; if content overflows the padding box it works like <b>scroll</b></li>
          </ul>
          <h5>Example:</h5>
          <p>Here is an example of the <b>overflow-x</b> CSS property:</p>
          <pre>
            <code>{syntax_1}</code>
          </pre>
          <p>Here is an example of the <b>overflow-y</b> CSS property:</p>
          <pre>
            <code>{syntax_2}</code>
          </pre>
          <h3>CSS overflow Property</h3>
          <p>The <b>overflow</b> CSS property isa shorthand for the <b>overflow-x</b> and <b>overflow-y</b> CSS properties.</p>
          <p>It can have one or two values:</p>
          <ul>
            <li>When <b>one</b> value is specified, the value applies to both <b>overflow-x</b> and <b>overflow-y</b> properties</li>
            <li>When <b>two</b> values are specified, the <b>first value</b> applies to the <b>overflow-x</b> property while the <b>second value</b> applies to the <b>overflow-y</b> property</li>
          </ul>
          <h5>One Value Example:</h5>
          <pre className='mb-1'>
            <code>{syntax_3}</code>
          </pre>
          <div className="css-lay-oflow-one-value-container mb-5">
            <div className="css-lay-oflow-one-value-content"> 
              1. I love these css tutorials. I love these css tutorials.<br /> 
              2. I love these css tutorials. I love these css tutorials.<br />
              3. I love these css tutorials. I love these css tutorials.<br />
              4. I love these css tutorials. I love these css tutorials.<br />
              5. I love these css tutorials. I love these css tutorials.<br />
              6. I love these css tutorials. I love these css tutorials.<br /> 
              7. I love these css tutorials. I love these css tutorials.<br />
              8. I love these css tutorials. I love these css tutorials.<br />
              9. I love these css tutorials. I love these css tutorials.<br />
              10. I love these css tutorials. I love these css tutorials.<br />
              11. I love these css tutorials. I love these css tutorials.<br /> 
              12. I love these css tutorials. I love these css tutorials.<br />
              13. I love these css tutorials. I love these css tutorials.<br />
              14. I love these css tutorials. I love these css tutorials.<br />
              15. I love these css tutorials. I love these css tutorials.<br />
              16. I love these css tutorials. I love these css tutorials.
            </div>
          </div>
          <h5>Two Value Example:</h5>
          <pre className='mb-1'>
            <code>{syntax_4}</code>
          </pre>
          <div className="css-lay-oflow-two-value-container mb-4">
            <div className="css-lay-oflow-two-value-content"> 
            1. I love these css tutorials. I love these css tutorials.<br /> 
              2. I love these css tutorials. I love these css tutorials.<br />
              3. I love these css tutorials. I love these css tutorials.<br />
              4. I love these css tutorials. I love these css tutorials.<br />
              5. I love these css tutorials. I love these css tutorials.<br />
              6. I love these css tutorials. I love these css tutorials.<br /> 
              7. I love these css tutorials. I love these css tutorials.
            </div>
          </div>


		      <div class="container mt-4 mb-4 d-flex justify-content-between">
            <Link class="btn btn-primary" to="/css-tutorials/css-layout-positioning"><Adl /> Previous</Link>
            <Link class="btn btn-primary" to="/css-tutorials/css-layout-float-and-clear">Next <Adr /></Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Css_layout_overflow; 