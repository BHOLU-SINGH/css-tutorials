import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Adl from "../Adl";
import Adr from "../Adr";


const Css_opacity = () => {
const syntax_1 = `<number>`
const syntax_2 = `
  div{
   opacity: 0;
   color: #f8f9f9; 
   background-color: #173459; 
   padding: 20px;
  }
`
const syntax_3 = `
  div{
   opacity: 1;
   color: #f8f9f9; 
   background-color: #173459; 
   padding: 20px;
  }
`
const syntax_4 = `
  div{
   color: #f8f9f9; 
   background-color: #173459; 
   padding: 20px;
  }
  .light{
   opacity: 0.3;
  }
  .medium{
   opacity: 0.7;
  }
  .heavy{
   opacity: 0.9;
  }
`
const syntax_5 = `
  img{
   opacity: 0.7;
   /* make img responsive */
   max-width: 100%;
   height: auto;
   /* optional: set transition's duration */
   transition-duration: 2s;
  }
  img:hover{
   opacity: 1;
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
          <h3>CSS Opacity</h3>
          <p>The <b>opacity</b> CSS property sets the opacity of an element.</p>
          <p>Opacity is the degree to which content behind an element is hidden.</p>
          <p>It is the opposite of transparency.</p>
          <p>The value should bea <b>{syntax_1}</b> from <b>0.0</b> to <b>1.0</b>.</p>
          <p>If the value is 0 the element is fully transparent (invisible).</p>
          <pre className='mb-1'>
            <code>{syntax_2}</code>
          </pre>
          <div style={{ opacity: "0", color: "#f8f9f9", backgroundColor: "#173459", padding: "20px"}}>I love these CSS tutorials.</div>
          <p>If the value is <b>1</b> the element is fully opaque (visually solid).</p>
          <pre className='mb-1'>
            <code>{syntax_3}</code>
          </pre>
          <div className='mb-5' style={{opacity: "1", color: "#f8f9f9", backgroundColor: "#173459", padding: "20px"}}>I love these CSS tutorials. These tutorials are very helpful for us.</div>
          <h5>Example:</h5>
          <pre className='mb-1'>
            <code>{syntax_4}</code>
          </pre>
          <div className="css-opty-differ-opacity light">I love these CSS tutorials. These tutorials are very helpful for us.</div>
          <div className="css-opty-differ-opacity medium">I love these CSS tutorials. These tutorials are very helpful for us.</div>
          <div className="css-opty-differ-opacity heavy mb-5">I love these CSS tutorials. These tutorials are very helpful for us.</div>

          <h3>Change Opacity with Hover</h3>
          <p>In the example below the <b>opacity</b> will change when the user hovers (mouse over) the image.</p>
          <p>Or when the user clicks (or click then hold) the image on mobile devices.</p>
          <pre className='mb-1'>
            <code>{syntax_5}</code>
          </pre>
          <img className="css-opty-img" style={{width: "100%", height: "350px"}} src="../images/img.jpg" alt="image loading error"></img>


          
		      <div className="container mt-4 mb-4 d-flex justify-content-between">
            <Link className="btn btn-primary" to="/css-tutorials/css-attribute-selectors"><Adl /> Previous</Link>
            <Link className="btn btn-primary" to="/css-tutorials/css3-introduction">Next <Adr /></Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Css_opacity;