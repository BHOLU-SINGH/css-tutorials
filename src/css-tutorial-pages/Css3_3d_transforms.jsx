import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Adl from "../Adl";
import Adr from "../Adr";


const Css3_3d_transforms = () => {
const syntax_1 = `  <angle>`
const syntax_2 = `  .rotated{
   transform: rotateX(140deg);
  }
  div{
   color: white;
   background: black;
   width: 150px;
   height: 150px;
  }
`
const syntax_3 = `  .rotated{
   transform: rotateY(140deg);
  }
  div{
   color: white;
   background: black;
   width: 150px;
   height: 150px;
  }
`
const syntax_4 = `  .rotated{
   transform: rotateZ(90deg);
  }
  div{
   color: white;
   background: black;
   width: 150px;
   height: 150px;
  }
`
const syntax_5 = `  div{
   width: 100px;
   height: 100px;
   background: #173459;
   color: #f8f9f9;
   border: 5px solid #903C56;
   transition-duration: 2s;
  }
  #rotateX:hover{
   transform: rotateX(140deg);
  }
  #rotateY:hover{
   transform: rotateY(140deg);
  }
  #rotateZ:hover{
   transform: rotateZ(90deg);
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
          <h3>CSS3 3D Transforms</h3>
          <p>A CSS transformation is an effect that changes an element's size, shape and position.</p>
          <p>CSS supports 3D transfroms.</p>
          <h3>CSS 3D Transforms Methods</h3>
          <p>In this chapter we will learn about the following CSS methods or functions:</p>
          <ul>
            <li><b>rotateX</b></li>
            <li><b>rotateY</b></li>
            <li><b>rotateZ</b></li>
          </ul>
          <h3>The rotateX() Method</h3>
          <p>The <b>rotateX()</b> CSS function defines a transformation that rotates an element around the abscissa (x-axis or horizontal axis) without deforming it.</p>
          <p>The value should be an <b>{syntax_1}</b></p>
          <pre className='mb-1'>
            <code>{syntax_2}</code>
          </pre>
          <div className="css3-3d-tra-div1 normal"> I am normal!</div>
          <div className="css3-3d-tra-div1 rotated"> I am rotated! </div>

          <h3>The rotateY() Method</h3>
          <p>The <b>rotateY()</b> CSS function defines a transformation that rotates an element around the ordinate (y-axis or vertical axis) without deforming it.</p>
          <p>The value should be an <b>{syntax_1}</b>.</p>
          <pre className='mb-1'>
            <code>{syntax_3}</code>
          </pre>
          <div className="css3-3d-tra-div1 normal"> I am normal!</div>
          <div className="css3-3d-tra-div1 rotated-y"> I am rotated! </div>

          <h3>The rotateZ() Method</h3>
          <p>The <b>rotateZ()</b> CSS function defines a transformation that rotates an element around the z-axis without deforming it.</p>
          <p>The value should be an <b>{syntax_1}</b>.</p>
          <pre className='mb-1'>
            <code>{syntax_4}</code>
          </pre>
          <div className="css3-3d-tra-div1 normal"> I am normal!</div>
          <div className="css3-3d-tra-div1 rotated-z"> I am rotated! </div>

          <h3>Using 3D Transforms with Hover</h3>
          <p>Here is an example of using the <b>:hover</b> pseudo-class to trigger 3D transforms.</p>
          <pre className='mb-1'>
            <code>{syntax_5}</code>
          </pre>
          <p>Tap the elements to trigger the effects.</p>
          <div className="css3-3d-tra-div2 rotate-x"> RotateX!</div>
          <div className="css3-3d-tra-div2 rotate-y"> RotateY me!</div>
          <div className="css3-3d-tra-div2 rotate-z"> RotateZ</div>



		      <div className="container mt-1 mb-4 d-flex justify-content-between">
            <Link className="btn btn-primary" to="/css-tutorials/css3-2d-transforms"><Adl /> Previous</Link>
            <Link className="btn btn-primary" to="/css-tutorials/css3-transitions">Next <Adr /></Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Css3_3d_transforms;