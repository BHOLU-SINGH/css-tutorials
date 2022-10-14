import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Adl from "../Adl";
import Adr from "../Adr";


const Css3_rounded_corners = () => {
const syntax_1 = `<length>`
const syntax_2 = `<percentage>`
const syntax_3 = `
  div{
   border-radius: 10px; 
   width: 200px; 
   height: 200px; 
   padding: 10px; 
   color: #f8f9f9; 
   background: #173459;
  }
`
const syntax_4 = `
  div{
   border-top-left-radius: 10px; 
   border-top-right-radius: 20px; 
   border-bottom-left-radius: 30px; 
   border-bottom-right-radius: 40px;
   width: 200px; 
   height: 200px; 
   padding: 30px; 
   color: #f8f9f9; 
   background: #173459;
  }
`
const syntax_5 = `
  div{
   /* all four corners */
   border-radius: 10px; 
   border: 2px solid #78969D;
   width: 240px; 
   height: 200px; 
   padding: 30px; 
   color: #f8f9f9; 
   background: #173459;
  }
`
const syntax_6 = `
  div{
   /* top-left and bottom-right | top-right and bottom-left */
   border-radius: 10px 20px; 
   border: 2px solid #78969D;
   width: 240px; 
   height: 200px; 
   padding: 30px; 
   color: #f8f9f9; 
   background: #173459;
  }
`
const syntax_7 = `
  div{
   /* top-left | top-right and bottom-left | bottom-right */
   border-radius: 10px 20px 10px; 
   border: 2px solid #78969D;
   width: 240px; 
   height: 200px; 
   padding: 30px; 
   color: #f8f9f9; 
   background: #173459;
  }
`
const syntax_8 = `
  div{
   /* top-left | top-right | bottom-right | bottom-left */
   border-radius: 10px 20px 30px 40px; 
   border: 2px solid #78969D;
   width: 240px; 
   height: 200px; 
   padding: 30px; 
   color: #f8f9f9; 
   background: #173459;
  }
`
const syntax_9 = `
  div{
   border-radius: 30px/60%; 
   border: 2px solid #78969D;
   width: 240px; 
   height: 200px; 
   padding: 30px; 
   color: #f8f9f9; 
   background: #173459;
  }
`
const syntax_10 = `
  img{
   border-radius: 50%;
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
          <h3>CSS3 Rounded Corners</h3>
          <p>In CSS3, we can make the corners of the element rounded.</p>
          <p>The border-radius CSS property rounds the corners of an element's outer border edge.</p>
          <h5>Valid Values:</h5>
          <ul>
            <li><b>{syntax_1}</b></li><li><b>{syntax_2}</b></li>
          </ul>
          <h5>Example:</h5>
          <pre className='mb-1'>
            <code>{syntax_3}</code>
          </pre>
          <div className="rounded-corner css-round-common1 mb-5">I love these CSS tutorials.</div>

          <p><b>Note!</b> The <b>border-radius</b> CSS property does not need the <b>border</b> properties to work.</p>
          <h3>CSS3 Individual Rounded Corners</h3>
          <p>In our example above all the corners became rounded.</p>
          <p>We can individually set the border radius of an element's corners using the following CSS properties:</p>
          <ul>
            <li><b>border-top-left-radius</b></li>
            <li><b>border-top-right-radius</b></li>
            <li><b>border-bottom-right-radius</b></li>
            <li><b>border-bottom-left-radius</b></li>
          </ul>
          <pre className='mb-1'>
            <code>{syntax_4}</code>
          </pre>
          <div className="css-round-individual-div css-round-common1 mb-5">I love these CSS tutorials.</div>
          <h3>CSS3 Border Radius - Shorthand Property</h3>
          <p>The <b>border-radius</b> CS property is actually a shorthand for the following properties.</p>
          <ul>
            <li><b>border-top-left-radius</b></li>
            <li><b>border-top-right-radius</b></li>
            <li><b>border-bottom-right-radius</b></li>
            <li><b>border-bottom-left-radius</b></li>
          </ul>
          <p>The <b>border-radius</b> property could be specified with one, two, three or four values.</p>
          <h3>One Value</h3>
          <p>When <b>one value</b> is specified, the value applies to <b>all four corners</b>.</p>
          <pre className='mb-1'>
            <code>{syntax_5}</code>
          </pre>
          <div className="css-round-one-value-div css-round-common2 mb-5">I love these CSS tutorials.</div>
          <h3>Two Values</h3>
          <p>When <b>two values</b> are specified, the first value applies to the <b>top-left and bottom-right corners</b>, the second to the <b>top-right and bottom-left corners</b>.</p>
          <pre className='mb-1'>
            <code>{syntax_6}</code>
          </pre>
          <div className="css-round-two-values-div css-round-common2 mb-5">I love these CSS tutorials.</div>
          <h3>Three Values</h3>
          <p>When <b>three values</b> are specified, the first value applies to the <b>top-left corner</b>, the second to the <b>top-right and bottom-left corners</b>, the third to the <b>bottom-right corner.</b></p>
          <pre className='mb-1'>
            <code>{syntax_7}</code>
          </pre>
          <div className="css-round-three-values-div css-round-common2 mb-5">I love these CSS tutorials.</div>
          <h3>Four Values</h3>
          <p>When <b>four values</b> are specified, the values apply to the <b>top-left</b>, <b>top-right</b>, <b>bottom-right</b>, and <b>bottom-left</b> corners in that order (clockwise) respectively.</p>
          <pre className='mb-1'>
            <code>{syntax_8}</code>
          </pre>
          <div className="css-round-four-values-div css-round-common2 mb-5">I love these CSS tutorials.</div>
          <h3>CSS3 Elliptical Corners</h3>
          <p>We can use the <b>border-radius</b> CSS property to make elliptical corners just follow the value by a <b>"/"</b> sign and one, two, three or four <b>{syntax_1}</b> or <b>{syntax_2}</b> values.</p>
          <pre className='mb-1'>
            <code>{syntax_9}</code>
          </pre>
          <div className="css-round-elliptical-div css-round-common2 mb-5">I love these CSS tutorials.</div>
          <h3>CSS3 Circle Element</h3>
          <p>To make an element shape like a circle simply set the element's <b>border-radius</b> CSS 50%:</p>
          <pre className='mb-1'>
            <code>{syntax_10}</code>
          </pre>
          <img className='mb-4' src="../images/img.jpg" style={{width: "200px", height: "200px", borderRadius: "50%"}} alt="image loading error"></img>


		      <div className="container mt-4 mb-4 d-flex justify-content-between">
            <Link className="btn btn-primary" to="/css-tutorials/css3-introduction"><Adl /> Previous</Link>
            <Link className="btn btn-primary" to="/css-tutorials/css3-border-images">Next <Adr /></Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Css3_rounded_corners;