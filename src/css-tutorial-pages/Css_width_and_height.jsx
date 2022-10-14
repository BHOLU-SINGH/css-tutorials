import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Adl from "../Adl";
import Adr from "../Adr";

const Css_width_and_height = () => {
const syntax_1 = `<length>`
const syntax_2 = `<percentage>`
const syntax_3 = `
  #element1{
    width: 200px;
  }
  #element2{
    width: 5em;
  }
  #element3{
    width: 75%;
  }
  #element4{
    width: auto;
  }
`
const syntax_4 = `
  #element1{
    height: 200px;
  }
  #element2{
    height: 5em;
  }
  #element3{
    height: 75%;
  }
  #element4{
    height: auto;
  }
`
const syntax_5 = `
  h1{
    min-width: 500px;
    background: lightblue;
  }
`
const syntax_6 = `
  h1{
    max-width: 250px;
    background: lightgreen;
  }
`
const syntax_7 = `
  h1{
    min-height: 500px;
    background: lightblue;
  }
`
const syntax_8 = `
  h1{
    max-height: 70px;
    background: lightgreen;
    /* lets hide the overlapping content */
    overflow: hidden;
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
         <h3>CSS Width and Height</h3>
    		<p>The <b>width</b> and <b>height</b> CSS properties set the width/height of an element.</p>
         <p>By default, these properties define the width/height of the content area/box.</p>
         <h5>Valid Values:</h5>
    		<ul>
            <li><b>{syntax_1}</b></li>
            <li><b>{syntax_2}</b></li>
    			<li><b>auto</b>: calculates and selects a width/height for the element</li>
				<li><b>max-content</b>: the intrinsic preferred width</li>
				<li><b>min-content</b>: the intrinsic minimum width</li>
				<li><b>available</b>: containing block width minus horizontal margin, border and padding</li>
            <li><b>fit-content</b>: the larger of: the intrinsic minimum width; the smaller of the intrinsic preferred width and the available width</li>
    		</ul>
         <p>Note! The <b>width</b> and <b>height</b> attributes only set the area inside the padding, border and margin of the element and does not include them.</p>
         <h5>Example:</h5>
         <p>Here is an example of <b>width</b> CSS property:</p>
         <pre>
            <code>{syntax_3}</code>
         </pre>
         <h5>Example:</h5>
         <p>Here is an example of <b>height</b> CSS property:</p>
         <pre>
            <code>{syntax_4}</code>
         </pre>
         <h3>Minimum and Maximum Widths and Heights</h3>
         <p>The following properties define CSS minimum and maximum widths and heights.</p>
         <ul>
            <li><b>min-width</b>: sets the minimum width of an element</li>
            <li><b>max-width</b>: sets the maximum width of an element</li>
            <li><b>min-height</b>: sets the minimum height of an element</li>
            <li><b>max-height</b>: sets the maximum height of an element</li>
         </ul>
         <h5>Valid Values:</h5>
         <ul>
            <li><b>{syntax_1}</b></li>
            <li><b>{syntax_2}</b></li>
         </ul>
         <p>Here is an example of the <b>min-width</b> CSS property.</p>
         <pre>
            <code>{syntax_5}</code>
         </pre>
         <p>Here is an example of the <b>max-width</b> CSS property.</p>
         <pre>
            <code>{syntax_6}</code>
         </pre>
         <p>Here is an example of the <b>min-height</b> CSS property.</p>
         <pre>
            <code>{syntax_7}</code>
         </pre>
         <p>Here is an example of the <b>min-height</b> CSS property.</p>
         <pre>
            <code>{syntax_8}</code>
         </pre>
               

			<div class="container mt-4 mb-4 d-flex justify-content-between">
            <Link class="btn btn-primary" to="/css-tutorials/css-padding"><Adl /> Previous</Link>
            <Link class="btn btn-primary" to="/css-tutorials/css-box-models">Next <Adr /></Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Css_width_and_height;