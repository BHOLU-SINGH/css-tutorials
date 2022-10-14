import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Adl from "../Adl";
import Adr from "../Adr";


const Css_layout_inline_block = () => {
const syntax_1= `
  span.inline-element{
   display: inline;  /* span's default */
   width: 35px;
   height: 35px;
   background: lightgrey;
   color: black;
   border: 1px solid red;
  } 
  span.inline-block-element{
   display: inline-block;
   width: 100px;
   height: 100px;
   background: lightgrey;
   color: black;
   border: 1px solid red;
  }
`
const syntax_2= `
  span.inline-element{
   display: inline;  /* span's default */
   margin: 10px;
   padding: 10px;
   background: lightgrey;
   color: black;
   border: 1px solid red;
  }
  span.inline-block-element{
   display: inline-block;
   margin: 10px;
   padding: 10px;
   background: lightgrey;
   color: black;
   border: 1px solid red;
  }
`
const syntax_3= `
  span.inline-element{
   display: block;
   background: lightgrey;
   color: black;
   border: 1px solid red;
  }
  span.inline-block-element{
   display: inline-block;
   background: lightgrey;
   color: black;
   border: 1px solid red;
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
          <h3>CSS Layout - inline-block</h3>
          <p>In this lesson we'll study about the inline-block value of the display CSS property.</p>
          <h3>Inline vs. Inline-Block</h3>
          <p>Unlike the inline value the inline-block value allows us to set an element's width and height.</p>
          <pre className='mb-1'>
            <code>{syntax_1}</code>
          </pre>
          <h3>I love these css tutorials.</h3><p>Lorem ipsum dolor sit amet. <span class="css-lay-in-block-inline-element">inline</span> <span class="css-lay-in-block-inline-element">element</span>. Ut enim ad minim veniam.</p>
          <h3>I love these css tutorials.</h3>
          <p>Lorem ipsum dolor sit amet. <span class="css-lay-in-block-inline-block-element">inline</span> <span class="css-lay-in-block-inline-block-element">block element</span>. Ut enim ad minim veniam.</p>
          <p>Also, the <b>inline-block</b> value respects the element's top and bottom padding/margin.</p>
          <pre className='mb-1'>
            <code>{syntax_2}</code>
          </pre>
          <h3>I love free css tutorials.</h3>
          <p>Lorem ipsum dolor sit amet. <span class="css-lay-in-blobk-inline-element2">inline</span> <span class="css-lay-in-blobk-inline-element2">element</span>. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <h3>I love free css tutorials.</h3>
          <p className='mb-5'>Lorem ipsum dolor sit amet. <span class="css-lay-in-blobk-inline-block-element2">inline</span> <span class="css-lay-in-blobk-inline-block-element2">block element</span>. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <h3>Block vs. Inline-Block</h3>
          <p>The main difference between these two is that the <b>block</b> value creates a line-break after the element while the <b>inline-block</b> does not.</p>
          <p>It simply means elements after a block element will start on a new line while elements after an inline-block element will not.</p>
          <pre className='mb-1'>
            <code>{syntax_3}</code>
          </pre>
          <h3>I love free css tutorials.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <span class="css-lay-in-blobk-inline-element3">block</span> <span class="css-lay-in-blobk-inline-element3">element</span>. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <h3>I love free css tutorials.</h3>
          <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <span class="css-lay-in-blobk-inline-block-element3">inline</span> <span class="css-lay-in-blobk-inline-block-element3">block element</span>. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

		      <div class="container mt-4 mb-4 d-flex justify-content-between">
            <Link class="btn btn-primary" to="/css-tutorials/css-layout-float-and-clear"><Adl /> Previous</Link>
            <Link class="btn btn-primary" to="/css-tutorials/css-layout-horizontal-and-vertical-align">Next <Adr /></Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Css_layout_inline_block; 