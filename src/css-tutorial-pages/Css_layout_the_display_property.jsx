import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Adl from "../Adl";
import Adr from "../Adr";


const Css_layout_the_display_property = () => {
const syntax_1= `<p>`
const syntax_2= `<h1>`
const syntax_3= `<h6>`
const syntax_4= `<div>`
const syntax_5= `<ul>`
const syntax_6= `<ol>`
const syntax_7= `<li>`
const syntax_8= `<form>`
const syntax_9= `<section>`
const syntax_10= `<header>`
const syntax_11= `<nav>`
const syntax_12= `<main>`
const syntax_13= `<footer>`
const syntax_14 = `
  <h1> Block-Level Elements </h1>
  <p style="background: gold;"> Take up the full width </p>
  <div> and always start on a new line. </div>
`
const syntax_15= `<span>`
const syntax_16= `<i>`
const syntax_17= `<a>`
const syntax_18= `<img />`
const syntax_19= `
  <span> Inline elements </span>
  <i> Don't take up the full </i>
  <a href="#"> width and and does not start on a new line. </a>
  <img src="images/icon.png" />
`
const syntax_20 = `
  li{
   display: inline;
  }
`
const syntax_21 = `
  span{
   display: block;
  }
`
const syntax_22 = `
  img{
   display: none;
  }
`
const syntax_23 = `
  img{
   visibility: hidden;
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
          <h3>CSS Layout - The display Property</h3>
    			<p>The <b>display</b> CSS property specifies how an element should be displayed.</p>
          <h3>CSS Block-Level Elements</h3>
          <p>Block-level elements always take up the full width available.</p>
          <p>They create a horizontal boundary block. It means they always start on a new line.</p>
          <p>By default, a CSS block-level element's <b>display</b> property is set to <b>block</b> .</p>
          <h5>Examples of block-level elements:</h5>
          <ul>
            <li><b>{syntax_1}</b></li>
            <li><b>{syntax_2}</b>-<b>{syntax_3}</b></li>
            <li><b>{syntax_4}</b></li>
            <li><b>{syntax_5}</b> and <b>{syntax_6}</b></li>
            <li><b>{syntax_7}</b></li>
            <li><b>{syntax_8}</b></li>
            <li><b>{syntax_9}</b></li>
            <li><b>{syntax_10}</b></li>
            <li><b>{syntax_11}</b></li>
            <li><b>{syntax_12}</b></li>
            <li><b>{syntax_13}</b></li>
          </ul>
          <pre className='mb-1'>
            <code>{syntax_14}</code>
          </pre>
          <h1> Block-Level Elements </h1>
          <p className='mb-0' style={{background: "gold"}}> Take up the full width </p>
          <div className='mb-5'> and always start on a new line. </div>

          <h3>CSS Inline Elements</h3>
          <p>Inline elements does not take up the full width available.</p>
          <p>They don't create a horizontal boundary block. It means they do not start on a new line.</p>
          <p>By default, a CSS inline element's <b>display</b> property is set to <b>inline</b>.</p>
          <h5>Examples of inline elements:</h5>
          <ul>
            <li><b>{syntax_15}</b></li>
            <li><b>{syntax_16}</b></li>
            <li><b>{syntax_17}</b></li>
            <li><b>{syntax_18}</b></li>
          </ul>
          <pre className='mb-1'>
            <code>{syntax_19}</code>
          </pre>
          <span className='mb-5'> Inline elements </span>
          <i className='mb-5'> Don't take up the full </i>
          <a className='mb-5' href="#"> width and and does not start on a new line. </a>
          <img className='mb-5' src="../images/aim.png" alt="image loading error" width="20px" height="20px" />

          <h3>Changing Display Value</h3>
          <p>Here is an example of changing the <b>display</b> value from <b>block</b> to <b>inline</b>:</p>
          <pre className='mb-1'>
            <code>{syntax_20}</code>
          </pre>
          <ul className='mb-5'>
            <li class="dis-propty-dis-inline">First</li>
            <li class="dis-propty-dis-inline">Second</li>
            <li class="dis-propty-dis-inline">Third</li>
          </ul>
          <p>Here is an example of changing the <b>display</b> value from <b>inline</b> to <b>block</b>:</p>
          <pre className='mb-1'>
            <code>{syntax_21}</code>
          </pre>
          <span class="dis-propty-dis-block">First</span>
          <span class="dis-propty-dis-block">Second</span>
          <span class="dis-propty-dis-block mb-5">Third</span>

          <h3>CSS Hiding Elements</h3>
          <p>There are two possible ways of hiding elements with CSS:</p>
          <ol>
            <li>Set the <b>display</b> CSS property to <b>none</b>.</li>
            <li>Set the <b>visibility</b> CSS property to <b>hidden</b>.</li>
          </ol>
          <h5>The <b>display: none;</b> CS declaration example:</h5>
          <pre>
            <code>{syntax_22}</code>
          </pre>
          <img src="../images/aim.png" style={{display: "none", width: "100px", height: "100px"}} alt="image loading error"></img>

          <p>The <b>visibility: hidden;</b> CSS declaration example:</p>
          <pre>
            <code>{syntax_23}</code>
          </pre>
          <img src="../images/aim.png" style={{visibility: "hidden", width: "100px", height: "100px"}} alt="image loading error"></img>

          <p>Have you noticed the difference?</p>
            <p>The <b>display: none;</b> CS declaration hides the element as if it is not there and does not take up space while...</p>
            <p>The <b>visibility: hidden;</b> CSS declaration hides the element but still takes up space and affects the layout.</p>


		      <div class="container mt-4 mb-4 d-flex justify-content-between">
            <Link class="btn btn-primary" to="/css-tutorials/css-images"><Adl /> Previous</Link>
            <Link class="btn btn-primary" to="/css-tutorials/css-layout-width-and-max-width">Next <Adr /></Link>
         </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Css_layout_the_display_property; 