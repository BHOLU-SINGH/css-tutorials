import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Adl from "../Adl";
import Adr from "../Adr";


const Css_layout_width_and_max_width = () => {
const syntax_1= `
  div{
   width: 500px;
   background: gold;
  }
`
const syntax_2= `<div>`
const syntax_3= `
  div{
   width: 600px;
   background: gold;
  }
`
const syntax_4= `
  div{
   max-width: 600px;
   background: gold;
  }
`
const syntax_5= `
  .div1{
   margin: 0 auto; 
   /* same as margin-top: 0; margin-bottom: 0; margin-left: auto; margin-right: auto; */
   width: 270px;
   height: 300px;
   background: pink;  
  }
  .div2{
   margin: 0 auto; 
   /* same as margin-top: 0; margin-bottom: 0; margin-left: auto; margin-right: auto; */
   width: 600px;
   height: 300px;
   background: green;  
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
          <h3>CSS Layout - width and max-width Properties</h3>
    		  <p>We can prevent a block-level element to take up the full width available (stretching to the left or right of its container).</p>
          <p>To do that, we have to set its width (rotate your device to landscape to better understand):</p>
          <pre className='mb-1'>
            <code>{syntax_1}</code>
          </pre>
          <div className='mb-4' style={{width: "500px", background: "gold"}}>CSS Tutorials</div>

          <p>If you've rotated your device to landscape (we're doing this to have a bigger browser window) you can see that the <b>{syntax_2}</b> did not take the full width available.</p>
          <p>It only took a width of <b>500px</b> as specified in the <b>width</b> CSS property.</p>
          <p>The problem with using the <b>width</b> property occurs when its value is larger than the width of the container.</p>
          <p>For instance, a <b>{syntax_2}</b> element has a <b>width</b> of <b>600px</b> but the browser window only has <b>480px</b> or smaller:</p>
          <pre className='mb-1'>
            <code>{syntax_3}</code>
          </pre>
          <div style={{width: "600px", background: "gold"}}>CSS Tutorials</div>
          <p className='mt-2 mb-5'>Have you noticed that the window became horizontally scrollable? That is annoying!</p>

          <h3>CSS max-width Property</h3>
          <p>Using the <b>max-width</b> CSS property helps the browser to better render elements on smaller devices:</p>
          <pre className='mb-1'>
            <code>{syntax_4}</code>
          </pre>
          <div className='mb-5' style={{maxWidth: "600px", background: "gold"}}>CSS Tutorials</div>

          <p>If you've rotated your device to landscape then back to portrait in that demo, you must have noticed the browser no longer renders the <b>{syntax_2}</b> element with <b>600px</b> on smaller screens (windows).</p>
          <p>But still renders the <b>{syntax_2}</b> element with <b>600px</b> width when there is space available.</p>
          <h3>Horizontally Centering With Margin Auto</h3>
          <p>We can horizontally center an element by setting its left and right margins to <b>auto</b>.</p>
          <pre className='mb-1'>
            <code>{syntax_5}</code>
          </pre>
          <div style={{margin: "0 auto", width: "270px", height: "300px", background: "pink"}}>CSS Tutorials</div>
          <div className='mb-4' style={{margin: "0 auto", width: "600px", height: "300px", background: "green"}}>CSS Tutorials</div>
          <p>Setting the left and right margins to <b>auto</b> makes the remaining space be split equally to both sides.</p>


		      <div class="container mt-4 mb-4 d-flex justify-content-between">
            <Link class="btn btn-primary" to="/css-tutorials/css-layout-the-display-property"><Adl /> Previous</Link>
            <Link class="btn btn-primary" to="/css-tutorials/css-layout-positioning">Next <Adr /></Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Css_layout_width_and_max_width; 