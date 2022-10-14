import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Adl from "../Adl";
import Adr from "../Adr";

const Css_borders = () => {
const syntax_1 = `
  p.none{ border-style: none; }
  p.hidden{ border-style: hidden; }
  p.dotted{ border-style: dotted; }
  p.dashed{ border-style: dashed; }
  p.solid{ border-style: solid; }
  p.double{ border-style: double; }
  p.groove{ border-style: groove; }
  p.ridge{ border-style: ridge; }
  p.inset{ border-style: inset; }
  p.outset{ border-style: outset; }
`
const syntax_2 = `
<length>
`
const syntax_3 = `
  div{
    border-width: 10px;
    border-style: solid;
    width: 250px;
    height: 250px;
    background: yellow;
  }
`
const syntax_4 = `
<color>
`
const syntax_5 = `
  div{
    border-style: groove;
    border-width: 5px;
    border-color: magenta;
    width: 250px;
    height: 250px;
    background: yellow;
  }
`
const syntax_6 = `
  div{
    border-top-style: solid;
    border-right-style: dotted;
    border-top-style: dashed;
    border-top-style: groove;
    border-width: 5px;
    border-color: red;
    width: 250px;
    height: 250px;
    background: lightgrey;
  }
`
const syntax_7 = `
  div{
    border-top-width: 5px;
    border-right-width: 10px;
    border-top-width: 15px;
    border-top-width: 20px;
    border-color: red;
    border-style: solid;
    width: 250px;
    height: 250px;
    background: lightgrey;
  }
`
const syntax_8 = `
  div{
    border-top-width: blue;
    border-right-width: red;
    border-top-width: green;
    border-top-width: gold;
    border-style: solid;
    border-width: 5px;
    width: 250px;
    height: 250px;
    background: lightgrey;
  }
`
const syntax_9 = `
  div{
    border: 1px solid black;
    width: 250px;
    height: 250px;
    background: lightgrey;
  }
`
const syntax_10 = `
  div{
    width: 250px;
    height: 250px;
    background: lightgrey;
    margin: 10px;
  }
  /* border-style with one value */
  #style{
    border-style: dashed;
    border-width: 10px;
    border-color: red;
  }
  /* border-width with one value */
  #width{
    border-style: dashed;
    border-width: 10px;
    border-color: red;
  }
  /* border-color with one value */
  #color{
    border-style: dashed;
    border-width: 10px;
    border-color: red;
  }
`
const syntax_11 = `
  div{
    width: 250px;
    height: 250px;
    background: lightgrey;
    margin: 10px;
  }
  /* border-style with two values */
  #style{
    border-style: dotted dashed;
    border-width: 10px;
    border-color: red;
  }
  /* border-width with two values */
  #width{
    border-style: dashed;
    border-width: 10px 15px;
    border-color: red;
  }
  /* border-color with two values */
  #color{
    border-style: dashed;
    border-width: 10px;
    border-color: red green;
  }
`
const syntax_12 = `
  div{
    width: 250px;
    height: 250px;
    background: lightgrey;
    margin: 10px;
  }
  /* border-style with three values */
  #style{
    border-style: groove dotted dashed;
    border-width: 10px;
    border-color: red;
  }
  /* border-width with three values */
  #width{
    border-style: dashed;
    border-width: 10px 15px 10px;
    border-color: red;
  }
  /* border-color with three values */
  #color{
    border-style: dashed;
    border-width: 10px;
    border-color: blue red green;
  }
`
const syntax_13 = `
  div{
    width: 250px;
    height: 250px;
    background: lightgrey;
    margin: 10px;
  }
  /* border-style with four values */
  #style{
    border-style: solid dashed solid dashed;
    border-width: 10px;
    border-color: red;
  }
  /* border-width with four values */
  #width{
    border-style: dashed;
    border-width: 5px 10px 15px 20px;
    border-color: red;
  }
  /* border-color with four values */
  #color{
    border-style: dashed;
    border-width: 10px;
    border-color: blue red green gold;
 }
`
const syntax_14 = `<table>`
const syntax_15 = `<td>`
  return(
    <>
    <Menu />
    <div className="container-fluid mt-2">
        <div className="row">
            <div className="col-md-3">
                <Sidebar />
            </div>
            <div className="col-md-9 mt-2 p-3 bg-light">
               <h3>CSS Borders</h3>
               <p>In CSS, we can decorate borders with lines, make it square or rounded.</p>
               <h3>Border Style</h3>
               <p>The <b>border-style</b> CSS property sets the line style for all four sides of an element's border.</p>
               <p><b>Valid Values:</b></p>
               <ul>
                  <li><b>none</b>: displays no border</li>
                  <li><b>hidden</b>: displays no border</li>
                  <li><b>dotted</b>: displays a series of rounded dots</li>
                  <li><b>dashed</b>: displays a series of short square-ended dashes or line segments</li>
                  <li><b>solid</b>: displays a single, straight, solid line</li>
                  <li><b>double</b>: displays two straight lines</li>
                  <li><b>groove</b>: displays a border with a carved appearance</li>
                  <li><b>ridge</b>: displays a border with an extruded appearance</li>
                  <li><b>inset</b>: displays a border that makes the element appear embedded</li>
                  <li><b>outset</b>: displays a border that makes the element appear embossed</li>
               </ul>
               <h5>Example:</h5>
               <pre>
                  <code>{syntax_1}</code>
               </pre>
               <h3>Border Width</h3>
               <p>We can specify the widths of an element's borders using the <b>border-width</b> CSS property.</p>
               <p><b>Valid Values:</b></p>
               <ul>
                  <li><b>thin</b>: display a thin border</li>
                  <li><b>medium</b>: display a medium border</li>
                  <li><b>thick</b>: display a thick border</li>
                  <li><b>{syntax_2}</b></li>
               </ul>
               <p>Below is an example of using a {syntax_2} value.</p>
               <h5>Example:</h5>
               <pre>
                  <code>{syntax_3}</code>
               </pre>
               <h3>Border Color</h3>
               <p>The <b>border-color</b> CSS property defines the color of a border.</p>
               <p><b>Valid Value:</b></p>
               <ul><li><b>{syntax_4}</b></li></ul>
               <h5>Example:</h5>
               <pre>
                  <code>{syntax_5}</code>
               </pre>
               <h3>CSS Borders - Individual Sides</h3>
               <p>In CSS, we can specify border styles, widths and colors on each side (top, right, bottom, left).</p>
               <p>We can achieve this by using the following CSS properties.</p>
               <ul>
                  <li><b>border-top-style</b></li><li><b>border-right-style</b></li>
                  <li><b>border-bottom-style</b></li><li><b>border-left-style</b></li>
                  <li><b>border-top-width</b></li><li><b>border-right-width</b></li>
                  <li><b>border-bottom-width</b></li><li><b>border-left-width</b></li>
                  <li><b>border-top-color</b></li><li><b>border-right-color</b></li>
                  <li><b>border-bottom-color</b></li><li><b>border-left-color</b></li>
               </ul>
               <p>Changing border style on each side example:</p>
               <pre>
                  <code>{syntax_6}</code>
               </pre>
               <p>Changing border width on each side example:</p>
               <pre>
                  <code>{syntax_7}</code>
               </pre>
               <p>Changing border color on each side example:</p>
               <pre>
                  <code>{syntax_8}</code>
               </pre>
               <h3>CSS Border - Shorthand Property</h3>
               <p>The border CSS property sets an element's border. It's a shorthand for the following CSS properties:</p>
               <ul>
                  <li><b>border-width</b></li>
                  <li><b>border-style</b></li>
                  <li><b>border-color</b></li>
               </ul>
               <p>As with all shorthand properties, any omitted sub-values will be set to their initial sub-value.</p>
               <p>However, in this shorthand property the <b>border-style</b> value is required.</p>
               <pre>
                  <code>{syntax_9}</code>
               </pre>
               <h3>CSS Borders - Specifying Values</h3>
               <p>The border-style , border-width and border-color CSS properties can have one, two, three or four values.</p>
               <h5>One Value</h5>
               <p>When one value is specified, it applies the same style, width or color to all four sides.</p>
               <pre>
                  <code>{syntax_10}</code>
               </pre>
               <h5>Two Values</h5>
   				<p>When <b>two values</b> are specified, the first styles, widths or colors apply to the <b>top and bottom</b>, the second to the <b>left and right</b>.</p>
               <pre>
                  <code>{syntax_11}</code>
               </pre>
               <h5>Three Values</h5>
				   <p>When <b>three values</b> are specified, the first styles, widths or colors apply to the <b>top</b>, the second to the <b>left and right</b>, the third to the <b>bottom</b>.</p>
               <pre>
                  <code>{syntax_12}</code>
               </pre>
               <h5>Four Values Example:</h5>
				   <p>When <b>four values</b> are specified, the styles, widths or colors apply to the <b>top</b>, <b>right</b>, <b>bottom</b>, and <b>left</b> in that order (clockwise) respectively.</p>
               <pre>
                  <code>{syntax_13}</code>
               </pre>
               <p><b>Note!</b> The <b>border</b> property increases elements outer size except <b>{syntax_14}</b> and <b>{syntax_15}</b> elements.</p>
					<p>For instance, an element with a width and height of 20px and a border of 5px will have an outer width and height of 30px (20px width + 5px border-left-width + 5px border-right-width = 30px outer width).</p>
               

				   <div class="container mt-4 mb-4 d-flex justify-content-between">
                    <Link class="btn btn-primary" to="/css-tutorials/css-backgrounds"><Adl /> Previous</Link>
                    <Link class="btn btn-primary" to="/css-tutorials/css-margins">Next <Adr /></Link>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Css_borders;