import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Adl from "../Adl";
import Adr from "../Adr";

const Css_box_models = () => {
const syntax_1 = `
  div{
    padding: 20px;
    border: 5px solid black;
    margin: 40px;
  }
`
const syntax_2 = `<div>`
const syntax_3 = `
  div{
    width: 200px;
    height: 200px;
    padding: 50px;
    border: 20px solid black;
  }
`
const syntax_4 = `
  div{
    box-sizing: border-box;
    width: 200px;
    height: 200px;
    padding: 50px;
    border: 20px solid black;
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
          <h3>CSS Box Models</h3>
    			<p>CSS box model is the foundation of design and layout of the Web.</p>
          <p>It is simply a box or a rectangular box.</p>
          <p><b>Note!</b> Before we can study and create CSS Layouts, we have to understand CSS box models first.</p>
          <p>In CSS box model, each element is represented as a box with the following parts or properties:</p>
    			<ul>
    				<li><b>content</b>: also called content box/area; it is the area where the content of the box is displayed</li>
				  	<li><b>padding</b>: the space or area between the outer edge of the content box and the inner edge of the border; it is transparent</li>
					  <li><b>border</b>: the area between margin and the padding; its width, style and color can be changed</li>
					  <li><b>margin</b>: the area or space outside the border or outside the CSS box; it is transparent</li>
    			</ul>
          <p>Each part or property is built up around another layer by layer.</p>
          <p>To better understand the CSS box model. Here is an illustration:</p>
          <div class="box-model-img"><img src="../images/CSS_Box_Models1.png" alt="image loding error" /></div>
          <h5>Example:</h5>
          <pre>
            <code>{syntax_1}</code>
          </pre>
          <h3>Width and Height of a CSS Box</h3>
          <p>To get the total width or height of a CSS Box we have to use the following formulas.</p>
          <p>CSS Box's width = left border's width + left padding's width + content box's width + right padding's width + right border's width</p>
          <p>CSS Box's height = top border's height + top padding's height + content box's height + bottom padding's height + bottom border's height</p>
          <p>For example, if a <b>{syntax_2}</b> element has the following CSS declarations...</p>
          <pre>
            <code>{syntax_3}</code>
          </pre>
          <p>...its total width/height would then be 340px:</p>
          <p>CSS Box's width = 20px (left border) + 50px (left padding) + 200px (content box's width) + 50px (right padding) + 20px (right border) = 340px</p>
          <p>CSS Box's height = 20px (top border) + 50px (top padding) + 200px (content box's height) + 50px (bottom padding) + 20px (bottom border) = 340px</p>
          <p>You must have noticed that the <b>width</b> and <b>height</b> CSS properties only set the width/height of the content box not the entire CSS box:</p>
          <div class="box-model-img"><img src="../images/CSS_Box_Models2.png" alt="image loding error" /></div>
          <p>Isn't that annoying? Yes, in some cases.</p>
          <p>For example if we only want a CSS Box to occupy the 50% of the width including the border and the padding.</p>
          <p>To achieve something like that we need the <b>box-sizing</b> CSS property be set to <b>border-box</b></p>
          <pre>
            <code>{syntax_4}</code>
          </pre>
          <p>Now the final rendered width/height of the element is only <b>200px</b>.</p>
          <p>It is because the padding and borders are already included inside the <b>200px</b>.</p>
          <p>Note! It is highly recommended to use this approach in web design.</p>
          <p>Here is the illustration of how it works.</p>
          <div class="box-model-img"><img src="../images/CSS_Box_Models3.png" alt="image loding error" /></div>
          <h5>CSS Box Terminologies:</h5>
          <ul>
             <li><b>content box/area</b>- the area where the content of the box is displayed</li>
             <li><b>padding box/area</b>- the content area and the element's padding combined</li>
             <li><b>border box/area</b>- the padding area and the element's borders combined</li>
             <li><b>margin box/area</b>- the border area and the element's margins combined</li>
          </ul>
               

			    <div class="container mt-4 mb-4 d-flex justify-content-between">
            <Link class="btn btn-primary" to="/css-tutorials/css-width-and-height"><Adl /> Previous</Link>
            <Link class="btn btn-primary" to="/css-tutorials/css-text">Next <Adr /></Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Css_box_models;