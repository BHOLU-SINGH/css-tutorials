import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Adl from "../Adl";
import Adr from "../Adr";


const Css3_shadow_effects = () => {
const syntax_1 = `text-shadow: offset-x offset-y blur-radius color;
`
const syntax_2 = `<length>`
const syntax_3 = `  p{
   text-shadow: 2px 2px;
  }
`
const syntax_4 = `  p{
   text-shadow: 2px 2px orange;
  }
`
const syntax_5 = `  p{
   text-shadow: 2px 2px 3px orange;
  }
`
const syntax_6 = `  p{
   text-shadow: 0 0 3px orange;
  }

`
const syntax_7 = `  p{
   text-shadow: 0 0 3px red, 0 0 6px yellow;
  }
`
const syntax_8 = `  p{
   text-shadow: -1px 0 #173459, 0 1px #173459, 1px 0 #173459, 0 -1px #173459;
   color: #903C56;
  }
`
const syntax_9 = `  box-shadow: offset-x offset-y blur-radius spread-radius color;`
const syntax_10 = `  div{
   box-shadow: 10px 5px;
  }
`
const syntax_11 = `  div{
   box-shadow: 10px 5px #173459;
  }
`
const syntax_12 = `  div{
   box-shadow: 10px 5px 5px #173459;
  }
`
const syntax_13 = `  div{
   box-shadow: 10px 5px 5px 3px #173459;
  }
`
const syntax_14 = `  div{
   box-shadow: -10px -5px 5px 3px #173459;
  }
`
const syntax_15 = `  .card{
   box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3), 0 7px 21px 0 rgba(0, 0, 0, 0.20); 
   width: 250px; 
   font-family: sans-serif; 
   color: #f8f9f9;
  }
  .card-header{
   padding: 10px; 
   font-size: 18px; 
   background: #311b92;
  }
  .card-body{
   padding: 15px; 
   background: #d50000;
   white-space: pre-wrap;
  }
`
const syntax_16 = `  .card{
   box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3), 0 7px 21px 0 rgba(0, 0, 0, 0.20); 
   box-sizing: border-box;
   width: 250px; 
   font-family: sans-serif;
  }
  .card-text{
   padding: 10px; 
   font-size: 18px; 
   text-align: center;
  }
  .card > img{
   max-width: 100%;
   height: auto;
  }
`
const syntax_17 = `  
`
const syntax_18 = `  
`
const syntax_19 = `  
`
const syntax_20 = `  
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
          <h3>CSS3 Shadow Effects</h3>
          <p>With CSS3, we can add shadow effects to text and elements using the following CSS properties:</p>
          <ul>
            <li><b>text-shadow</b></li>
            <li><b>box-shadow</b></li>
          </ul>
          <h3>CSS3 Text Shadow</h3>
          <p>The text-shadow CSS property adds shadows to text.</p>
          <p>Each shadow is described by some combination of X and Y offsets from the element, blur radius, and color.</p>
          <h5>Syntax:</h5>
          <pre className='mb-1'>
            <code>{syntax_1}</code>
          </pre>
          <p className='mt-5'>The <b>offset-x offset-y</b> are <b>{syntax_2}</b> values that specify the shadow's distance from the text:</p>
          <ul>
            <li><b>offset-x</b> specifies the horizontal distance; a negative value places the shadow tothe left of the text</li>
            <li><b>offset-y</b> specifies the vertical distance; a negative value places the shadow above the text</li>
          </ul>
          <p>The <b>blur-radius</b> value (optional) is a <b>{syntax_2}</b> value that sets the size of the blur.</p>
          <p>The <b>color</b> value (optional) defines the color of the shadow.</p>
          <p>Here is a basic example:</p>
          <pre className='mb-1'>
            <code>{syntax_3}</code>
          </pre>
          <p className='mb-5' style={{textShadow: "2px 2px"}}>I love these CSS Tutorials. These tutorials are very important and easy to understand.</p>

          <p>Let's change the color of the shadow:</p>
          <pre className='mb-1'>
            <code>{syntax_4}</code>
          </pre>
          <p className='mb-5' style={{textShadow: "2px 2px orange"}}>I love these CSS Tutorials. These tutorials are very important and easy to understand.</p>

          <p>Let's set the size of the blur radius:</p>
          <pre className='mb-1'>
            <code>{syntax_5}</code>
          </pre>
          <p className='mb-5' style={{textShadow: "2px 2px 3px orange"}}>I love these CSS Tutorials. These tutorials are very important and easy to understand.</p>

          <p>Let's set both the offset values to <b>0</b>:</p>
          <pre className='mb-1'>
            <code>{syntax_6}</code>
          </pre>
          <p className='mb-5' style={{textShadow: "0 0 3px orange"}}>I love these CSS Tutorials. These tutorials are very important and easy to understand.</p>

          <p>we can also have multiple text shadows by separating a set of values with a comma  (<b>,</b>).</p>
          <pre className='mb-1'>
            <code>{syntax_7}</code>
          </pre>
          <p className='mb-5' style={{textShadow: "0 0 3px red, 0 0 6px yellow"}}>I love these CSS Tutorials. These tutorials are very important and easy to understand.</p>

          <p>Here is a little trick to put borders around text:</p>
          <pre className='mb-1'>
            <code>{syntax_8}</code>
          </pre>
          <p className='mb-5' style={{textShadow: "-1px 0 #173459, 0 1px #173459, 1px 0 #173459, 0 -1px #173459", color: "#903C56"}}>I love these CSS Tutorials. These tutorials are very important and easy to understand.</p>

          <h3>CSS3 Box Shadow</h3>
          <p>The box-shadow CSS adds shadow effects around an element's frame.</p>
          <p>A box shadow is described by X and Y offsets relative to the element, blur and spread radii, and color.</p>
          <h5>Syntax:</h5>
          <pre className='mb-1'>
            <code>{syntax_9}</code>
          </pre>
          <p className='mt-5'>The <b>offset-x offset-y</b> are <b>{syntax_2}</b> values that specify the shadow's distance from the element:</p>
          <ul>
            <li><b>offset-x</b> specifies the horizontal distance; a negative value places the shadow tothe left of the element</li>
            <li><b>offset-y</b> specifies the vertical distance; a negative value places the shadow above the element</li>
          </ul>
          <p>The <b>blur-radius</b> value (optional) is a <b>{syntax_2}</b> value that sets the size of the blur.</p>
          <p>The <b>spread-radius</b> value (optional) is a <b>{syntax_2}</b> value: if not specified, it will be 0 (the shadow will be the same size as the element); if the value is positive the shadow will expand; if the value is negative the shadow will shrink</p>
          <p>The <b>color</b> value(optional) defines the color of the shadow.</p>
          <p>Here is a basic example:</p>
          <pre className='mb-1'>
            <code>{syntax_10}</code>
          </pre>
          <div className="css3-sha-eff-div mb-5" style={{boxShadow: "10px 5px"}}></div>

          <p>let's change the color of the shadow:</p>
          <pre className='mb-1'>
            <code>{syntax_11}</code>
          </pre>
          <div className="css3-sha-eff-div mb-5" style={{boxShadow: "10px 5px #173459"}}></div>

          <p>Let's set the of the blur radius:</p>
          <pre className='mb-1'>
            <code>{syntax_12}</code>
          </pre>
          <div className="css3-sha-eff-div mb-5" style={{boxShadow: "10px 5px 5px #173459"}}></div>
          
          <p>Let's set the of the spread radius:</p>
          <pre className='mb-1'>
            <code>{syntax_13}</code>
          </pre>
          <div className="css3-sha-eff-div mb-5" style={{boxShadow: "10px 5px 5px 3px #173459"}}></div>

          <p>Let's try negative offset values so that the shadows will go to the top and to the left of the element.</p>
          <pre className='mb-1'>
            <code>{syntax_14}</code>
          </pre>
          <div className="css3-sha-eff-div mb-5" style={{boxShadow: "-10px -5px 5px 3px #173459", marginLeft: "5%"}}></div>
          
          <p>Here's an example of using the <b>box-shadow</b> CSS property to create a text card.</p>
          <pre className='mb-1'>
            <code>{syntax_15}</code>
          </pre>
          <div className="css3-sha-eff-card mb-5">
            <div className="card-header">CSS Tutorials</div>
            <div className="card-body">I love these CSS Tutorials. These tutorials are very important and easy to understand.</div>
          </div>

          <p>Here's an example of using the <b>box-shadow</b> CSS property to create an image card.</p>
          <pre className='mb-1'>
            <code>{syntax_16}</code>
          </pre>
          <div className="css3-sha-eff-image-card mb-5">
            <img src="../images/img.jpg" alt="image loading error" />
            <div className="card-text">CSS Tutorials</div>
          </div>


		      <div className="container mt-4 mb-4 d-flex justify-content-between">
            <Link className="btn btn-primary" to="/css-tutorials/css3-gradients"><Adl /> Previous</Link>
            <Link className="btn btn-primary" to="/css-tutorials/css3-text">Next <Adr /></Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Css3_shadow_effects;