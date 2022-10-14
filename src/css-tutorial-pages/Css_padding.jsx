import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Adl from "../Adl";
import Adr from "../Adr";

const Css_padding = () => {
const syntax_1 = `<length>`
const syntax_2 = `<percentage>`
const syntax_3 = `
  div{
    padding-top: 30px;
    padding-right: 50px;
    padding-bottom: 70px;
    padding-left: 90px;
    background: lightgrey;
    border: 1px solid red;
  }
`
const syntax_4 = `
  /* one-value */
  #element1{
    padding: 20px;
  }
  /* two-value */
  #element2{
    padding: 10px 20px;
  }
  /* three-value */
  #element3{
    padding: 20px 10px 20px;
  }
  /* four-value */
  #element4{
    padding: 10px 20px 30px 40px;
  }
`
const syntax_5 = `
  div{
    width: 200px;
    padding: 10px;
    /* the actual rendered width of the element is now 220px */
    background: blue;
    height: 100px;
  }
`
const syntax_6 = `
  div{
    width: 200px;
    padding: 10px;
    box-sizing: border-box;
    /* the actual rendered width of the element is still 200px */
    background: blue;
    height: 100px;
  }
`
const syntax_7 = `
  div{
    width: 200px;
    padding: 10px;
    /* the actual rendered width of the element is now 220px */
    background: blue;
    height: 100px;
  }
`
const syntax_8 = `
  div{
    width: 200px;
    padding: 10px;
    box-sizing: border-box;
    /* the actual rendered width of the element is still 200px */
    background: blue;
    height: 100px;
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
          <h3>CSS Padding</h3>
          <p>CSS Padding creates space within an element.</p>
          <p>It clears an area around the inside of an element.</p>
          <h3>CSS Padding - Individual Sides</h3>
          <p>The following properties set the length of the padding on each side.</p>
          <ul>
            <li><b>padding-top</b>: sets the padding area on top of an element</li>
            <li><b>padding-right</b>: sets the padding area on the right side of an element</li>
            <li><b>padding-bottom</b>: sets the padding area on the bottom of an element</li>
            <li><b>padding-left</b>: sets the padding area on the left side of an element</li>
          </ul>
          <h5>Valid Values:</h5>
          <ul>
            <li><b>{syntax_1}</b></li>
            <li><b>{syntax_2}</b></li>
          </ul>
          <h5>Example:</h5>
          <p>Here is an example of different padding lengths on each side.</p>
          <pre>
            <code>{syntax_3}</code>
          </pre>
          <h3>CSS Padding - Shorthand Property</h3>
          <p>The <b>padding</b> CSS property is a shorthand for the following properties:</p>
          <ul>
           <li><b>padding-top</b></li>
           <li><b>padding-right</b></li>
           <li><b>padding-bottom</b></li>
           <li><b>padding-left</b></li>
          </ul>
          <p>The padding CSS property can have one, two, three or four values.</p>
          <ul>
           <li>When <b>one value</b> is specified, it applies the same padding to <b>all four sides</b>.</li>
           <li>When <b>two values</b> are specified, the first value applies to the <b>top and bottom</b>, the second to the <b>left and right</b>.</li>
           <li>When <b>three values</b> are specified, the first value applies to the <b>top</b>, the second to the <b>left and right</b>, the third to the <b>bottom</b>.</li>
           <li>When <b>four values</b> are specified, the paddings apply to the <b>top</b>, <b>right</b>, <b>bottom</b>, and <b>left</b> in that order (clockwise) respectively.</li>
          </ul>
          <h5>Example:</h5>
          <div class="syntax"></div>
          <pre>
            <code>{syntax_4}</code>
          </pre>
          <h3>Padding and Width</h3>
          <p>The CSS <b>width</b> property only specifies the width of an elements content area. It does not include padding, borders and margins.</p>
          <p>Therefore if an element has a specified width and padding they will be added together.</p>
          <h5>Example:</h5>
          <pre>
            <code>{syntax_5}</code>
          </pre>
          <p>To keep the width at <b>200px</b> we need to set the <b>box-sizing</b> property to <b>border-box</b>.</p>
          <p>Increasing the padding will now decrease the content space inside the element. Example:</p>
          <pre>
            <code>{syntax_6}</code>
          </pre>
          <h3>Padding and Height</h3>
          <p>The CSS <b>height</b> property only specifies the height of an elements content area. It does not include padding, borders and margins.</p>
          <p>Therefore if an element has a specified height and padding they will be added together.</p>
          <h5>Example:</h5>
          <pre>
            <code>{syntax_7}</code>
          </pre>
          <p>To keep the height at 200px we need to set the <b>box-sizing</b> propertyto <b>border-box</b>.</p>
          <p>Increasing the padding will now decrease the content space inside the element. Example:</p>
          <pre>
            <code>{syntax_8}</code>
          </pre>
               

				  <div class="container mt-4 mb-4 d-flex justify-content-between">
            <Link class="btn btn-primary" to="/css-tutorials/css-margins"><Adl /> Previous</Link>
            <Link class="btn btn-primary" to="/css-tutorials/css-width-and-height">Next <Adr /></Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Css_padding;