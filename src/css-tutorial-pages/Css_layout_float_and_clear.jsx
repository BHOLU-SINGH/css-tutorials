import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Adl from "../Adl";
import Adr from "../Adr";


const Css_layout_float_and_clear = () => {
const syntax_1= `
  img{
   float: none;
  }
`
const syntax_2= `
  img{
   float: left;
  }
`
const syntax_3= `
  img{
   float: right;
  }
`
const syntax_4= `
  .div1{
   float: left;
   width: 30%;
   border: 1px dashed red;
   margin: 5px;
 }
  .div2{
   width: 100%;
   height: 100px;
   border: 1px dashed black;
  }
  .div3{
   float: left;
   width: 30%;
   border: 1px dashed red;
   margin: 5px;
  }
  .div4{
   clear: left;
   width: 100%;
   height: 100px;
   border: 1px dashed black;
  }
`
const syntax_5= `
  .clearfix::after{
   content: '';
   display: block;
   clear: both;
  }
`
const syntax_6= `
  .clearfix::after{
   content: '';
   display: block;
   clear: both;
  }
  img{
   float: right;
  }
  div{
   border: 3px dotted #903C56;
  }
`
const syntax_7= `
  *{
   box-sizing: border-box;
  }
  html, body{
   margin: 0;
   padding: 0;
  }
  .container::after{
   content: '';
   display: block;
   clear: both;
  }
  .box{
   width: 33.33%  /* 100% / 3 = 33.33% */
   padding-top: 70px;
   padding-bottom: 70px;
   text-align: center;
   float: left;
   border-right: 1px solid black;
   background: lightgrey;
  }
`
const syntax_8 = `
  body{
   margin: 0;
   padding: 0;
  }
`
const syntax_9 = `
  *{
   box-sizing: border-box;
  }
  html, body{
   margin: 0;
   padding: 0;
  }
  .container{
   content: '';
   display: block;
   clear: both;
  }
  .container > div{
   padding-top: 70px;
   padding-bottom: 70px;
   text-align: center;
   float: left;
   border-right: 1px solid black;
   background: lightgrey;
  }
  .box1{
   width: 25%;
  }
  .box2{
   width: 75%;
  }
`
const syntax_10 = `
  *{
   box-sizing: border-box;
  }
  html, body{
   margin: 0;
   padding: 0;
 }
  .container{
   content: '';
   display: block;
  clear: both;
  }
  .container > div{
   height: 550px;  /* sets a fixed height for the boxes */
   padding: 15px;
   float: left;
   border-right: 1px solid black;
   background: lightgrey;
  }
  .box1{
   width: 25%;
  }
  .box2{
   width: 75%;
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
          <h3>CSS Layout - The float and clear Properties</h3>
          <p>The <b>float</b> CSS property places an element on the left or right side of its container (containing block).</p>
          <p>It allows inline elements to wrap around it.</p>
          <h5>Valid Values:</h5>
          <ul>
            <li><b>none</b>: default; the element does not float</li>
            <li><b>left</b>: the element floats on the left side of its container</li>
            <li><b>right</b>: the element floats on the left side of its container</li>
          </ul>
          <p>Here is an example of an element that <b>does not float</b>:</p>
          <pre>
            <code>{syntax_1}</code>
          </pre>
          <p>Here is an example of an element that floats on the <b>left side</b>:</p>
          <pre>
            <code>{syntax_2}</code>
          </pre>
          <p>Here is an example of an element that floats on the <b>right side</b>:</p>
          <pre>
            <code>{syntax_3}</code>
          </pre>
          <h3>CSS clear Property</h3>
          <p>The <b>clear</b> CSS property sets whether an element can have floating elements around it.</p>
          <p>It can be applied to floating and non-floating elements.</p>
          <h5>Valid Values:</h5>
          <ul>
            <li><b>none</b>: default; elements are allowed to float on both sides</li>
            <li><b>left</b>: elements are not allowed to float on the left side</li>
            <li><b>right</b>: elements are not allowed to float on the right side</li>
            <li><b>both</b>: elements are not allowed to float on both sides</li>
          </ul>
          <p>An element will fit horizontally to the space next to an element which is floated.</p>
          <p>Unless we set the <b>clear</b> property to the same side as the <b>float</b>. For example if an element is floated left and we don't want the next element to take up the space next to it then we can set the <b>clear</b> property to left as <b>well</b>.</p>
          <p>If we do this, the cleared element will be rendered below the floated element instead of taking the horizontal space around the floating element.</p>
          <h5>Example:</h5>
          <pre className='mb-1'>
            <code>{syntax_4}</code>
          </pre>
          <h3> Without Clear </h3>
          <div className="float-and-clear-without-clear mb-2">
            <div className="div1"> I love these css tutorials. </div>
            <div className="div2"> Lorem ipsum dolor sit amet. Hello World! I love Codeliber! Lorem ipsum dolor sit amet. </div>
          </div>
          <h3> With Clear </h3>
          <div className="float-and-clear-with-clear mb-5">
            <div className="div1"> I love these css tutorials. </div>
            <div className="div2"> This div do not allow elements to float on its left side. Lorem ipsum dolor sit amet. </div>
          </div>

          <h3>Problem with CSS Floats</h3>
          <p>A floated element is removed from the normal flow of the page.</p>
          <p>If a floating element is taller than its container it will overflow outside the container. Because the container will not contain the height of a floated element.</p>
          <p>To make a container be able to resize so that it contains the floating elements inside it we need to self-clear its children.</p>
          <p>To do that we need to use the clearfix hack:</p>
          <pre>
            <code>{syntax_5}</code>
          </pre>
          <h5>Example:</h5>
          <pre className='mb-1'>
            <code>{syntax_6}</code>
          </pre>
          <h3> Without Clearfix </h3>
          <div class="float-and-clear-clearfix">
            I love free css tutorials. These tutorials are easy to understand.
          </div>
          <img class="float-and-clear-clearfix-img" src="../images/img.jpg" />
          <h3 className='mt-4'> With Clearfix </h3>
          <div class="float-and-clear-clearfix float-and-clear-with-clearfix mb-5">
            <img src="../images/img.jpg" />I love free css tutorials. These tutorials are easy to understand.
          </div>
          <h3>Grid Layout using CSS Floats</h3>
          <p>With CSS floats we can create a grid of boxes with equal sizes. This approach is ideal for organizing web contents.</p>
          <p>To achieve it, we simply need a container with the clearfix hack that will contain the boxes.</p>
          <p>We also need to set all elements' <b>box-sizing</b> property to <b>border-box</b> so that the padding and borders do not enlarge the total width and height of the boxes. If we don't do this the padding and border will not stay inside the box instead its size will be added and produce unexpected results.</p>
          <p>Then we need to divide <b>100%</b> to the number of boxes we need.</p>
          <p>For example, to create a two-column layout then simply divide <b>100%</b> to two: <b>100% / 2 = 50%</b>.</p>
          <pre className='mb-1'>
            <code>{syntax_7}</code>
          </pre>
          <div class="float-and-clear-grid-layout mb-5">
            <div class="div">I love these css tutorials.</div>
            <div class="div">I love these css tutorials.</div>
            <div class="div">I love these css tutorials.</div>
          </div>
          <p>As you may notice, we also removed the default padding and margins of the body using the following code:</p>
          <pre>
            <code>{syntax_8}</code>
          </pre>
          <p>This is a good practice in CSS layouting as it maximizes the space and appeals more to the eyes.</p>
          <p>Moreover, it is also useful to create grid layout with unequal size of boxes.</p>
          <p>The example below shows a grid of boxes where the first box is <b>25%</b> wide and the second is 75%.</p>
          <pre className='mb-1'>
            <code>{syntax_9}</code>
          </pre>
          <div className="float-and-clear-grid-lay-div-one">
            <div className="div1">25%</div>
            <div className="div2">75%</div>
          </div>
          <p><b>Note!</b> If one column is larger or has more content, it can grow bigger than the other. To prevent this from happening we could simply define a fixed height for the boxes.</p>
          <pre className='mb-1'>
            <code>{syntax_10}</code>
          </pre>
          <div className="float-and-clear-grid-lay-div-two">
            <div className="div1">25%</div>
            <div className="div2">75%<br/>Even though this box/column has more content than the first one they are still equal <br/>in size because of the fixed height set.</div>
          </div>


		      <div className="container mt-4 mb-4 d-flex justify-content-between">
            <Link className="btn btn-primary" to="/css-tutorials/css-layout-overflow"><Adl /> Previous</Link>
            <Link className="btn btn-primary" to="/css-tutorials/css-layout-inline-block">Next <Adr /></Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Css_layout_float_and_clear; 