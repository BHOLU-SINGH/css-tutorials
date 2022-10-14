import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Adl from "../Adl";
import Adr from "../Adr";


const Css3_2d_transforms = () => {
const syntax_1 = `  div{
   width: 200px;
   height: 200px;
   background: lightgrey;
  }
  .moved{
   transform: translate(30px, 40px);
   background: #173459;
  }
`
const syntax_2 = `  div{
   width: 200px;
   height: 200px;
   background: lightgrey;
  }
  .moved{
   transform: translateX(30px);
   background: #173459;
  }
`
const syntax_3 = `  div{
   width: 200px;
   height: 200px;
   background: lightgrey;
  }
  .moved{
   transform: translateY(30px);
   background: #173459;
  }
`
const syntax_4 = `  <angle>`
const syntax_5 = `  .clockwise{
   transform: rotate(45deg)
   background: #173459;
  }
  .counter-clockwise{
   transform: rotate(-90deg);
   background: #903C56;
  }
  div{
   width: 200px;
   height: 200px;
   background: lightgrey;
   margin: 40px;
   border-rop: 10px solid green;
  }
`
const syntax_6 = `  <number>`
const syntax_7 = `  div{
   color: #f8f9f9;
   background: #173459;
   font-size: 20px;
   width: 200px;
   height: 200px;
  }
  .scaled{
   transform: scale(.5);
  } 
  .scaled-2{
   transform: scale(1.4);
  }
`
const syntax_8 = `  div{
   color: #f8f9f9;
   background: #173459;
   font-size: 20px;
   width: 200px;
   height: 200px;
  }
  .scaled{
   transform: scaleX(.5); 
  }

`
const syntax_9 = `  div{
   color: #f8f9f9;
   background: #173459;
   font-size: 20px;
   width: 200px;
   height: 200px;
  }
  .scaled{
   transform: scaleY(.5);
  }
`
const syntax_10 = `  <angles>`
const syntax_11 = `  div{
   width: 150px;
   height: 150px;
   margin: 0 auto;
   background: #173459;
  }
  .skewed{
   transform: skew(30deg, 30deg);
   color: #f8f9f9;
  }
  .skewed-2{
   transform: skew(-30deg, -30deg);
   color: #f8f9f9;
  }
`
const syntax_12 = `  div{
   width: 150px;
   height: 150px;
   margin: 0 auto;
   background: #173459;
  }
  .skewed{
   transform: skewX(45deg);
   color: #f8f9f9;
  }
  .skewed-2{
   transform: skewX(-45deg);
   color: #f8f9f9;
  }
`
const syntax_13 = `  div{
   width: 150px;
   height: 150px;
   margin: 0 auto;
   background: #173459;
  }
  .skewed{
   transform: skewY(45deg);
   color: #f8f9f9;
  }
  .skewed-2{
   transform: skewY(-45deg);
   color: #f8f9f9;
  }

`
const syntax_14 = `  div{
   width: 100px;
   height: 100px;
   color: #f8f9f9;
   background-color: #173459;
  }
  .transformed{
   transform: matrix(1, 2, -1, 1, 80, 80);
  }
`
const syntax_15 = `  div{
   width: 100px; 
   height: 100px; 
   background: #173459;
   color: #f8f9f9; 
   border: 5px solid #903C56; 
   transition-duration: 2s;
  }
  #translate:hover{
   transform: translate(30px, 40px);
  }
  #rotate:hover{ 
   transform: rotate(-90deg); 
  }
  #scale:hover{ 
   transform: scale(.5); 
  } 
  #skew:hover{ 
   transform: skew(30deg, 30deg); 
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
          <h3>CSS3 2D Transforms</h3>
          <p>The <b>transform</b> CSS property allows us to translate, rotate, scale and skew elements.</p>
          <p>A CSS transformation is an effect that changes an element's size, and position.</p>
          <p>CSS supports 2D transfroms.</p>
          <h3>CSS 2D Transforms Methods</h3>
          <p>In this chapter you will learn about the following CSS methods or functions:</p>
          <ul>
          
            <li><b>translate()</b></li>
            <li><b>translateX()</b></li>
            <li><b>translateY()</b></li>
            <li><b>rotate()</b></li>
            <li><b>scale()</b></li>
            <li><b>scaleX()</b></li>
            <li><b>scaleY()</b></li>
            <li><b>skew()</b></li>
            <li><b>skewX()</b></li>
            <li><b>skewY()</b></li>
            <li><b>matrix</b></li>
          </ul>
          <h3>The translate() Method</h3>
          <p>The <b>translate()</b> CSS function repositions or moves an element from its original position in the horizontal and/or vertical directions.</p>
          <p>It is specified with two values, the first value represents the horizontal direction while the second value represents the vertical direction.</p>
          <pre className='mb-1'>
            <code>{syntax_1}</code>
          </pre>
          <div className="css3-2d-tra-div text-center">div-1</div>
          <div className="css3-2d-tra-div moved text-center text-white">div-2 & moved</div>
          <div className="css3-2d-tra-div text-center mb-5">div-3</div>

          <h3>The translateX() Method</h3>
          <p>The <b>translateX()</b> CSS function repositions or moves an element from its original position in the horizontal direction.</p>
          <pre className='mb-1'>
            <code>{syntax_2}</code>
          </pre>
          <div className="css3-2d-tra-div text-center">div-1</div>
          <div className="css3-2d-tra-div moved-x text-center text-white">div-2 & moved</div>
          <div className="css3-2d-tra-div text-center mb-5">div-3</div>

          <h3>The translateY() Method</h3>
          <p>The <b>translateY()</b> CSS function repositions or moves an element from its original position in the vertical direction.</p>
          <pre className='mb-1'>
            <code>{syntax_3}</code>
          </pre>
          <div className="css3-2d-tra-div text-center">div-1</div>
          <div className="css3-2d-tra-div moved-y text-center text-white">div-2 & moved</div>
          <div className="css3-2d-tra-div text-center mb-5">div-3</div>
          
          <h3>The rotate() Method</h3>
          <p>The <b>rotate()</b> CSS function defines a transformation that rotates an element without deforming it.</p>
          <p>The value should be an <b>{syntax_4}</b>, if the value is positive the movement is clockwise and if the value is negative the movement is counter-clockwise.</p>
          <pre className='mb-1'>
            <code>{syntax_5}</code>
          </pre>
          {/* <div className="css3-2d-tra-div css3-2d-tra-div2 clockwise"></div>
          <div className="css3-2d-tra-div css3-2d-tra-div2 counter-clockwise"></div> */}
          <div className="container mb-5 text-center">
            <div className="row">
              <div className="col-md-6">
                <div className="css3-2d-tra-div css3-2d-tra-div2 clockwise text-white p-1">clockwise</div>
              </div>
              <div className="col-md-6">
                <div className="css3-2d-tra-div css3-2d-tra-div2 counter-clockwise text-white p-1">counter-clockwise</div>
              </div>
            </div>
          </div>

          <h3>The scale() Method</h3>
          <p>The <b>scale()</b> CSS function defines a transformation that resizes an element on the 2D plane.</p>
          <p>The amount of scaling is defined by a vector, it can resize the horizontal and vertical dimensions at different scales.</p>
          <p>The <b>scale()</b> CSS function is specified with either one or two <b>{syntax_6}</b> values (separated by a comma).</p>
          <ul>
            <li>When <b>one value</b> is specified, the value applies to both horizontal and vertical dimensions.</li>
            <li>When <b>two values</b> are specified, the first value applies to the horizontal dimension while the second to the vertical.</li>
          </ul>
          <pre className='mb-1'>
            <code>{syntax_7}</code>
          </pre>
          {/* <div className="css3-2d-tra-div3">I love Free CSS Tutorials.</div>
          <div className="css3-2d-tra-div3 scaled">I love Free CSS Tutorials.</div>
          <div className="css3-2d-tra-div3 scaled-2">I love Free CSS Tutorials.</div> */}
          <div className="container mb-5 text-center">
            <div className="row">
              <div className="col-md-4">
                <div className="css3-2d-tra-div3">normal-div</div>
              </div>
              <div className="col-md-4">
                <div className="css3-2d-tra-div3 scaled">scale .5</div>
              </div>
              <div className="col-md-4">
                <div className="css3-2d-tra-div3 scaled-2">scale 1.4</div>
              </div>
            </div>
          </div>

          <h3>The scaleX() Method</h3>
          <p>The <b>scaleX()</b> CSS function defines a transformation that resizes an element on the 2D plane.</p>
          <p>The amount of scaling is defined by a vector, it can resize the horizontal dimension at different scales.</p>
          <pre className='mb-1'>
            <code>{syntax_8}</code>
          </pre>
          {/* <div className="css3-2d-tra-div3">I love Free CSS Tutorials.</div>
          <div className="css3-2d-tra-div3 sacled-x">I love Free CSS Tutorials.</div> */}
          <div className="container text-center mb-5">
            <div className="row">
              <div className="col-md-6">
                <div className="css3-2d-tra-div3">normal-div</div>
              </div>
              <div className="col-md-6">
                <div className="css3-2d-tra-div3 sacled-x">scale-x .5</div>
              </div>
            </div>
          </div>

          <h3>The scaleY() Method</h3>
          <p>The <b>scaleY()</b> CSS function defines a transformation that resizes an element on the 2D plane.</p>
          <p>The amount of scaling is defined by a vector, it can resize the vertical dimension at different scales.</p>
          <pre className='mb-1'>
            <code>{syntax_9}</code>
          </pre>
          {/* <div className="css3-2d-tra-div3">I love Free CSS Tutorials.</div>
          <div className="css3-2d-tra-div3 sacled-y">I love Free CSS Tutorials.</div> */}
          <div className="container text-center mb-5">
            <div className="row">
              <div className="col-md-6">
                <div className="css3-2d-tra-div3">normal-div</div>
              </div>
              <div className="col-md-6">
                <div className="css3-2d-tra-div3 sacled-y">scale-y .5</div>
              </div>
            </div>
          </div>

          <h3>The skew() Method</h3>
          <p>The <b>skew()</b> CSS function defines a transformation that skews an element on the 2D plane.</p>
          <p>It is defined with either one or two values. The values should be <b>{syntax_10}</b>s, the first value skews the element along the X-axis, the second value skews the element along the Y-axis.</p>
          <pre className='mb-1'>
            <code>{syntax_11}</code>
          </pre>
          {/* <div className="css3-2d-tra-div4 skewed">CSS Tutorials.</div>
          <div className="css3-2d-tra-div4 skewed-2">CSS Tutorials.</div> */}
          <div className="container text-center mb-5">
            <div className="row">
              <div className="col-md-6">
                <div className="css3-2d-tra-div4 skewed">skew-1</div>
              </div>
              <div className="col-md-6">
                <div className="css3-2d-tra-div4 skewed-2">skew-2</div>
              </div>
            </div>
          </div>
          

          <h3>The skewX() Method</h3>
          <p>The <b>skewX()</b> CSS function defines a transformation that skews an element on the 2D plane along the X-axis.</p>
          <p>It is defined with an <b>{syntax_4}</b> value.</p>
          <pre className='mb-1'>
            <code>{syntax_12}</code>
          </pre>
          {/* <div className="css3-2d-tra-div4 skewed-x">I am skewed!</div>
          <div className="css3-2d-tra-div4 skewed-x-2">I am skewed!</div> */}
          <div className="container text-center" style={{marginBottom: "10%"}}>
            <div className="row">
              <div className="col-md-6 mt-3">
                <div className="css3-2d-tra-div4 skewed-x">skew-x 1</div>
              </div>
              <div className="col-md-6 mt-3">
                <div className="css3-2d-tra-div4 skewed-x-2">skew-x 2</div>
              </div>
            </div>
          </div>

          <h3>The skewY() Method</h3>
          <p>The <b>skewY()</b> CSS function defines a transformation that skews an element on the 2D plane along the Y-axis.</p>
          <p>It is defined with an <b>{syntax_4}</b> value.</p>
          <pre className='mb-1'>
            <code>{syntax_13}</code>
          </pre>
          {/* <div className="css3-2d-tra-div4 skewed-y">I am skewed!</div>
          <div className="css3-2d-tra-div4 skewed-y-2">I am skewed!</div> */}
          <div className="container text-center" style={{marginBottom: "16%"}}>
            <div className="row">
              <div className="col-md-6 mt-5">
                <div className="css3-2d-tra-div4 skewed-y">skew-y 1</div>
              </div>
              <div className="col-md-6 mt-5">
                <div className="css3-2d-tra-div4 skewed-y-2">skew-y 2</div>
              </div>
            </div>
          </div>

          <h3>The matrix() Method</h3>
          <p>The matrix() CSS function defines a homogeneous 2D transformation matrix.</p>
          <p>It is defined with six <b>{syntax_6}</b> values, each separated by a comma.</p>
          <p>The first, second, third and fourth values describe the linear translation.</p>
          <p>The fifth and sixth values describe the translation to apply.</p>
          <pre style={{marginBottom: "-20px"}}>
            <code>{syntax_14}</code>
          </pre>
          <div className="css3-2d-tra-div5 matrix text-center" style={{marginBottom: "20%"}}>transformed-div</div>

          <h3>Using 2D Transforms with Hover</h3>
          <p>Here is an example of using the <b>:hover</b> pseudo-class to trigger 2D transforms.</p>
          <pre className='mb-1'>
            <code>{syntax_15}</code>
          </pre>
          <p>Tap the elements to trigger the effects.</p>
          {/* <div className="css3-2d-tra-div7">
            <div className="css3-2d-tra-div5 css3-2d-tra-div6 translate-me"> Translate me! </div>
            <div className="css3-2d-tra-div5 css3-2d-tra-div6 rotate-me"> Rotate me! </div>
          </div>
          <div className="css3-2d-tra-div7">
            <div className="css3-2d-tra-div5 css3-2d-tra-div6 scale-me"> Scale me! </div>
            <div className="css3-2d-tra-div5 css3-2d-tra-div6 skew-me"> Skew me! </div>
          </div> */}
          <div className="container text-center mb-5">
            <div className="row">
              <div className="col-md-3 col-sm-4">
                <div className="css3-2d-tra-div5 css3-2d-tra-div6 translate-me"> Translate me! </div>
              </div>
              <div className="col-md-3  col-sm-4">
                <div className="css3-2d-tra-div5 css3-2d-tra-div6 rotate-me"> Rotate me! </div>
              </div>
              <div className="col-md-3  col-sm-4">
                <div className="css3-2d-tra-div5 css3-2d-tra-div6 scale-me"> Scale me! </div>
              </div>
              <div className="col-md-3  col-sm-4">
                <div className="css3-2d-tra-div5 css3-2d-tra-div6 skew-me"> Skew me! </div>
              </div>
            </div>
          </div>

		      <div className="container mt-1 mb-4 d-flex justify-content-between">
            <Link className="btn btn-primary" to="/css-tutorials/css3-web-fonts"><Adl /> Previous</Link>
            <Link className="btn btn-primary" to="/css-tutorials/css3-3d-transforms">Next <Adr /></Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Css3_2d_transforms;