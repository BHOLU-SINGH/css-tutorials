import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Adl from "../Adl";
import Adr from "../Adr";


const Css3_transitions = () => {
const syntax_1 = `  .without-transition{
   width: 100px; 
   height: 100px; 
   background: black;
  }
  .with-transition{ 
   width: 100px; 
   height: 100px; 
   background: black; 
   transition-property: width; 
   transition-duration: 2s; 
   transition-delay: .5s; 
  }
  div:hover{
   width: 200px;
  }
`
const syntax_2 = `  div{ 
   width: 100px; 
   height: 100px; 
   background: #903C56; 
   transition-property: height; 
   transition-duration: 2s;
  }
  div:hover{
   height: 300px;
  }
`
const syntax_3 = `  div{ 
   width: 100px; 
   height: 100px; 
   background: #903C56; 
   transition-property: width, height, background; 
   transition-duration: 2s;
  }
  div:hover{
   width: 200px;
   height: 200px;
   background: #173459;
  }
`
const syntax_4 = `  div{  
   transition-property: width, background-color; 
   transition-duration: 2s; 
   width: 100px; 
   height: 100px; 
   background: blue;
  }
  #div1{
   transition-timing-function: ease;
  }
  #div2{
   transition-timing-function: linear;
  }
  #div3{
   transition-timing-function: ease-in;
  }
  #div4{
   transition-timing-function: ease-out;
  }
  #div5{
   transition-timing-function: ease-in-out;
  }
  #div1:hover, #div2:hover, #div3:hover, #div4:hover, #div5:hover {
   width: 200px;
   background: red;
  }
`
const syntax_5 = `  div{  
   width: 100px;
   height: 100px;
   background: #903C56;
   transition-property: height;
   transition-duration: 2s;
   transition-delay: 1s;
  }
  div:hover {
   height: 300px;
  }
`
const syntax_6 = `  /* property | duration */
  .transition-1{
   transition: width 2s;
  }
  /* property | duration | timing function */
  .transition-2{
   transition: width 2s ease-in-out;
  }
  /* property | duration | delay */
  .transition-3{
   transition: width 2s .5s;
  }
  /* property | duration | delay | timing function */
  .transition-4{
   transition: width 2s .5s ease-in-out;
  }
  div{  
   width: 100px;
   height: 100px;
   background: black;
   color: white;
  }
  div:hover {
   width: 250px;
  }
`
const syntax_7 = `  /* property | duration */
  .transition{
   transition: margin-top 2s linear, width 1s ease-in, height 1s ease-out;
  }
  div {
   width: 100px;
   height: 100px;
   background: #000;
   color: #fff;
   margin-top: 0;
  }
  div:hover {
   margin-top: 50px;
   width: 200px;
   height: 200px;
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
          <h3>CSS3 Transitions</h3>
          <p>CSS3 transitions allow us to control animation speed when changing CSS properties.</p>
          <p>CSS3 transitions can cause the changes in a defined property to take place over a period of time, instead of just taking place immediately.</p>
          <p>We can demonstrate how transitions work with the <b>:hover</b> pseudo-class.</p>
          <h5>Example:</h5>
          <pre className='mb-1'>
            <code>{syntax_1}</code>
          </pre>
          <p>Tap the elements to see how it works.</p>
          {/* <p>Without CSS <b>transition</b> properties:</p>
          <div className="css3-trans-div without-transition"></div>
          <p>With CSS <b>transition</b> properties:</p>
          <div className="css3-trans-div with-transition css3-trans-com"></div> */}
          <div className="container mb-5">
            <div className="row">
              <div className="col-md-6 mb-3">
                <p style={{marginBottom: "0"}}>Without CSS <b>transition</b> properties:</p>
                <div className="css3-trans-div without-transition text-center text-white">hover me!</div>
              </div>
              <div className="col-md-6">
                <p style={{marginBottom: "0"}}>With CSS <b>transition</b> properties:</p>
                <div className="css3-trans-div with-transition css3-trans-com text-center text-white">hover me!</div>
              </div>
            </div>
          </div>

          <h3>CSS3 Transition Property and Duration</h3>
          <p>The <b>transition-property</b> CSS property specifies the name of the property the transition effect is for.</p>
          <p>The <b>transition-duration</b> CSS property sets how much time a transition should take to complete. By default the value is <b>Os</b>, meaning no animation will occur.</p>
          <pre className='mb-1'>
            <code>{syntax_2}</code>
          </pre>
          <p>Tap the elements to see how it works.</p>
          <div className="css3-trans-div2 css3-trans-com mb-5 text-center text-white">hover me!</div>

          <p>You can also have multiple transition properties by specifying multiple properties and separating each with a comma.</p>
          <pre className='mb-1'>
            <code>{syntax_3}</code>
          </pre>
          <p>Tap the elements to see how it works.</p>
          <div className="css3-trans-div2 css3-trans-div3 css3-trans-com text-center text-white mb-5">hover me!</div>

          <h3>CSS3 Transition Timing Function</h3>
          <p>The <b>transition-timing-function</b> CSS property sets the timing calculation of the transition effect.</p>
          <h5>Valid Values:</h5>
          <ul>
            <li><b>ease</b>: default; the transition effect starts slowly, then fast, then slowly ends</li>
            <li><b>linear</b>: the transition effect has the same speed from start to end</li>
            <li><b>ease-in</b>: the transition effect starts slowly</li>
            <li><b>ease-out</b>: the transition effect ends slowly</li>
            <li><b>ease-in-out</b>: the transition effect both starts and ends slowly</li>
          </ul>
          <pre className='mb-1'>
            <code>{syntax_4}</code>
          </pre>
          <p>Tap the elements to see how it works.</p>
          <div className="css3-trans-div4 one text-center text-white">hover me!<br/>div-1</div>
          <div className="css3-trans-div4 two text-center text-white">hover me!<br/>div-2</div>
          <div className="css3-trans-div4 three text-center text-white">hover me!<br/>div-3</div>
          <div className="css3-trans-div4 four text-center text-white">hover me!<br/>div-4</div>
          <div className="css3-trans-div4 five text-center text-white mb-5">hover me!<br/>div-5</div>

          <h3>CSS3 Transition Delay</h3>
          <p>The <b>transition-delay</b> CSS property specifies a duration to wait before the transition effect starts.</p>
          <pre className='mb-1'>
            <code>{syntax_5}</code>
          </pre>
          <p>Tap the elements to see how it works.</p>
          <div className="css3-trans-div5 css3-trans-com text-center text-white mb-5">hover me!</div>
          <p>As you may notice, the transition started to take effect one second after you clicked it.</p>

          <h3>CSS3 Transitions - Shorthand</h3>
          <p>The <b>transition</b> CSS property is a shorthand for the following:</p>
          <ul>
            <li><b>transition-property</b></li>
            <li><b>transition-duration</b></li>
            <li><b>transition-timing-function</b></li>
            <li><b>transition-delay</b></li>
          </ul>
          <p>This property is specified as one or more single-property transitions, separated by commas.</p>
          <h5>Example:</h5>
          <p>Each of the examples below only apply to a single transition property.</p>
          <pre className='mb-1'>
            <code>{syntax_6}</code>
          </pre>
          <p>Tap the elements to see how it works.</p>
          <div className="css3-trans-div6 transition-1 text-center"> transition-1 </div><br/>
          <div className="css3-trans-div6 transition-2 text-center"> transition-2 </div><br/>
          <div className="css3-trans-div6 transition-3 text-center"> transition-3 </div><br/>
          <div className="css3-trans-div6 transition-4 text-center mb-5"> transition-4 </div>

          <p>Here is an example of using the <b>transition</b> shorthand to multiple transition properties.</p>
          <pre className='mb-1'>
            <code>{syntax_7}</code>
          </pre>
          <p>Tap the elements to see how it works.</p>
          <div className="css3-trans-div7 text-center text-white mb-5">hover me!</div>


		      <div className="container mt-1 mb-4 d-flex justify-content-between">
            <Link className="btn btn-primary" to="/css-tutorials/css3-2d-transforms"><Adl /> Previous</Link>
            <Link className="btn btn-primary" to="/css-tutorials/css3-animations">Next <Adr /></Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Css3_transitions;