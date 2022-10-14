import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Adl from "../Adl";
import Adr from "../Adr";


const Css_images = () => {
const syntax_1 = `
  img{
    border-radius: 10px;
  }
`
const syntax_2 = `
  img{
    border-radius: 50%;
  }
`
const syntax_3 = `
  img{
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 5px;
    width: 125px;
  }
`
const syntax_4 = `
  img{
    max-width: 100%;
    height: auto;
  }
`
const syntax_5 = `
  img{
    display: block;
    margin-left: auto;
    margin-right: auto;
    /* or margin 0 auto */
    width: 170px;
  }
`
const syntax_6 = `
  #img1{
    opacity: 0.4;
  }
  #img2{
    opacity: 0.7;
  }
  #img3{
    /* default */
    opacity: 1.0;
  }
`
const syntax_7 = `<span>`
const syntax_8 = `
  .container{
    position: relative;
  }
  .container .top-left{
    position: absolute;
    top: 5px;
    left: 8px;
  }
  .container .top-right{
    position: absolute;
    top: 5px;
    right: 8px;
  }
  .container .center{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
  }
  .container .bottom-left{
    position: absolute;
    bottom: 5px;
    left: 8px;
  }
  .container .bottom-right{
    position: absolute;
    bottom: 5px;
    left: 8px;
  }
  .container img{
    width: 100%;
    height: auto;
    opacity: 0.4;
  }
`
const syntax_9 = `
  .card{
    box-shadow: 0 15px 30px rgba(0,0,0,0.30), 0 11px 8px rgba(0,0,0,0.22);
    width: 25px;
    box-sizing: border-box;
    transition-duration: 1s;
  }
  .card > img{
    display: block;
    max-width: 100%;
    height: auto;
    margin: 0;
  }
  .card > p{
    font-family: sans-serif;
    padding: 0 10px 10px 10px;
    text-align: center;
  }
  .card:hover{
    box-shadow: 0 18px 36px rgba(0,0,0,0.30), 0 14px 11px rgba(0,0,0,0.22);
    width: 270px;
  }
`
const syntax_10 = `
  .img1{ filter: none; }
  .img2{ filter: blur(4px); }
  .img3{ filter: brightness(0.5); }
  .img4{ filter: contrast(180%); }
  .img5{ filter: drop-shadow(12px 12px 16px rgb(23, 52, 89));  }
  .img6{ filter: grayscale(45%); }
  .img7{ filter: hue-rotate(90deg); }
  .img8{ filter: invert(75%); }
  .img9{ filter: opacity(40%); }
  .img10{ filter: saturate(30%); }
  .img11{ filter: sepia(60%); }
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
         <h3>CSS Images</h3>
    		<p>In CSS, we can style images in many ways. We can make it rounded, circled, responsive etc.</p>
         <h3>CSS Rounded Image</h3>
         <p>To make a rounded image, we can use the <b>border-radius</b> CSS property.</p>
         <pre className='bottom'>
            <code>{syntax_1}</code>
         </pre>
         <img className='mb-5' src="/images/img.jpg" style={{borderRadius: "10px", width: "250px", height: "240px"}} alt="image loading error"></img>
         <h3>CSS Circled Image</h3>
         <p>To make a circled image, we can set the <b>border-radius</b> CSS <b>50%</b>.</p>
         <pre className='bottom'>
            <code>{syntax_2}</code>
         </pre>
         <img className='mb-5' src="/images/img.jpg" style={{borderRadius: "50%", width: "250px", height: "240px"}} alt="image loading error"></img>
         <h3>CSS Thumbnail Image</h3>
         <p>We can make a thumbnail by adding a border and padding to an image.</p>
         <pre className='bottom'>
            <code>{syntax_3}</code>
         </pre>
         <img className='mb-5' src="/images/img.jpg" style={{border: "1px solid #ddd", borderRadius: "5px", padding: "5px", width: "125px", height: "125px"}} alt="image loading error"></img>
         <h3>CSS Responsive Image</h3>
         <p>Here is how to make an image responsive:</p>
         <pre className='bottom'>
            <code>{syntax_4}</code>
         </pre>
         <img className='mb-5' src="/images/img.jpg" style={{maxWidth: "100%", height: "3%"}} alt="image loading error"></img>
         <h3>CSS Centered Image</h3>
         <p>To center an image, we have to set the <b>display</b> CSS property to <b>block</b> and set the left and right margin to <b>auto</b>.</p>
         <pre className='bottom'>
            <code>{syntax_5}</code>
         </pre>
         <img className='mb-5' src="/images/img.jpg" style={{display: "block", marginLeft: "auto", marginRight: "auto", width: "250px"}} alt="image loading error"></img>
         <h3>CSS Transparent Images</h3>
         <p>We can use the <b>opacity</b> CSS property to make images transparent.</p>
         <p>It can take a value from <b>0.0</b> to <b>1.0</b>, the lower the value the more transparent an image is.</p>
         <pre className='bottom'>
            <code>{syntax_6}</code>
         </pre>
         <img className='mb-5' src="/images/img.jpg" style={{opacity: "0.4", width: "200px", height: "180px", marginRight: "3px"}} alt="image loading error" />
         <img className='mb-5' src="/images/img.jpg" style={{opacity: "0.7", width: "200px", height: "180px", marginRight: "3px"}} alt="image loading error" />
         <img className='mb-5' src="/images/img.jpg" style={{opacity: "1.0", width: "200px", height: "180px"}} alt="image loading error" />
         <h3>CSS Positioning Text on an Image</h3>
         <p>To position text on an image, we should wrap the image in a container.</p>
         <p>Next, set the <b>position</b> CSS property of the container to <b>relative</b> and the <b>{syntax_7}</b> element to <b>absolute</b>, this is where the text goes.</p>
         <p>Then we can position the <b>{syntax_7}</b> element using the <b>top</b>, <b>right</b>, <b>left</b> and <b>bottom</b> CSS properties.</p>
         <h5>Top Left, Top Right, Center, Bottom Left and Bottom Right Example:</h5>
         <pre className='bottom mt-3'>
            <code>{syntax_8}</code>
         </pre>
         <div className="css-img-syn-8 mb-5">
            <img src="/images/img.jpg" alt="image loading error" />
            <span class="top-left">Top Left</span>
            <span class="top-right">Top Right</span>
            <span class="center">Center</span>
            <span class="bottom-left">Bottom Left</span>
            <span class="bottom-right">Bottom Right</span>
         </div>
         <h3>CSS Image Card</h3>
         <p>Here is how to make an image card with a description box.</p>
         <pre className='bottom'>
            <code>{syntax_9}</code>
         </pre>
         <div class="css-img-card-syn-9 mb-5">
            <img src="/images/img.jpg" alt="image loading error" />
            <p>Try clicking and holding me to see<br /> the hover effect.</p>
         </div>
         <h3>CSS Image Filters</h3>
         <p>The <b>filter</b> CSS property applies graphical effects like blur or color shift to an element.</p>
         <p>It accepts CSS functions as valid values.</p>
         <h5>Here is an example:</h5>
         <pre className='bottom'>
            <code>{syntax_10}</code>
         </pre>
         <img className='mb-5' class="css-img css-img1" src="/images/img.jpg" alt="image loading error" />
         <img className='mb-5' class="css-img css-img2" src="/images/img.jpg" alt="image loading error" />
         <img className='mb-5' class="css-img css-img3" src="/images/img.jpg" alt="image loading error" />
         <img className='mb-5' class="css-img css-img4" src="/images/img.jpg" alt="image loading error" />
         <img className='mb-5' class="css-img css-img5" src="/images/img.jpg" alt="image loading error" />
         <img className='mb-5' class="css-img css-img6" src="/images/img.jpg" alt="image loading error" />
         <img className='mb-5' class="css-img css-img7" src="/images/img.jpg" alt="image loading error" />
         <img className='mb-5' class="css-img css-img8" src="/images/img.jpg" alt="image loading error" />
         <img className='mb-5' class="css-img css-img9" src="/images/img.jpg" alt="image loading error" />
         <img className='mb-5' class="css-img css-img10" src="/images/img.jpg" alt="image loading error" />
         <img className='mb-5' class="css-img css-img11" src="/images/img.jpg" alt="image loading error" />


		   <div class="container mt-4 mb-4 d-flex justify-content-between">
            <Link class="btn btn-primary" to="/css-tutorials/css-buttons"><Adl /> Previous</Link>
            <Link class="btn btn-primary" to="/css-tutorials/css-layout-the-display-property">Next <Adr /></Link>
         </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Css_images;