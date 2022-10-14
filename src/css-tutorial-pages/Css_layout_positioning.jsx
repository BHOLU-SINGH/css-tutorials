import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Adl from "../Adl";
import Adr from "../Adr";


const Css_layout_positioning = () => {
const syntax_1= `<length>`
const syntax_2= `<percentage>`
const syntax_3= `
  div{
   position: static;
   width: 200px;
   height: 200px;
   background: #903C56;
   color: white;
  }
`
const syntax_4= `
  div.relative{
   position: relative;
   width: 100px;
   height: 100px;
   top: 25px;
   left: 25px;
   background: #903C56;
   color: white;
  }
`
const syntax_5= `
  div{
   position: fixed;
   width: 50px;
   height: 50px;
   top: 10px;
   right: 10px;
   background: #173459;
  }
`
const syntax_6= `
  div.container{
   position: relative;
   width: 300px;
   height: 300px;
   background: #78969D;
  }
  div.absolute{
   position: absolute;
   bottom: 10px;
   right: 10px;
   width: 50px;
   height: 50px;
   background: #f8f9f9;
  }
`
const syntax_7 = `
  div{
   position: relative;
  }
  p.top-left{
   position: absolute;
   top: 5px;
   left: 8px;
 }
  p.top-right{
   position: absolute;
   top: 5px;
   right: 8px;
  }
  p.center{
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   font-size: 16px;
  }
  p.bottom-left{
   position: absolute;
   bottom: 5px;
   left: 8px;
  }
  p.bottom-right{
   position: absolute;
   bottom: 5px;
   right: 8px;
  }
  img{
   width: 100%;
   height: auto;
   opacity: 0.4;
  }
`
const syntax_8 = `
  body{
   margin: 0;
   padding: 0;
   font-family: sans-serif;
  }
  div{
   position: sticky;
   position: -webkit-sticky; /* for Safari */
   top: 0;
   left: 0;
   width: 100%;
   color: white;
   padding: 5px;
   font-size: 18px;
  }
  .div1{
   background: #173459;
  }
  .div2{
   background: #78969D;
  } 
  .div3{
   background: #903C56;
  }
  .div4{
   background: #89C3D0;
  }
  p{
   padding: 0 10px;
  }
`
const syntax_9 = `<interger>`
const syntax_10 = `
  div{
   position: fixed;
   width: 60px;
   height: 60px;
 }
 .div1{
   z-index: 1;
   top: 10px;
   left: 10px;
   background: red;
  }
  .div2{
   z-index: 2;
   top: 20px;
   left: 20px;
   background: green;
  }
  .div3{
   z-index: 3;
   top: 30px;
   left: 30px;
   background: blue;
  }
  .div4{
   z-index: 4;
   top: 40px;
   left: 40px;
   background: yellow;
  }
  .div5{
   z-index: 5;
   top: 50px;
   left: 50px;
   background: pink;
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
          <h3>CSS Layout - Positioning</h3>
          <p>The position CSS property sets how an element is positioned.</p>
          <h5>Valid Values:</h5>
          <ul>
            <li><b>static</b></li>
            <li><b>relative</b></li>
            <li><b>fixed</b></li>
            <li><b>absolute</b></li>
            <li><b>sticky</b></li>
          </ul>
          <p>The <b>top</b>, <b>right</b>, <b>bottom</b> and <b>left</b> CSS properties sets the location of positioned elements.</p>
          <h5>Valid Values:</h5>
          <ul>
            <li><b>{syntax_1}</b></li>
            <li><b>{syntax_2}</b></li>
          </ul>
          <h3>CSS Static Position</h3>
          <p>By default, HTML elements are positioned <b>static</b></p>
          <p>It makes an element be positioned according to the normal flow of the document.</p>
          <p>The <b>top</b>, <b>right</b>, <b>bottom</b> and <b>left</b> CSS properties do not affect static positioned elements.</p>
          <pre className='mb-1'>
            <code>{syntax_3}</code>
          </pre>
          <div className="css-lay-pos-static mb-5 text-center">static</div>
          <h3>CSS Relative Position</h3>
          <p>With <b>position: relative</b>, the element is positioned according to the normal flow of the document.</p>
          <p>The <b>top</b>, <b>right</b>, <b>bottom</b> and <b>left</b> CSS properties specify the offset relative to itself — it will be adjusted from its normal position.</p>
          <p>Unlike the margin properties, it does not push against and affect other elements.</p>
          <pre className='mb-1'>
            <code>{syntax_4}</code>
          </pre>
          <div className="css-lay-pos-relative mb-5 text-center">relative</div>

          <h3>CSS Fixed Position</h3>
          <p>With <b>position: fixed</b>, the element is removed from the normal document flow, and no space is created for the element in the page layout.</p>
          <p>It makes an element be positioned relative to the viewport — the element stays in its location even when scrolling.</p>
          <p>The <b>top</b>, <b>right</b>, <b>bottom</b> and <b>left</b> CSS properties specify the distance between the top, right, bottom and left edge of the element and the top, right, bottom and left edge of the viewport accordingly.</p>
          <pre className='mb-1'>
            <code>{syntax_5}</code>
          </pre>
          <div className="css-lay-pos-fixed mb-5 text-center">fixed</div>

          <h3 className='mt-5'>CSS Absolute Position</h3>
          <p>With <b>position: absolute</b>, the element is removed from the normal document flow, and no space is created for the element in the page layout.</p>
          <p>It makes an element be positioned relative to its container (nearest parent/ancestor element).</p>
          <p>The container should be a positioned element. It is recommended to use the <b>relative</b> value as it is positioned according to the normal flow of the page.</p>
          <p><b>Note!</b> an element with <b>position: static</b> is nota "positioned element".</p>
          <p>The <b>top</b>, <b>right</b>, <b>bottom</b> and <b>left</b> CSS properties specify the distance between the <b>top</b>, <b>right</b>, <b>bottom</b> and <b>left</b> edges of the element and the <b>top</b>, <b>right</b>, <b>bottom</b> and <b>left</b> edge of its container accordingly.</p>
          <pre className='mb-1'>
            <code>{syntax_6}</code>
          </pre>
          <div className="css-lay-pos-container mb-5 text-center"><div class="absolute">absolute</div></div>

          <h3>Positioning Text on an Image</h3>
          <p>We can use the <b>position: absolute</b> to position text on an image.</p>
          <pre className='mb-1'>
            <code>{syntax_7}</code>
          </pre>
          <div class="css-lay-pos-div mb-5">
            <img class="css-lay-pos-div-img" src="../images/img.jpg" alt="image loading error" />
            <p class="top-left">Top Left</p>
            <p class="top-right">Top Right</p>
            <p class="center">Center</p>
            <p class="bottom-left">Bottom Left</p>
            <p class="bottom-right">Bottom Right</p>
          </div>

          <h3>CSS Sticky Position</h3>
          <p>With <b>position: relative</b>, the element is positioned according to the normal flow of the dæument. It offsets the element to nearest ancestor scrolling element.</p>
          <p>The <b>top</b>, <b>right</b>, <b>bottom</b> and <b>left</b> CSS properties specify the offset to the top, right, bottom and left edge of the nearest ancestor scrolling element.</p>
          <pre className='mb-1'>
            <code>{syntax_8}</code>
          </pre>
          <div class="css-lay-pos-sticky">
            <div class="div1">sticky position div1</div>
            <p>These tutorials provide easy and quick way to learn CSS.</p>
            <div class="div2">sticky position div2</div>
            <p>These tutorials provide easy and quick way to learn CSS.</p>
            <div class="div3">sticky position div3</div>
            <p>These tutorials provide easy and quick way to learn CSS.</p>
            <div class="div4">sticky position div4</div>
            <p className='mb-5'>These tutorials provide easy and quick way to learn CSS.</p>
          </div>

          <h3>CSS Stacking Context</h3>
          <p>The stacking context is a three-dimensional conceptualization of HTML elements along an imaginary z-axis relative to the user.</p>
          <p>The <b>fixed</b> and <b>absolute</b> position always creates a new stacking context.</p>
          <p>The <b>z-index</b> CSS property specifies the position of an element along the z-axis. It accepts <b>{syntax_9}</b> values.</p>
          <p>The higher the value, the closer the element to the user.</p>
          <pre className='mb-1'>
            <code>{syntax_10}</code>
          </pre>
          <div class="css-lay-pos-stacking div1 text-center">stacking1</div>
          <div class="css-lay-pos-stacking div2 text-center">stacking2</div>
          <div class="css-lay-pos-stacking div3 text-center">stacking3</div>
          <div class="css-lay-pos-stacking div4 text-center">stacking4</div>
          <div class="css-lay-pos-stacking div5 text-center">stacking5</div>


		      <div class="container mt-4 mb-4 d-flex justify-content-between">
            <Link class="btn btn-primary" to="/css-tutorials/css-layout-width-and-max-width"><Adl /> Previous</Link>
            <Link class="btn btn-primary" to="/css-tutorials/css-layout-overflow">Next <Adr /></Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Css_layout_positioning; 