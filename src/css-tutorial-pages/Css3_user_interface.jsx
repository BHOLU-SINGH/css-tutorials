import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Adl from "../Adl";
import Adr from "../Adr";


const Css3_user_interface = () => {
const syntax_1 = `  <div>`
const syntax_2 = `  .horizontal{
   resize: horizontal;
  }
  .vertical{
   resize: vertical;
  }
  .both{
   resize: both;
  }
  div{
   padding: 50px;
   border: 1px solid black;
  }
`
// const syntax_3 = `  

// `
// const syntax_4 = `  

// `
// const syntax_5 = `  

// `
  return(
    <>
    <Menu />
    <div className="container-fluid mt-2">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9 mt-2 p-3 bg-light">
          <h3>CSS3 User Interface</h3>
          <p>In this lessson we will learn about the following user interface CSS properties.</p>
          <p>Valid Values:</p>
          <ul>
            <li><b>resize</b></li>
            <li><b>outline-offset</b></li>
          </ul>
          <p><b>Note!</b> The following demo does not work in mobile devices but you can save them and run them on a PC.</p>
          <h3>CSS3 Resize Property</h3>
          <p>The <b>resize</b> CSS property sets whether an element is resizeable.</p>
          <p>Valid Values:</p>
          <ul>
            <li><b>none</b> : the element does not offer any user-controllable method for resizing it</li>
            <li><b>horizontal</b> : the element provides a control allowing it to be resized horizontally</li>
            <li><b>vertical</b> : the element provides a control allowing it to be resized vertically</li>
            <li><b>both</b> : the element provides a control allowing it to be resized both horizontally and vertically</li>
          </ul>
          <p>By default, <b>{syntax_1}</b> elements are not resizeable, but we can make it become resizeable by a user.</p>
          <pre className='mb-1'>
            <code>{syntax_2}</code>
          </pre>
          <p><b>Note!</b> This demo does not work in mobile devices but you can save it and view how it works on a PC. </p>
          <div className="css3-u-intface-hor div"> Resize me horizontally. </div>
          <div className="css3-u-intface-ver div"> Resize me vertically. </div>
          <div className="css3-u-intface-both div"> Resize me both horizontally and vertically. </div>


		      <div className="container mt-5 mb-4 d-flex justify-content-between">
            <Link className="btn btn-primary" to="/css-tutorials/css3-multiple-columns"><Adl /> Previous</Link>
            <Link className="btn btn-primary" to="/css-tutorials/css3-box-sizing">Next <Adr /></Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Css3_user_interface;

// • resize
// • outline-offset




// . horizontal {
// resize: horizontal;



// 2:42
// CSS3 User Interface
// By default, the texrarea element is resizeable, but we can make it not resizeable if we need to.
// textarea
// resize: none;
// TRY IT YOURSELF
// CSS3 Outline Offset
// The outline-offset CSS property sets the amount of space between the outline and the edge or border of an element.
// To demonstrate this we should also define the outline CSS property.
// Here is an example without a border:
// div
// outline: 3px solid blue,
// outline-offset: 10px;
// margin: 10px;
// TRY IT YOURSELF
// Here is an example with a border:
// div
// outline: 3px solid blue;
// outline-offset: 10px;

