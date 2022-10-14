import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Adl from "../Adl";
import Adr from "../Adr";


const Css3_backgrounds = () => {
const syntax_1 = `
  body{
   background-image: url("image1.jpg"), url("image2.jpg");
  }
`
const syntax_2 = `<length>`
const syntax_3 = `<percentage>`
const syntax_4 = `
  body{
   background-image: url("image1.jpg"), url("image2.jpg");
   /* try changing the values below to see the effect */
   background-size: 50px 100px;
  }
`
const syntax_5 = `
  body{
   background-image: url("image.jpg");
   background-repeat: no-repeat; 
   background-position: fixed; 
   background-attachment: center;
   / * keep increasing the value of * /
   / * the background-size property * /
   / * until the background covers */
   / * the entire page * /
   background-size: 100% 100vh;
  }
`
const syntax_6 = `
  div{
   color: white;
   width: 300px;
   height: 300px;
   border: 10px double black;
   padding: 20px; 
   background-image: url("image.jpg");
   background-repeat: no-repeat;
  }
  #div1{
   background-origin: border-box;
  }
  #div2{
   background-origin: padding-box;
  }
  #div3{
   background-origin: content-box;
  }
`
const syntax_7 = `
  div{
   color: white;
   font-size: 35px;
   width: 300px;
   height: 300px;
   border: 10px double black;
   padding: 20px; 
   background-image: url("image.jpg");
  }
  #div1{
   background-origin: border-box;  
  }
  #div2{
   background-origin: padding-box;
  }
  #div3{
   background-origin: content-box; 
  }
`
const syntax_8 = `
  div{
   color: transparent; 
   font-size: 35px; 
   font-weight: bold; 
   text-align: center; 
   width: 300px; 
   height: 300px; 
   border: 10px double #000; 
   padding: 20px; 
   background: url("image.jpg"); 
   background-size: 100% 100%;
   background-repeat: no-repeat; 
   background-clip: text; 
   -webkit-background-clip: text;
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
          <h3>CSS3 Backgrounds</h3>
          <p>CSS3 adds new background properties which allows us to have greater control of them.</p>
          <p>You will learn new ways about backgrounds in this lesson. You will also learn the following CSS3 properties.</p>
          <ul>
            <li><b>background-size</b></li>
            <li><b>background-origin</b></li>
            <li><b>background-clip</b></li>
          </ul>
          <h3>CSS3 Multiple Backgrounds</h3>
          <p>We can have multiple background images using the <b>background-image</b> property.</p>
          <p>We simply need to separate the URLs or file paths of the images with a comma <b>,</b>.</p>
          <p>The background images are drawn on stacking context layers on top of each other. The first layer specified is drawn as if it is closest to the user.</p>
          <pre className='mb-1'>
            <code>{syntax_1}</code>
          </pre>
          <div className='mb-5' style={{backgroundImage: "url('../images/aim.png'), url('../images/img.jpg')", width: "500px", height: "300px"}}></div>
          <h3>CSS3 background-size Property</h3>
          <p>CSS3 allows us to change the size of a background using the background-size property.</p>
          <h5>Valid Values:</h5>
          <ul>
            <li><b>cover</b></li>
            <li><b>contain</b></li>
            <li><b>inherit</b></li>
            <li><b>initial</b></li>
            <li><b>unset</b></li>
            <li><b>{syntax_2}</b></li>
            <li><b>{syntax_3}</b></li>
            <li>Two-value syntax where first value is width, second value is height. First and second values could be <b>{syntax_2}</b> and/or <b>{syntax_3}</b> .</li>
          </ul>
          <p>See <Link to="/css-tutorials/css3-background-size-property">Output</Link></p>
          {/* <p>See <a href="css3-background-size-property.php" target="_blank">Output</a></p><br/> */}
          <p>We can resize multiple backgrounds using the <b>background-size</b> property.</p>
          <p>The values are separated by commas. The order is from first to last backgrounds specified.</p>
          <pre className='mb-1'>
            <code>{syntax_4}</code>
          </pre>
          <div className='mb-5' style={{backgroundImage: "url('../images/aim.png'), url('../images/img.jpg')", backgroundSize: "50px 100px", width: "500px", height: "300px"}}></div>
          <h3>Full Size Background Image</h3>
          <p>We can make a background image cover the full page with the following CSS declarations.</p>
          <pre className='mb-1'>
            <code>{syntax_5}</code>
          </pre>
          <div className='mb-5' style={{backgroundImage: "url('../images/img.jpg')", backgroundRepeat: "no-repeat", backgroundPosition: "fixed", backgroundAttachment: "center", backgroundSize: "100% 100vh", width: "100%", height: "85vh"}}></div>
          <h3>CSS background-origin Property</h3>
          <p>The <b>background-origin</b> property sets the origin position of an image set with the background-image property.</p>
          <h5>Valid Values:</h5>
          <ul>
            <li><b>border-box</b>: positions the background relative to the border box</li>
            <li><b>padding-box</b>: positions the background relative to the padding box</li>
            <li><b>content-box</b>: positions the background relative to the content box</li>
          </ul>
          <pre className='mb-1'>
            <code>{syntax_6}</code>
          </pre>
          <div className='mb-5'>
            <div class="css3-back-div2 div1" style={{background: 'url("../images/img.jpg")'}}>div-1</div>
            <div class="css3-back-div2 div2" style={{background: 'url("../images/img.jpg")'}}>div-2</div>
            <div class="css3-back-div2 div3" style={{background: 'url("../images/img.jpg")'}}>div-3</div>
          </div>

          <h3>CSS background-clip Property</h3>
          <p>The <b>background-clip</b> CSS property sets whether an element's background color or image extends underneath its border.</p>
          <h5>Valid Values:</h5>
          <ul>
            <li><b>border-box</b>: The background extends to the outside edge of the border (but underneath the border in z-ordering).</li>
            <li><b>padding-box</b>: The background extends to the outside edge of the padding. No background is drawn beneath the border.</li>
            <li><b>content-box</b>: The background is painted within (clipped to) the content box.</li>
            <li><b>text</b>: The background is painted within (clipped to) the foreground text.</li>
          </ul>
          <pre className='mb-1'>
            <code>{syntax_7}</code>
          </pre>
          <div className="mb-5">
            <div className="css3-back-div2 div1" style={{background: 'url("../images/img.jpg")'}}>div-1</div>
            <div className="css3-back-div2 div2" style={{background: 'url("../images/img.jpg")'}}>div-2</div>
            <div className="css3-back-div2 div3" style={{background: 'url("../images/img.jpg")'}}>div-3</div>
          </div>
          <p>Here is a demo of the text value:</p>
          <pre className='mb-1'>
            <code>{syntax_8}</code>
          </pre>
          <div class="css3-back-div3 text-white" style={{background: 'url("../images/img.jpg")'}}>div-1</div>


		      <div className="container mt-4 mb-4 d-flex justify-content-between">
            <Link className="btn btn-primary" to="/css-tutorials/css3-colors"><Adl /> Previous</Link>
            <Link className="btn btn-primary" to="/css-tutorials/css3-gradients">Next <Adr /></Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Css3_backgrounds;