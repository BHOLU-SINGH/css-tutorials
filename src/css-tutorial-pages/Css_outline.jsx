import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Adl from "../Adl";
import Adr from "../Adr";

const Css_outline = () => {
const syntax_1 = `
  p.auto{ outline-style: auto; }
  p.none{ outline-style: none; }
  p.dotted{ outline-style: dotted; }
  p.dashed{ outline-style: dashed; }
  p.solid{ outline-style: solid; }
  p.double{ outline-style: double; }
  p.groove{ outline-style: groove; }
  p.ridge{ outline-style: ridge; }
  p.inset{ outline-style: inset; }
  p.outset{ outline-style: outset; }
`
const syntax_2 = `
  h3{
    outline-style: dashed;
    outline-width: 15px;
  }
`
const syntax_3 = `
  h3{
    outline-style: dashed;
    outline-color: #428bca;
  }
`
const syntax_4 = `
  h3{
    outline: 10px dotted #903C56;
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
         <h3>CSS Outline</h3>
    		<p>An outline is a line drawn around an element, outside the border (if there is a border).</p>
         <p>It can be used to make an element stand out.</p>
         <p>Unlike the border, an outline does not take up space.</p>
         <p>It also does not add up to element's width and height.</p>
         <h3>CSS Outline Style</h3>
         <p>The <b>outline-style</b> CSS property sets the style of an element's outline.</p>
         <h5>Valid values:</h5>
         <ul>
            <li><b>auto</b>: permits the user-agent to render a custom outline</li>
            <li><b>none</b>: no outline is shown</li>
            <li><b>dotted</b>: the outline is a series of dots</li>
            <li><b>dashed</b>: the outline is a series of short line segments</li>
            <li><b>solid</b>: the outline is a single line</li>
            <li><b>double</b>: the outline is two single lines</li>
            <li><b>groove</b>: the outline looks carved into the page</li>
            <li><b>ridge</b>: the outline looks extruded from the page</li>
            <li><b>inset</b>: the outline makes the box look embedded into the page</li>
            <li><b>outset</b>: the outline makes the box look like it's coming out of the page</li>
         </ul>
         <h5>Example:</h5>
         <pre>
            <code>{syntax_1}</code>
         </pre>
         <h3>CSS Outline Width</h3>
         <p>The <b>outline-width</b> CSS property sets the width of an element's outline.</p>
         <pre style={{marginBottom: "1.5rem"}}>
            <code>{syntax_2}</code>
         </pre>
         <p style={{outlineStyle: "dashed", outlineWidth: "15px", width: "80ch", marginLeft: "2%", marginBottom: "3.5rem"}}></p>
         {/* <div class="border-bottom mt-4 mb-4">
            <h5>Output:</h5><br />
            <p style="outline-style: dashed; outline-width: 15px; margin-left: 5%; margin-right: 5%;"></p><br />
         </div> */}
         <h3>CSS Outline Color</h3>
         <p>The <b>outline-color</b> CSS property sets the color of an element's outline.</p>
         <pre style={{marginBottom: "1.5rem"}}>
            <code>{syntax_3}</code>
         </pre>
         <p style={{outlineStyle: "dashed", outlineColor: "#428bca", width: "80ch", marginLeft: "2%", marginBottom: "3.5rem"}}></p>
         <h3>CSS Outline - Shorthand Property</h3>
         <p>The <b>outline</b> CSS property is a shorthand property for the following:</p>
         <ul>
            <li><b>outline-width</b></li>
            <li><b>outline-style</b></li>
            <li><b>outline-color</b></li>
         </ul>
         <p>Order does not matter.</p>
         <p>As with all shorthand properties, any omitted sub-values will be set to their initial sub-value.</p>
         <p>However, in this shorthand property the <b>outline-style</b>'s value is required.</p>
         <pre style={{marginBottom: "1.5rem"}}>
            <code>{syntax_4}</code>
         </pre>
         <p style={{outline: "10px dotted #903C56", width: "80ch", marginLeft: "2%", marginBottom: "3.5rem"}}></p>
               

		   <div class="container mt-4 mb-4 d-flex justify-content-between">
            <Link class="btn btn-primary" to="/css-tutorials/css-tables"><Adl /> Previous</Link>
            <Link class="btn btn-primary" to="/css-tutorials/css-buttons">Next <Adr /></Link>
         </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Css_outline;