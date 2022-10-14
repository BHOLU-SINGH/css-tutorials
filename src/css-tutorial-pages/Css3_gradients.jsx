import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Adl from "../Adl";
import Adr from "../Adr";


const Css3_gradients = () => {
const syntax_1 = `background-image: linear-gradient(direction, color-stop1, color-stop2, ..);
`
const syntax_2 = `  div{
   background-image: linear-gradient(blue, red);
   /* same as background-image: linear-gradient(to bottom, blue, red); */
   width: 300px;
   height: 300px;
  }
`
const syntax_3 = `  div{
   background-image: linear-gradient(to right, blue, red);
   width: 300px;
   height: 300px;
  }
`
const syntax_4 = `  div{
   background-image: linear-gradient(to bottom right, blue, red);
   width: 300px;
   height: 300px;
  }
`
const syntax_5 = `  div{
   background-image: linear-gradient(310deg, blue, red);
   width: 300px;
   height: 300px;
  }
`
const syntax_6 = `<number>`
const syntax_7 = `  div{
   background-image: linear-gradient(rgba(0, 255, 0, 0.0), rgba(0, 255, 0, 1.0));
   width: 300px;
   height: 300px;
  }
`
const syntax_8 = `  div{
   background-image: linear-gradient(blue, red, yellow);
   width: 300px;
   height: 300px;
  }
`
const syntax_9 = `<length>`
const syntax_10 = `<percentage>`
const syntax_11 = `  div{
   background-image: linear-gradient(blue, 20%, red);
   width: 300px;
   height: 300px;
  }
`
const syntax_12 = `  div{
   background-image: linear-gradient(blue 25%, red 50%, yellow 75%);
   width: 300px;
   height: 300px;
  }
`
const syntax_13 = `
.div1{
 background-image: linear-gradient(blue 50%, red 50%);
 width: 300px;
 height: 300px;
}
.div2{
 background-image: linear-gradient(to top right, lightblue 50%, pink 50%);
 width: 300px;
 height: 300px;
}
`
const syntax_14 = `  div{
   background-image: repeating-linear-gradient(45deg, #173459, #903C56 15%, #78969D 20%);
   width: 350px;
   height: 200px;
  }
`
const syntax_15 = `  background-image: radial-gradient(shape size at position, start-color, ...., last-color);
`
const syntax_16 = `  div{
   background-image: radial-gradient(blue, red, yellow);
   width: 350px;
   height: 200px;
  }
`
const syntax_17 = `  div{
   background-image: radial-gradient(red 20%, yellow 40%, green 40%);
   width: 350px;
   height: 200px;
  }
`
const syntax_18 = `  .ellipse{
   background-image: radial-gradient(ellipse at center, blue, red, yellow);
   width: 350px;
   height: 200px;
  }
  div{
   background-image: radial-gradient(circle at center, blue, red, yellow);
   width: 350px;
   height: 200px;
  }
`
const syntax_19 = `  .div1{
   background-image: radial-gradient(ellipse closest-side at center, blue, red, yellow);
   width: 350px;
   height: 200px;
  }
  .div2{
   background-image: radial-gradient(ellipse closest-corner at center, blue, red, yellow);
   width: 350px;
   height: 200px;
  }
  .div3{
   background-image: radial-gradient(ellipse farthest-side at center, blue, red, yellow);
   width: 350px;
   height: 200px;
  }
  .div4{
   background-image: radial-gradient(ellipse farthest-corner at center, blue, red, yellow);
   width: 350px;
   height: 200px;
  }
`
const syntax_20 = ` .div1{
 background-image: radial-gradient(circle closest-side at center, blue, red, yellow);
 width: 350px;
 height: 200px;
}
.div2{
 background-image: radial-gradient(circle closest-corner at center, blue, red, yellow);
 width: 350px;
 height: 200px;
}
.div3{
 background-image: radial-gradient(circle farthest-side at center, blue, red, yellow);
 width: 350px;
 height: 200px;
}
.div4{
 background-image: radial-gradient(circle farthest-corner at center, blue, red, yellow);
 width: 350px;
 height: 200px;
}
`
const syntax_21 = ` div{
  background-image: radial-gradient(circle at 0% 30%, red, yellow, green);
  width: 350px;
  height: 200px;
}
`
const syntax_22 = ` div{
   background-image: repeating-radial-gradient(red 20%, yellow 35%, green 45%);
   width: 350px;
   height: 200px;
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
          <h3>CSS3 Gradients</h3>
          <p>CSS gradients are made of a progressive transition between two or more colors.</p>
          <p>The transitions between colors are usually smooth.</p>
          <p>There are two types of CSS gradients, they are represented by the following CSS functions:</p>
          <ul>
            <li>Linear Gradient <b>linear-gradient()</b></li>
            <li>Radial Gradient <b>radial-gradient()</b></li>
          </ul>
          <p>Gradients can be used anywhere you would use an image, such as in backgrounds.</p>
          <p>To demonstrate how gradients work we will use the <b>background-image</b> CSS property.</p>
          <h3>Linear Gradient</h3>
          <p>The <b>linear-gradient()</b> CSS function creates an image consisting of a progressive transition between two or more colors along a straight line.</p>
          <h5>Syntax:</h5>
          <pre className='mb-4'>
            <code>{syntax_1}</code>
          </pre>
          <p>The <b>direction</b> is optional, there should be at least two color stops.</p>
          <p><b>Color stops</b> are the colors rendered on a gradient in smooth transitions.</p>
          <p><b>Linear Gradient - Top to Bottom (default)</b></p>
          <p>The example below shows a linear gradient that starts from the top to bottom (default). It starts blue, transitioning to red.</p>
          <pre className='mb-1'>
            <code>{syntax_2}</code>
          </pre>
          <div className='css3-gra-w-h mb-5' style={{backgroundImage: "linear-gradient(blue, red)"}}></div>

          <h5>Linear Gradient - Left to Right</h5>
          <p>The example below shows a linear gradient that starts from the left to right. It starts blue, transitioning to red.</p>
          <pre className='mb-1'>
            <code>{syntax_3}</code>
          </pre>
          <div className='css3-gra-w-h mb-5' style={{backgroundImage: "linear-gradient(to right, blue, red)"}}></div>

          <h5>Linear Gradient - Diagonal</h5>
          <p>We can make a diagonal gradient by specifying both the horizontal and vertical directions.</p>
          <p>The example below shows a linear gradient that starts from the top left corner going to the bottom right corner. It starts blue, transitioning to red.</p>
          <pre className='mb-1'>
            <code>{syntax_4}</code>
          </pre>
          <div className='css3-gra-w-h mb-5' style={{backgroundImage: "linear-gradient(to bottom right, blue, red)"}}></div>

          <h3>Linear Gradient - Using Angles</h3>
          <p>If you need more control over its direction you can give the gradient a specific angle.</p>
          <pre className='mb-1'>
            <code>{syntax_5}</code>
          </pre>
          <div className='css3-gra-w-h mb-5' style={{backgroundImage: "linear-gradient(310deg, blue, red)"}}></div>

          <p><b>Note!</b> The values <b>to top</b>, <b>to bottom</b>, <b>to left</b>, and <b>to right</b> are equivalent to the angles <b>0deg</b>, <b>180deg</b>, <b>270deg</b> and <b>90deg</b> respectively.</p>
          <h3>Linear Gradient - Using Transparency</h3>
          <p>CSS Gradients also support transparency that creates fading effects.</p>
          <p>We can use the <b>rgba()</b> CSS function to add transparency, the last value of this function is a <b>{syntax_6}</b> from 0.0 (fully transparent) to 1.0 (fully opaque) which defines the transparency of the color.</p>
          <p>The following example shows a linear gradient that starts from the top. It starts fully transparent, transitioning to full color green:</p>
          <pre className='mb-1'>
            <code>{syntax_7}</code>
          </pre>
          <div className='css3-gra-w-h mb-5' style={{backgroundImage: "linear-gradient(rgba(0, 255, 0, 0.0), rgba(0, 255, 0, 1.0))"}}></div>

          <h3>Linear Gradient - Multiple Color Stops</h3>
          <p>The example below shows a linear gradient with more than two color stops.</p>
          <pre className='mb-1'>
            <code>{syntax_8}</code>
          </pre>
          <div className='css3-gra-w-h mb-5' style={{backgroundImage: "linear-gradient(blue, red, yellow)"}}></div>

          <h3>Linear Gradient Hints</h3>
          <p>By default, the gradient transitions smoothly from one color to the next and the midpoint is from 50%.</p>
          <p>We can move the midpoint by specifying gradient hints between color stops.</p>
          <p>A gradient hint value could be a <b>{syntax_9}</b> or a <b>{syntax_10}</b>.</p>
          <p>In the example below, we've moved the midpoint of the transition from the <b>50%</b> mark to the <b>20%</b> mark.</p>
          <pre className='mb-1'>
            <code>{syntax_11}</code>
          </pre>
          <div className='css3-gra-w-h mb-5' style={{backgroundImage: "linear-gradient(blue, 20%, red)"}}></div>

          <h3>Linear Gradient - Positioning Color Stops</h3>
          <p>We can change the default positions of our color stops and fine-tune their locations by simply giving each a <b>{syntax_9}</b> or a <b>{syntax_10}</b> value.</p>
          <pre className='mb-1'>
            <code>{syntax_12}</code>
          </pre>
          <div className='css3-gra-w-h mb-5' style={{backgroundImage: "linear-gradient(blue 25%, red 50%, yellow 75%)"}}></div>

          <p>If you leave a location unspecified, the position of that particular color stop will be automatically calculated for you, with the first color stop being at <b>0%</b> and the last color stop being at <b>100%</b>.</p>
          <h3>Linear Gradient - Creating Hard Lines</h3>
          <p>To create a hard line between two colors simply set the adjacent color stops to the same position.</p>
          <p>It then creates a stripe instead of a gradual transition.</p>
          <pre className='mb-1'>
            <code>{syntax_13}</code>
          </pre>
          <div className="d-flex mb-5">
            <div className='css3-gra-w-h m-1 text-white' style={{backgroundImage: "linear-gradient(blue 50%, red 50%)"}}>div-1</div>
            <div className='css3-gra-w-h m-1' style={{backgroundImage: "linear-gradient(to top right, lightblue 50%, pink 50%)"}}>div-2</div>
          </div>

          <h3>Repeating Linear Gradients</h3>
          <p>We can repeat linear gradients using the <b>repeating-linear-gradient()</b> CSS function.</p>
          <pre className='mb-1'>
            <code>{syntax_14}</code>
          </pre>
          <div className='css3-gra-w-h mb-5' style={{backgroundImage: "repeating-linear-gradient(45deg, #173459, #903C56 15%, #78969D 20%)"}}></div>

          <h3>Radial Gradient</h3>
          <p>The <b>radial-gradient()</b> CSS function creates an image consisting of a progressive transition between two or more colors that radiate from an origin.</p>
          <h5>Syntax:</h5>
          <pre className='mb-4'>
            <code>{syntax_15}</code>
          </pre>

          <p>There should be at least two color stops to create a radial gradient.</p>
          <p>By default, shape is ellipse, size is farthest-corner, and position is center.</p>
          <p>The example below shows a radial gradient with the default values and with evenly spaced color stops.</p>
          <pre className='mb-1'>
            <code>{syntax_16}</code>
          </pre>
          <div className='css3-gra-w-h mb-5' style={{backgroundImage: "radial-gradient(blue, red, yellow)"}}></div>

          <h3>Radial Gradient - Positioning Radial Color Stops</h3>
          <p>Like linear gradients, we can position each radial color stop with a <b>{syntax_9}</b> or <b>{syntax_10}</b>.</p>
          <pre className='mb-1'>
            <code>{syntax_17}</code>
          </pre>
          <div className='css3-gra-div mb-5' style={{backgroundImage: "radial-gradient(red 20%, yellow 40%, green 40%)"}}></div>

          <h3>Radial Gradient - Set Shape</h3>
          <p>The radial gradient's shape can either be:</p>
          <ul>
            <li><b>ellipse</b>: the shape is a circle with constant radius</li>
            <li><b>circle</b>: the shape is an axis-aligned ellipse</li>
          </ul>
          <pre className='mb-1'>
            <code>{syntax_18}</code>
          </pre>
          <div className="container-fluid mb-5">
            <div className="row">
              <div className="col-md-5 m-1">
                <div className='.css3-gra-div' style={{backgroundImage: "radial-gradient(ellipse at center, blue, red, yellow)", height: "200px"}}>div-1</div>
              </div>
              <div className="col-md-5 m-1">  
              <div className='.css3-gra-div' style={{backgroundImage: "radial-gradient(circle at center, blue, red, yellow)", height: "200px"}}>div-2</div>
              </div>
            </div>
          </div>

          <h3>Radial Gradient - Set Size</h3>
          <p>The size parameter sets the size (how big the ending shape must be) of the radial gradient. The possible values are:</p>
          <ul>
            <li><b>closest-side</b>: the ending shape meets the side of the box closest to its center (for circles); meets both the vertical and horizontal sides closest to the center (for ellipses)</li>
            <li><b>closest-corner</b>: the ending shape is sized so that it exactly meets the closest corner of the box from its center</li>
            <li><b>farthest-side</b>: similar to closest-side, except the ending shape is sized to meet the side of the box farthest from its center</li>
            <li><b>farthest-corner</b>: default; ending shape is sized so that it exactly meets the farthest corner of the box from its center</li>
          </ul>
          <p>Here is a demo of the possible size values with the <b>ellipse</b> shape.</p>
          <pre className='mb-1'>
            <code>{syntax_19}</code>
          </pre>
          <div className="container mb-5">
            <div className="row">
              <div className="col-md-3 css3-gra-div div1 m-1">div-1</div>
              <div className="col-md-3 css3-gra-div div2 m-1">div-2</div>
              <div className="col-md-3 css3-gra-div div3 m-1">div-3</div>
              <div className="col-md-3 css3-gra-div div4 m-1">div-4</div>
            </div>
          </div>

          <p>Here is a demo of the possible size values with the <b>circle</b> shape.</p>
          <pre className='mb-1'>
            <code>{syntax_20}</code>
          </pre>
          <div className="container mb-5">
            <div className="row">
              <div className="col-md-3 css3-gra-div div-one m-1">div-1</div>
              <div className="col-md-3 css3-gra-div div-two m-1">div-2</div>
              <div className="col-md-3 css3-gra-div div-three m-1">div-3</div>
              <div className="col-md-3 css3-gra-div div-four m-1">div-4</div>
            </div>
          </div>

          <h3>Radial Gradient - Positioning the Center of the Gradient</h3>
          <p>By default the center position of the radial gradient is at the center of the element.</p>
          <p>We can change this by specifying a <b>position</b> value (<b>{syntax_9}</b> or <b>{syntax_10}</b>).</p>
          <p>If two <b>position</b> values are specified, the first value is the position from the top and the second from the left.</p>
          <pre className='mb-1'>
            <code>{syntax_21}</code>
          </pre>
          <div className="css3-gra-div mb-5" style={{backgroundImage: "radial-gradient(circle at 0% 30%, red, yellow, green)"}}></div>

          <h3>Repeating Radial Gradients</h3>
          <p>We can repeat radial gradients using the <b>repeating-radial-gradient()</b> CSS function.</p>
          <pre className='mb-1'>
            <code>{syntax_22}</code>
          </pre>
          <div className="css3-gra-div mb-5" style={{backgroundImage: "repeating-radial-gradient(red 20%, yellow 35%, green 45%)"}}></div>


		      <div className="container mt-4 mb-4 d-flex justify-content-between">
            <Link className="btn btn-primary" to="/css-tutorials/css3-backgrounds"><Adl /> Previous</Link>
            <Link className="btn btn-primary" to="/css-tutorials/css3-shadow-effects">Next <Adr /></Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Css3_gradients;