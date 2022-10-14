import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Adl from "../Adl";
import Adr from "../Adr";


const Css3_border_images = () => {
const syntax_1 = `<url>`
const syntax_2 = `
  div{
   margin: 10px; 
   width: 250px; 
   height: 150px;
  }
  #border-image-1{
   border: 10px solid transparent; 
   padding: 15px; 
   border-image: url("image.jpg") round 50;
  }
  #border-image-2{
   border: 10px solid transparent; 
   padding: 15px; 
   border-image: url("image.jpg") round 20%;
  }
  #border-image-3{
   border: 10px solid transparent; 
   padding: 15px; 
   border-image: url("image.jpg") round 30%;
  }
`
const syntax_3 = `
  div{
   margin: 10px; 
   width: 250px; 
   height: 150px; 
  }
  #border-image-1{
   border: 10px solid transparent; 
   padding: 15px; 
   border-image: url("image.jpg") fill 30;
  }
`
const syntax_4 = `
  #outset{
   width: 10rem; 
   background: #cef; 
   border: 1.4rem solid; 
   border-image: url("image.jpg") 40; 
   border-image-outset: 1.5; /* = 1.5 * 1.4rem = 2.1rem */
   margin: 2.1rem;
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
          <h3>CSS3 Border Images</h3>
          <p>The border-image CSS property is a shorthand for the following.</p>
          <ul>
            <li><b>border-image-source</b>: sets the source image used to create an element's border image. Valid value: <b>{syntax_1}</b></li>
            <li><b>border-image-slice</b>: divides the image specified by border-image-source into regions which form the components of an element's border image.</li>
            <li><b>border-image-width</b>: sets the width of an element's border image.</li>
            <li><b>border-image-outset</b>: sets the distance by which an element's border image is set out from its border box.</li>
            <li><b>border-image-repeat</b>: defines how the edge regions of a source image are adjusted to fit the dimensions of an element's border image.</li>
          </ul>
          <p><b>Note!</b> As with all shorthand properties, any omitted sub-values will be set to their initial value.</p>
          <h3>Slicing CSS3 Border Images</h3>
          <p>Here is an example of different slice values:</p>
          <pre className='mb-1'>
            <code>{syntax_2}</code>
          </pre>
          <div className='d-flex mb-5'>
            <div className="bor-img-common1" style={{borderImage: 'url("../images/img.jpg") round 50'}}>div-1</div>
            <div className="bor-img-common1" style={{borderImage: 'url("../images/img.jpg") round 20%'}}>div-2</div>
            <div className="bor-img-common1" style={{borderImage: 'url("../images/img.jpg") round 30%'}}>div-3</div>
          </div>

          <p><b>Note!</b> For the <b>border-image</b> to work, the element also needs the <b>border</b> property set.</p>
          <p>Here is an another example: (this time the middle section of the image is stretched)</p>
          <pre className='mb-1'>
            <code>{syntax_3}</code>
          </pre>
          <div className="bor-img-common1 mb-5" style={{borderImage: 'url("../images/img.jpg") fill 30'}}></div>
          <h3>CSS3 Outset Border Images</h3>
          <p>Here is an example of a border image out from its border box.</p>
          <pre className='mb-1'>
            <code>{syntax_4}</code>
          </pre>
          <div className="bor-img-outset mb-5" style={{borderImage: 'url("../images/img.jpg") 40'}}>This element has an outset border image.</div>


		      <div className="container mt-4 mb-4 d-flex justify-content-between">
            <Link className="btn btn-primary" to="/css-tutorials/css3-rounded-corners"><Adl /> Previous</Link>
            <Link className="btn btn-primary" to="/css-tutorials/css3-colors">Next <Adr /></Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Css3_border_images;