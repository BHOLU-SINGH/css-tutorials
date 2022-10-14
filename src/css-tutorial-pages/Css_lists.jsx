import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Adl from "../Adl";
import Adr from "../Adr";

const Css_lists = () => {
const syntax_1 = `<ul>`
const syntax_2 = `<ol>`
const syntax_3 = `<li>`
const syntax_4 = `
  #ul1{
    list-style-type: none;
  }
  #ul2{
    list-style-type: disc;
  }
  #ul3{
    list-style-type: circle;
  }
  #ul4{
    list-style-type: square;
  }
`
const syntax_5 = `
  #ol1{
    list-style-type: none;
  }
  #ol2{
    list-style-type: decimal;
  }
  #ol3{
    list-style-type: lower-roman;
  }
  #ol4{
    list-style-type: lower-alpha;
  }
`
const syntax_6 = `
  #outside{
    list-style-position: outside;
  }
  #inside{
    list-style-position: inside;
  }
`
const syntax_7 = `
  ul{
    list-style-image: url("images/icon.png");
  }
`
const syntax_8 = `
  ul{
    padding-left: 20px;
    list-style-type: none;
  }
  /* the selector below targets the */
  /* li elements inside the ul element */
  ul li{
    padding-left: 20px;
    background-image: url("images/icon.png");
    background-position: top left;
    background-size: 16px 16px;
    background-repeat: no-repeat;
  }
`
const syntax_9 = `
  ol{
    list-style-type: upper-roman;
    color: #f8f9f9;
    background: #173459;
    padding: 15px;
  }
  ul{
    list-style-type: square;
    color: #f8f9f9;
    background: #173459;
    padding: 15px;
  }
  ol li{
    background: #d9534f;
    padding: 5px;
    margin-left: 30px;
  }
  ul li{
    background: #d9534f;
    padding: 5px;
    margin-left: 30px;
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
         <h3>CSS Lists</h3>
    		<p>In CSS, there are a lot of options for styling HTML lists. We can change its bullets, colors, positions etc.</p>
         <p>If you're unfamiliar with HTML Lists you can install this Learn HTML app for free!</p>
         <p>Let's have a quick review. In HTML there are two types of lists:</p>
         <ul>
            <li><b>{syntax_1}</b>: an unordered list; list items are marked with bullets</li>
            <li><b>{syntax_2}</b>: an ordered list; list items are marked with numbers or letters</li>
         </ul>
         <p>And then we have the <b>{syntax_3}</b> element which defines the list items for both unordered and ordered lists.</p>
         <h3>CSS List Bullet Styles/Types</h3>
         <p>The <b>list-style-type</b> CSS property sets the bullet type or marker to use.</p>
         <h5>Valid Values:</h5>
         <ul>
            <li><b>none</b>: no bullet type</li>
            <li><b>disc</b>: a filled circle; default value</li>
            <li><b>circle</b>: a hollow circle</li>
            <li><b>square</b>: a filled square</li>
            <li><b>decimal</b>: decimal numbers e.g. I, 2, 3</li>
            <li><b>decimal-leading-zero</b>: decimal numbers with leading zeros e.g. 01, 02, 03</li>
            <li><b>lower-roman</b>: lowercase roman numerals e.g. i, ii, iii</li>
            <li><b>upper-roman</b>: uppercase roman numerals e.g. I, II, III</li>
            <li><b>lower-alpha</b>: lowercase letters e.g. a, b, c</li>
            <li><b>upper-alpha</b>: uppercase letters e.g. A, B, C</li>
            <li><b>lower-greek</b>: lowercase classical greek e.g. a, ß, y</li>
            <li><b>arabic-indic</b>: traditional Arabic-Indic numbering</li>
            <li><b>georgian</b>: traditional Georgian numbering</li>
            <li><b>hebrew</b>: traditional Hebrew numbering</li>
            <li><b>armenian</b>: traditional Armenian numbering</li>
         </ul>
         <p>Here is an example of an <b>unordered list</b> bullet types.</p>
         <pre>
            <code>{syntax_4}</code>
         </pre>
         <ul>
            <li style={{listStyleType: "none"}}>none</li>
            <li style={{listStyleType: "disc"}}>disc</li>
            <li style={{listStyleType: "circle"}}>circle</li>
            <li style={{listStyleType: "sqaure"}}>sqaure</li>
         </ul><br />
         <p>Here is an example of an <b>ordered list</b> bullet types.</p>
         <pre>
            <code>{syntax_5}</code>
         </pre>
         <ul>
            <li style={{listStyleType: "none"}}>none</li>
            <li style={{listStyleType: "decimal"}}>decimal</li>
            <li style={{listStyleType: "lower-roman"}}>lower-roman</li>
            <li style={{listStyleType: "lower-alpha"}}>lower-alpha</li>
         </ul><br />
         <h3>CSS List Bullet Position</h3>
         <p>The <b>list-style-position</b> CSS property sets the position (whether it's outside or inside) of the bullets.</p>
         <h5>Valid Values:</h5>
         <ul>
            <li><b>outside</b>: sets the bullets to sit outside the list items (default)</li>
            <li><b>inside</b>: sets the bullets to sit inside the list items</li>
         </ul>
         <h5>Example:</h5>
         <pre>
            <code>{syntax_6}</code>
         </pre>
         <ul>
            <li style={{listStylePosition: "outside"}}>outside</li>
            <li style={{listStylePosition: "inside"}}>inside</li>
         </ul><br />
         <h3>CSS List Bullet Images</h3>
         <p>In CSS, it's possible to have images as list bullets.</p>
         <p>The <b>list-style-image</b> CSS property sets an image as bullets. Example:</p>
         <pre>
            <code>{syntax_7}</code>
         </pre>
         <p>However, this property is very limited in terms of controlling the position, size etc. of the bullets.</p>
         <p>For that reason, we better use CSS background properties.</p>
         <pre>
            <code>{syntax_8}</code>
         </pre>
         <ul style={{paddingLeft: "20px", listStyleType: "none"}}>
          <li style={{paddingLeft: "20px", backgroundImage: "url('../images/aim.png')", backgroundPosition: "top left", backgroundSize: "16px 16px", backgroundRepeat: "no-repeat"}}>CSS List Bullet Images</li>
          </ul><br />
         <h3>CSS List with Padding, Margin and Colors</h3>
         <p>To make lists look interesting we can add paddings, margins and colors.</p>
         <p><b>Note!</b> Any style set to the <b>{syntax_1}</b> and <b>{syntax_2}</b> elements affects the entire list while any style added to the <b>{syntax_3}</b> element only affects list items.</p>
         <h5>Example:</h5>
         <pre>
            <code>{syntax_9}</code>
         </pre>
         <ul style={{listStyleType: "sqaure", color: "#f8f9f9", background: "#173459", padding: "15px"}}><li style={{background: "#d9534f", padding: "5px", marginLeft: "30px"}}>ul</li></ul>
         <ol style={{listStyleType: "upper-roman", color: "#f8f9f9", background: "#173459", padding: "15px"}}><li style={{background: "#d9534f", padding: "5px", marginLeft: "30px"}}>ol</li></ol>
               

		   <div class="container mt-4 mb-4 d-flex justify-content-between">
            <Link class="btn btn-primary" to="/css-tutorials/css-links"><Adl /> Previous</Link>
            <Link class="btn btn-primary" to="/css-tutorials/css-tables">Next <Adr /></Link>
         </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Css_lists;