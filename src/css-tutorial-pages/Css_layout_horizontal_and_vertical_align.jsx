import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Adl from "../Adl";
import Adr from "../Adr";


const Css_layout_horizontal_and_vertical_align = () => {
const syntax_1 = `
  .center{
   text-align: center;
   width: 200px;
   border: 3px solid #173459;
  }
`
const syntax_2 = `
  .center{
   margin: 0 auto;  
   /* same as margin-top: 0; margin-right: auto; margin-bottom: 0; margin-left: auto; */
   width: 60%;
   padding: 20px;
   border: 3px solid #173459;
  }
`
const syntax_3 = `<img>`
const syntax_4 = `
  img{
   display: block;
   margin: 0 auto;  
   /* same as margin-top: 0; margin-right: auto; margin-bottom: 0; margin-left:  auto; */
   width: 60%;
   height: auto;
  }
`
const syntax_5 = `
  .left{
   text-align: left;
  }
  .right{
   text-align: right;
  }
  p{
   background: lightgrey;
   color: black;
  }
`
const syntax_6 = `
  .right{
   position: absolute;
   right: 0;
   width: 60%;
   padding: 10px;
   border: 3px solid #173459;
  }
`
const syntax_7 = `
  .right{
   float: right;
   width: 60%;
   padding: 10px;
   border: 3px solid #173459;
  }
`
const syntax_8 = `
  div{
   padding-top: 40px;
   padding-bottom: 40px;
   border: 3px solid #173459;
  }
`
const syntax_9 = `
  div{
   padding-top: 40px;
   padding-bottom: 40px;
   text-align: center;
   border: 3px solid #173459;
  }
`
const syntax_10 = `<div>`
const syntax_11 = `
  div.container{
   padding-top: 40px;
   padding-bottom: 40px;
   background: #903C56;
  }
  div.content{
   background: #89C3D0;
  }
`
const syntax_12 = `
  .bottom{
   position: absolute;
   bottom: 0;  /* use bottom property to align to the bottom side */
   width: 60%;
   padding: 10px;
   border: 3px solid #173459;
  }
`
const syntax_13 = `
  .bottom{
   width: 250px;
   line-height: 250px;
   text-align: center;
   font-size: 20px;
   background: lightgrey;
  }
`
const syntax_14 = `
  .center{
   position: relative;
   height: 500px;
   border: 3px solid #173459;
  }
  .center > p{
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
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
          <h3>CSS Layout - Horizontal and Vertical Align</h3>
          <p>In this lesson, we'll study how to align elements horizontally, vertically and both horizontally and vertically.</p>
          <h3>Horizontally</h3>
          <p>Here is how to horizontally align elements:</p>
          <h5>Horizontally Centering Text and Inline Elements</h5>
          <p>To center inline elements and/or text we need to set the <b>text-align</b> CSS property to <b>center</b>.</p>
          <pre className='mb-1'>
            <code>{syntax_1}</code>
          </pre>
          <div className='mb-5' style={{textAlign: "center", width: "200px", border: "3px solid #173459"}}>I love these css tutorials.</div>

          <h3>Horizontally Centering Block-Level Elements</h3>
          <p>To horizontally center a block-level element, set the left and right margins to auto.</p>
          <p>It makes the left and right margins of an element be equally divided on each side.</p>
          <p>Don't forget to set the element's <b>width</b> property so it will not stretch to the edges of its container.</p>
          <pre className='mb-1'>
            <code>{syntax_2}</code>
          </pre>
          <div className='mb-5' style={{margin: "0 auto", width: "60%", padding: "20px", border: "3px solid #173459"}}>I love these css tutorials.</div>
          <h3>Horizontally Centering an Image</h3>
          <p>To center an image we can simply use the same method as centering a block-level element.</p>
          <p>Since the <b>{syntax_3}</b> HTML element is an inline element by default we need to first set its <b>display</b> CSS property to <b>block</b>.</p>
          <pre className='mb-1'>
            <code>{syntax_4}</code>
          </pre>
          <img className='mb-5' src="../images/img.jpg" style={{display: "block", margin: "0 auto", width: "60%", height: "500px"}} alt="image loading error"></img>
          <h3>Left and Right Align Text</h3>
          <p>We can either left or right align text by setting the <b>text-align</b> CSS property.</p>
          <pre className='mb-1'>
            <code>{syntax_5}</code>
          </pre>
          <p class="hor-and-ver-align-left hor-and-ver-align">I love these css tutorials.</p>
          <p class="hor-and-ver-align-right hor-and-ver-align">I love these css tutorials.</p>
          <h3>Left and Right Align Elements</h3>
          <p>To left or right align elements use the <b>position</b> CSS property together with the <b>left</b> or <b>right</b> properties.</p>
          <pre className='mb-1'>
            <code>{syntax_6}</code>
          </pre>
          <div class="hor-and-ver-align-right-element">I love these css tutorials.</div>
          <p><b>Note!</b> If the element is wrapped in a container the container should have a <b>position: relative</b> declaration.</p>
          <p className='mb-5'>Another method is to use the <b>float</b> CSS property.</p>
          <pre className='mb-1'>
            <code>{syntax_7}</code>
          </pre>
          <div class="hor-and-ver-align-another-right-element">I love these css tutorials.</div>
          
          <h3 style={{marginTop: "5rem"}}>Vertically</h3>
          <p>Here is how to vertically align elements:</p>
          <h3>Vertically Centering Using Padding</h3>
          <p>To vertically center a text or element inside a container set the top and bottom paddings of the container with the same value.</p>
          <p>Here is how to vertically center a text using padding:</p>
          <pre className='mb-1'>
            <code>{syntax_8}</code>
          </pre>
          <div className="hor-and-ver-align-vertically-element mb-4">I love these css tutorials.</div>
          <p>You can set the <b>text-align</b> CSS property to <b>center</b> to both horizontally and vertically center the text:</p>
          <pre className='mb-1'>
            <code>{syntax_9}</code>
          </pre>
          <div className="hor-and-ver-align-vertically-element2 mb-5">I love these css tutorials.</div>
          <p>On the example below we will vertically center a <b>{syntax_10}</b> inside a <b>{syntax_10}</b> using padding.</p>
          <pre className='mb-1'>
            <code>{syntax_11}</code>
          </pre>
          <div className="hor-and-ver-align-vertically-element3 mb-5">
            <div className="content">
              <p style={{margin: "20px", textAlign: "justify"}}>These tutorials provide easy and quick way to learn css.</p>
              <p style={{margin: "20px", textAlign: "justify"}}>These tutorials provide easy and quick way to learn css.</p>
            </div>
          </div>
          <h3>Top and Bottom Align Elements</h3>
          <p>To top or bottom align elements use the <b>position</b> CSS property together with the <b>top</b> or <b>bottom</b> properties.</p>
          <pre className='mb-1'>
            <code>{syntax_12}</code>
          </pre>
          <div className="hor-and-ver-align-bottom-div mb-5">I love these css tutorials.</div>

          <p><b>Note!</b> If the element is wrapped in a container the container should have a <b>position: relative</b> declaration.</p>
          <h3>Both Horizontally and Vertically Centering a Text</h3>
          <p>To center a text both horizontally and vertically inside an element (or container) we simply need to: define the <b>line-height</b> property and set the <b>text-align</b> property to <b>center</b>.</p>
          <pre className='mb-1'>
            <code>{syntax_13}</code>
          </pre>
          <div className="hor-and-ver-align-hori-verti-div mb-5">I love these css tutorials.</div>
          <h3>Both Horizontally and Vertically Centering - Using Position</h3>
          <p>To horizontally and vertically center an element or text in a container we need to:</p>
          <ul>
            <li>Set the <b>position</b> property of the container to <b>relative</b>.</li>
            <li>Set the <b>position</b> property of the container to <b>absolute</b>.</li>
            <li>Position the element using the <b>top</b> and <b>left</b> properties.</li>
            <li>Use the <b>transform</b> CSS property.</li>
          </ul>
          <p>Here is how to exactly do it:</p>
          <pre className='mb-1'>
            <code>{syntax_14}</code>
          </pre>
          <div className="hor-and-ver-align-center-div mb-4"><p>I love these css tutorials.</p></div>
          <p><b>Note!</b> You'll learn about the <b>transform</b> CSS property in our 2D Transforms lesson.</p>


		      <div class="container mt-4 mb-4 d-flex justify-content-between">
            <Link class="btn btn-primary" to="/css-tutorials/css-layout-inline-block"><Adl /> Previous</Link>
            <Link class="btn btn-primary" to="/css-tutorials/css-combinators">Next <Adr /></Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Css_layout_horizontal_and_vertical_align; 