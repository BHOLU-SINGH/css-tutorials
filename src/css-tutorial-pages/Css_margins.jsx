import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Adl from "../Adl";
import Adr from "../Adr";

const Css_margins = () => {
const syntax_1 = `<length>`
const syntax_2 = `<percentage>`
const syntax_3 = `
  div{
    margin-top: 30px;
    margin-left: 90px;
    background: lightgrey;
    border: 1px solid red;
  }
`
const syntax_4 = `
  /* one-value */
  #div1{
    margin: 20px;
  }
  /* two-value */
  #div2{
    margin: 40px 20px;
  }
  /* three-value */
  #div3{
    margin: 20px 40px 20px;
  }
  /* four-value */
  #div4{
    margin: 40px 20px 40px 20px;
  }
`
const syntax_5 = `
  div{
    margin: 0 auto;  
    /* same as margin-top: 0; margin-bottom: 0; margin-left: auto; margin-right:  auto; */
    width: 200px;
    height: 200px;
    background: lightgrey;
  }
`
const syntax_6 = `
  div#parent{
    margin-left: 50px;
    border: 1px solid green;
  }
  p#children{
    margin-left: inherit;
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
               <h3>CSS Margins</h3>
               <p>CSS Margins create space around or outside an element.</p>
               <h3>CSS Margins - Individual Sides</h3>
               <p>The following properties set the length of the margin on each side.</p>
               <ul>
                  <li><b>margin-top</b>: sets the margin area on top of an element</li>
                  <li><b>margin-right</b>: sets the margin area on the right side of an element</li>
                  <li><b>margin-bottom</b>: sets the margin area on the bottom of an element</li>
                  <li><b>margin-left</b>: sets the margin area on the left side of an element</li>
               </ul>
               <h5>Valid Values:</h5>
               <ul>
                  <li><b>{syntax_1}</b></li>
                  <li><b>{syntax_2}</b></li>
                  <li><b>auto</b>: selects a suitable margin to use. For example, in certain cases this value can be used to center an element.</li>
               </ul>
               <h5>Example:</h5>
               <p>Here is an example of using margins</p>
               <pre>
                  <code>{syntax_3}</code>
               </pre>
               <p><b>The margin surrounds a CSS box, and pushes up against other CSS boxes in the layout</b>. You'll learn about CSS box models in the next few lessons.</p>
               <h3>CSS Margin - Shorthand Property</h3>
               <p>The <b>margin</b> CSS property is a shorthand for the following properties:</p>
               <ul>
                  <li><b>margin-top</b></li>
                  <li><b>margin-right</b></li>
                  <li><b>margin-bottom</b></li>
                  <li><b>margin-left</b></li>
               </ul>
               <p>The <b>margin</b> CSS property can have one, two, three or four values.</p>
               <ul>
                  <li>When <b>one value</b> is specified, it applies the same margin to <b>all four sides</b>.</li>
                  <li>When <b>two values</b> are specified, the first value applies to the <b>top and bottom</b>, the second to the <b>left and right</b>.</li>
                  <li>When <b>three values</b> are specified, the first value applies to the <b>top</b>, the second to the <b>left and right</b>, the third to the <b>bottom</b>.</li>
                  <li>When <b>four values</b> are specified, the margins apply to the <b>top</b>, <b>right</b>, <b>bottom</b>, and <b>left</b> in that order (clockwise) respectively.</li>
               </ul>
               <h5>Example:</h5>
               <pre>
                  <code>{syntax_4}</code>
               </pre>
               <h3>Horizontally Centering an Element</h3>
               <p>We can center an element by setting the left and right margins to auto.</p>
               <pre>
                  <code>{syntax_5}</code>
               </pre>
               <h3>The inherit Value</h3>
               <p>Since the inherit value is a global value it can work on almost all of the CSS properties.</p>
               <p>Below is an example of a child element inheriting margin from its parent element.</p>
               <pre>
                  <code>{syntax_6}</code>
               </pre>

               

				   <div class="container mt-4 mb-4 d-flex justify-content-between">
                    <Link class="btn btn-primary" to="/css-tutorials/css-borders"><Adl /> Previous</Link>
                    <Link class="btn btn-primary" to="/css-tutorials/css-padding">Next <Adr /></Link>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Css_margins;