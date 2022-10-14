import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Adl from "../Adl";
import Adr from "../Adr";


const Css3_colors = () => {
const syntax_1 = `
  div{
   width: 80px; 
   height: 80px; 
   border: 1px solid white;
   display: inline-block;
  }
  #div1{
   background: rgba(0, 255, 0, 0.0);
  }
  #div2{
   background: rgba(0, 255, 0, 0.2);
  }
  #div3{
   background: rgba(0, 255, 0, 0.4);
  }
  #div4{
   background: rgba(0, 255, 0, 0.6);
  }
  #div5{
   background: rgba(0, 255, 0, 0.8);
  }
  #div6{
   background: rgba(0, 255, 0, 1.0);
  }
`
const syntax_2 = `
  p{
   color: hsl(0, 100%, 25%)
  }
`
const syntax_3 = `
  div{
   width: 80px; 
   height: 80px; 
   border: 1px solid white;
   display: inline-block;
  }
  #div1{
   background: hsla(0, 100%, 50%, 0.0);
  }
  #div2{
   background: hsla(0, 100%, 50%, 0.2);
  }
  #div3{
   background: hsla(0, 100%, 50%, 0.4);
  }
  #div4{
   background: hsla(0, 100%, 50%, 0.6);
  }
  #div5{
   background: hsla(0, 100%, 50%, 0.8);
  }
  #div6{
   background: hsla(0, 100%, 50%, 1.0);
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
          <h3>CSS3 Colors</h3>
          <p>As what we have learned from this lesson CSS supports color names, hexadecimal and RGB color values.</p>
          <p>CSS3 then introduces the following color values.</p>
          <ul>
            <li>RGBA Color Value</li>
            <li>HSL Color Value</li>
            <li>HSLA Color Value</li>
          </ul>
          <h3>RGBA Color Value</h3>
          <p>The RGBA Color Value is simply an extension of the RGB Color Value.</p>
          <p>But with an alpha value i.e. <b>rgba(red, green, blue, alpha)</b>. The alpha is a number in the range of 0.0 (fully transparent) to 1.0 (fully opaque) or in simplest terms it is the <b>opacity</b> value of the background.</p>
          <h5>Example:</h5>
          <pre className='mb-1'>
            <code>{syntax_1}</code>
          </pre>
          <div className='mb-5'>
            <div className="css3-color-div div1">div-1</div>
            <div className="css3-color-div div2">div-2</div>
            <div className="css3-color-div div3">div-3</div>
            <div className="css3-color-div div4">div-4</div>
            <div className="css3-color-div div5">div-5</div>
            <div className="css3-color-div div6">div-6</div>
          </div>

          <h3>HSL Color Value</h3>
          <p>HSL stands for Hue, Saturation and Lightness.</p>
          <p>The format is: <b>hsl(H, S, L)</b>.</p>
          <ul>
            <li><b>Hue</b> is represented as number. It is a degree of an angle of the color circle. By definition red-0=360, and the other colors are spread around the circle, so green=120, blue=240, etc.</li>
            <li><b>Saturation</b> is represented as percentages. 0% is a shade of gray and 100% is full saturation.</li>
            <li><b>Lightness</b> is represented as percentages. 0% is black, 50% is normal and 100% is white color: hsl(0, 100%, 25%).</li>
          </ul>
          <pre className='mb-1'>
            <code>{syntax_2}</code>
          </pre>
          <p className='mb-5' style={{color: "hsl(0, 100%, 25%)"}}>I love these CSS Tutorials.</p>

          <h3>HSLA Color Value</h3>
          <p>The HSLA Color Value is simply an extension of the HSL Color Value.</p>
          <p>But with an alpha value i.e. <b>hsla(H, S, L, alpha)</b>. The alpha is a number in the range of 0.0 (fully transparent) to 1.0 (fully opaque).</p>
          <h5>Example:</h5>
          <pre className='mb-1'>
            <code>{syntax_3}</code>
          </pre>
          <div className='mb-5'>
            <div className="css3-color-div2 div1">div-1</div>
            <div className="css3-color-div2 div-2">div-2</div>
            <div className="css3-color-div2 div3">div-3</div>
            <div className="css3-color-div2 div4">div-4</div>
            <div className="css3-color-div2 div5">div-5</div>
            <div className="css3-color-div2 div6">div-6</div>
          </div>

          <h3>Most Common CSS Colors with RGBA, HSL and HSLA Values</h3>
          <table className='css3-color-table mb-5' cellpadding="5px" width="100%">
            <tr><th>Color</th><th>Color Name</th><th>RGBA Color Name</th><th>HSL Color Name</th><th>HSLA Color Name</th></tr>
            <tr><td class="color" style={{background: "white"}}></td><td>White</td><td>rgba(255, 255, 255, 1)</td><td>hsl(0, 100%, 100%)</td><td>hsla(0, 100%, 100%, 1)</td></tr>
            <tr><td class="color" style={{background: "silver"}}></td><td>Silver</td><td>rgba(192, 192, 192, 1)</td><td>hsl(0, 0%, 75%)</td><td>hsla(0, 0%, 75%, 1)</td></tr>
            <tr><td class="color" style={{background: "grey"}}></td><td>Gray</td><td>rgba(128, 128, 128, 1)</td><td>hsl(0, 0%, 50%)</td><td>hsla(0, 50%, 1)</td></tr>
            <tr><td class="color" style={{background: "black"}}></td><td>Black</td><td>rgba(0, 0, 0, 1)</td><td>hsl(0, 0%, 0%)</td><td>hsla(0, 0%, 0%, 1)</td></tr>
            <tr><td class="color" style={{background: "red"}}></td><td>Red</td><td>rgba(255, 0, 0, 1)</td><td>hsl(0, 100%, 50%)</td><td>hsla(0, 100%, 50%, 1)</td></tr>
            <tr><td class="color" style={{background: "maroon"}}></td><td>Maroon</td><td>rgba(128, 0, 0, 1)</td><td>hsl(0, 100%, 25%)</td><td>hsla(0, 100%, 25%, 1)</td></tr>
            <tr><td class="color" style={{background: "yellow"}}></td><td>Yellow</td><td>rgba(255, 255, 0, 1)</td><td>hsl(60, 100%, 50%)</td><td>hsla(60, 100%, 50%, 1)</td></tr>
            <tr><td class="color" style={{background: "olive"}}></td><td>Olive</td><td>rgba(128, 128, 0, 1)</td><td>hsl(60, 100%, 25%)</td><td>hsla(60, 100%, 25%, 1)</td></tr>
            <tr><td class="color" style={{background: "lime"}}></td><td>Lime</td><td>rgba(0, 255, 0, 1)</td><td>hsl(120, 100%, 50%)</td><td>hsla(120, 100%, 50%, 1)</td></tr>
            <tr><td class="color" style={{background: "green"}}></td><td>Green</td><td>rgba(0, 128, 0, 1)</td><td>hsl(120, 100%, 25%)</td><td>hsla(120, 100%, 25%, 1)</td></tr>
            <tr><td class="color" style={{background: "aqua"}}></td><td>Aqua</td><td>rgba(0, 255 255, 1)</td><td>hsl(180, 100%, 50%)</td><td>hsla(180, 100%, 50%, 1)</td></tr>
            <tr><td class="color" style={{background: "teal"}}></td><td>Teal</td><td>rgba(0, 128, 128, 1)</td><td>hsl(180, 100%, 25%)</td><td>hsla(180, 100%, 25%, 1)</td></tr>
            <tr><td class="color" style={{background: "blue"}}></td><td>Blue</td><td>rgba(0, 0, 255, 1)</td><td>hsl(240, 100%, 50%)</td><td>hsla(240, 100%, 50%, 1)</td></tr>
            <tr><td class="color" style={{background: "navy"}}></td><td>Navy</td><td>rgba(0, 0, 128, 1)</td><td>hsl(240, 100%, 25%)</td><td>hsla(240, 100%, 25%, 1)</td></tr>
            <tr><td class="color" style={{background: "fuchsia"}}></td><td>Fuchsia</td><td>rgba(255, 0, 255, 1)</td><td>hsl(300, 100%, 50%)</td><td>hsla(300, 100%, 50%, 1)</td></tr>
            <tr><td class="color" style={{background: "purple"}}></td><td>Purple</td><td>rgba(128, 0, 128, 1)</td><td>hsl(300, 100%, 25%)</td><td>hsla(300, 100%, 25%, 1)</td></tr>
          </table>


		      <div className="container mt-4 mb-4 d-flex justify-content-between">
            <Link className="btn btn-primary" to="/css-tutorials/css3-border-images"><Adl /> Previous</Link>
            <Link className="btn btn-primary" to="/css-tutorials/css3-backgrounds">Next <Adr /></Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Css3_colors;