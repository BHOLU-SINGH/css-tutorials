import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Adl from "../Adl";
import Adr from "../Adr";


const Css3_animations = () => {
const syntax_1 = `  div {
   animation-name: myAnimation;
   animation-duration: 2s;
   position: relative;
   width: 100px;
   height: 100px;
   background-color: gold;
  }
  @keyframes myAnimation { 
   from { 
     background-color: gold; 
     left: 0;
    } 
    to { 
     background-color: green; 
     left: 50px; 
    } 
  }
`
const syntax_2 = `  div {
   animation-name: myAnimation;
   animation-duration: 2s;
   position: relative;
   width: 100px;
   height: 100px;
   background-color: gold;
  }
  @keyframes myAnimation { 
    0%{ 
     background-color: gold;
     top: 0;
     left: 0;
    } 
    25%{ 
     background-color: green;
     top: 50px;
     left: 50px;
    } 
    50%{ 
     background-color: gold;
     top: 0;
     left: 50px;
    }
    75%{ 
     background-color: green;
     top: 50px;
     left: 0;
    }
    100%{ 
     background-color: gold;
     top: 0;
     left: 0;
    }
  }
`
const syntax_3 = `  div {
   animation-name: myAnimation;
   animation-duration: 2s;
   position: relative;
   width: 100px;
   height: 100px;
   background-color: gold;
  }
  #div1 {
   animation-timing-function: ease;
  }
  #div2 {
   animation-timing-function: linear;
  }
  #div3 {
   animation-timing-function: ease-in;
  }
  #div4 {
   animation-timing-function: ease-out;
  }
  #div5 {
   animation-timing-function: ease-in-out;
  }
  @keyframes myAnimation { 
    from { 
     background-color: gold; 
     top: 0;
     left: 0;
    } 
    to { 
     background-color: green; 
     top: 60px;
     left: 60px; 
    }  
  }
`
const syntax_4 = `  div{
   animation-name: myAnimation;
   animation-duration: 2s;
   animation-delay: 1s;
   position: relative;
   width: 100px;
   height: 100px;
   background-color: gold;
   border-radius: 10px;
  }
  @keyframes myAnimation{ 
    from{ 
     background-color: gold;
     top: 0;
     left: 0;
    } 
    to{ 
     background-color: green;
     top: 50px;
     left: 50px;
    }
  }
`
const syntax_5 = `  <number>`
const syntax_6 = `  div{
   animation-name: myAanimation
   animation-duration: 2s;
   /* try to change the value below with a number */
   animation-iteration-count: infinite;
   position: relative;
   width: 100px;
   height: 100px;
   background-color: gold;
  }
  @keyframes myAnimation{ 
    0%{ 
     background-color: gold;
     top: 0;
     left: 0;
    } 
    25%{ 
     background-color: green;
     top: 100px;
     left: 100px;
    }
    50%{ 
     background-color: gold;
     top: 0;
     left: 200px;
    } 
    75%{ 
     background-color: green;
     top: 200px;
     left: 0;
    } 
   100%{ 
     background-color: gold;
     top: 0;
     left: 0;
    }
  }
`
const syntax_7 = `  div{
   animation-name: animationRepeat;
   animation-duration: 2s;
   animation-iteration-count: infinite;
   position: relative;
   width: 100px;
   height: 100px;
   background-color: gold;
  }
  .div1{
   animation-name: animation1;
   animation-direction: normal;
  }
  @keyframes animation1{ 
    0%{ 
     background-color: gold;
     left: 0;
    }
    100%{ 
     background-color: green;
     left: 100px;
    }
  }
  .div2{
   animation-name: animation2;
   animation-direction: reverse;
  }
  @keyframes animation2{ 
    0%{ 
     background-color: gold;
     left: 0;
    }
    100%{ 
     background-color: green;
     left: 100px;
    }
  }
  .div3{
   animation-name: animation3;
   animation-direction: alternate;
  }
  @keyframes animation3{ 
    0%{ 
     background-color: gold;
     left: 0;
    }
    100%{ 
     background-color: green;
     left: 100px;
    }
  }
  .div4{
   animation-name: animation4;
   animation-direction: alternate-reverse;
  }
  @keyframes animation4{ 
    0%{ 
     background-color: gold;
     left: 0;
    }
    100%{ 
     background-color: green;
     left: 100px;
    }
  }
`
const syntax_8 = `  p{
   animation-duration: 2s;
  }
  #p1{
   animation-name: myAnimation1;
   animation-fill-mode: none;
  }
  @keyframes myAnimation1{
    0%{
     font-size: 15px;
     color: blue;
    }
    100%{
     font-size: 22px;
     color: red;
    }
  }
  #p2{
   animation-name: myAnimation2;
   animation-fill-mode: forwards;
  }
  @keyframes myAnimation2{
    0%{
     font-size: 15px;
     color: blue;
    }
    100%{
     font-size: 22px;
     color: red;
    }
  }
  #p3{
   animation-name: myAnimation3;
   animation-fill-mode: backwards;
  }
  @keyframes myAnimation3{
    0%{
     font-size: 15px;
     color: blue;
    }
    100%{
     font-size: 22px;
     color: red;
    }
  }
  #p4{
   animation-name: myAnimation4;
   animation-fill-mode: both;
  }
  @keyframes myAnimation4{
    0%{
     font-size: 15px;
     color: blue;
    }
    100%{
     font-size: 22px;
     color: red;
    }
  }
`
const syntax_9 = `  div{
   width: 150px;
   height: 100px;
   position: relative;
   background: black;
   color: white;
  }
  .running{
   animation-name: running;
   animation-duration: 5s;
   animation-play-state: running;  /* default */
   background: #173459;
  }
  .paused{
   animation-name: paused;
   animation-duration: 5s;
   animation-play-state: paused;
  } 
  @keyframes running{
    from{
     left: 0;
    }
    to{
     left: 160px;
    } 
  }
`
const syntax_10 = `  div{
   animation-name: myAnimation;
   animation-duration: 3s;
   animation-timing-function: linear;
   animation-delay: 1s;
   animation-iteration-count: infinite;
   animation-direction: alternate;
  }
`
const syntax_11 = `  div{
    animation: myAnimation 3s linear 1s infinite alternate;
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
          <h3>CSS3 Animations</h3>
          <p>CSS Animations animate HTML elements' transitions from one style to another.</p>
          <p>With CSS Animations we can animate elements without having to use (or know) JavaScript.</p>
          <p>Animations have two components:</p>
          <ol>
            <li>A style describing the CSS animation.</li>
            <li>A set of keyframes that indicate the start, intermediate waypoints and end states of the animation's style.</li>
          </ol>
          <h3>The @keyframes Rule</h3>
          <p>To configure the actual appearance of the animation we need to use the <b>@keyframes</b> at-rule.</p>
          <p>The <b>@keyframes</b> at-rule defines keyframes or waypoints along the animation sequence which controls the intermediate steps in a CSS animation.</p>
          <p>Each <b>@keyframes</b> rule contains a style list of keyframe selectors, which specify <b>percentages</b> along the animation when the keyframe occurs, and a block containing the styles for that keyframe. <b>0%</b> indicates the starting state of the animation sequence, while <b>100%</b> indicates the final state of the animation. Because <b>0%</b> and <b>100%</b> are very important, they have special aliases: <b>from</b> and <b>to</b>.</p>
          <p>Aside from <b>from</b>/<b>0%</b> and <b>to</b>/<b>100%</b>, we can optionally include additional keyframes (e.g. <b>25%</b>, <b>33%</b>, <b>50%</b>, <b>66%</b>, <b>75%</b>) that describe intermediate steps between the start and end of the animation.</p>
          <p>To use keyframes, create a <b>@keyframes</b> rule with a name that is then used by the <b>animation-name</b> property to match an animation to its keyframe declaration.</p>
          <p>We also need to specify the duration of the animation using the <b>animation-duration</b> CSS property.</p>
          <h5>Example:</h5>
          <pre className='mb-1'>
            <code>{syntax_1}</code>
          </pre>
          <div className="css3-anim-div1 text-center mb-5">hover me!</div>

          <p>Here is an example of using more than two percentage:</p>
          <pre className='mb-1'>
            <code>{syntax_2}</code>
          </pre>
          <div className="css3-anim-div1 css3-anim-div2 text-center mb-5">hover me!</div>

          <h3>CSS3 Animation Timing Function</h3>
          <p>The <b>animation-timing-function</b> CSS property sets how an animation progresses through the duration of each cycle.</p>
          <h5>Valid Values:</h5>
          <ul>
            <li><b>ease</b>: default; the animation effect starts slowly, then fast, then slowly ends</li>
            <li><b>linear</b>: the animation effect has the same speed from start to end</li>
            <li><b>ease-in</b>: the animation effect starts slowly</li>
            <li><b>ease-out</b>: the animation effect ends slowly</li>
            <li><b>ease-in-out</b>: the animation effect both starts and ends slowly</li>
          </ul>
          <pre className='mb-1'>
            <code>{syntax_3}</code>
          </pre>
          <div className="css3-anim-div1 css3-anim-div3 text-center one">hover me!<br/>ease</div>
          <div className="css3-anim-div1 css3-anim-div3 text-center second">hover me!<br/>linear</div>
          <div className="css3-anim-div1 css3-anim-div3 text-center third">hover me!<br/>ease-in</div>
          <div className="css3-anim-div1 css3-anim-div3 text-center four">hover me!<br/>ease-out</div>
          <div className="css3-anim-div1 css3-anim-div3 text-center five mb-5">hover me!<br/>ease-in-out</div>

          <h3>CSS3 Animation Delay</h3>
          <p>The <b>animation-delay</b> CSS property specifies a duration to wait before the transition effect starts.</p>
          <pre className='mb-1'>
            <code>{syntax_4}</code>
          </pre>
          <p> The animation will start after one second.(but make sure you have refresh the webpage.) </p>
          <div className="css3-anim-delay text-center mb-5">hover me!</div>

          <h3>CSS3 Repeating Animations</h3>
          <p>We can repeat a CSS animation using the <b>animation-iteration-count</b> CSS property.</p>
          <p>It sets the number of times an animation cycle should be played. It can take a <b>{syntax_5}</b> value or the keyword <b>infinite</b>, meaning the animation will be repeated indefinitely.</p>
          <pre className='mb-1'>
            <code>{syntax_6}</code>
          </pre>
          <p> Try changing the <b>infinite</b> value with a number to see how it works. </p>
          <div className="css3-anim-repeat text-center mb-5">infinite</div>

          <h3>CSS3 Animation Direction</h3>
          <p>The <b>animation-direction</b> CSS property sets whether an animation should play forwards, backwards, or alternating back and forth.</p>
          <h5>Valid Values:</h5>
          <ul>
            <li><b>normal</b>: default; the animation plays forwards each cycle</li>
            <li><b>reverse</b>: the animation plays backwards each cycle</li>
            <li><b>alternate</b>: the animation reverses direction each cycle, with the first iteration being played forwards</li>
            <li><b>alternate-reverse</b>: the animation reverses direction each cycle, with the first iteration being played backwards</li>
          </ul>
          <pre className='mb-1'>
            <code>{syntax_7}</code>
          </pre>
          <p> we have defined the <b>animation-iteration-count</b> CSS property to see how <b>animation-direction</b> properly work. </p>
          <div className="css3-anim-direction text-center div1">div-1</div>
          <div className="css3-anim-direction text-center div2">div-2</div>
          <div className="css3-anim-direction text-center div3">div-3</div>
          <div className="css3-anim-direction text-center div4 mb-5">div-4</div>

          <p><b>Note!</b> We need to repeat the animation to see how it works.</p>
          <h3>CSS3 Animation Fill Mode</h3>
          <p>The <b>animation-fill-mode</b> CSS property sets how a CSS animation applies styles to its target before and after its execution.</p>
          <h5>Valid Values:</h5>
          <ul>
            <li><b>none</b>: default; the animation will not apply styles to the element while it's not executing</li>
            <li><b>forwards</b>: th will retain the styles set by the last keyframee element</li>
            <li><b>backwards</b>: the element will retain the styles set by the last keyframe</li>
            <li><b>both</b>: the element will retain the styles set by the first and last keyframes</li>
          </ul>
          <pre className='mb-1'>
            <code>{syntax_8}</code>
          </pre>
          <p> To see this animation effect, refresh the webpage at least once. </p>
          <p className="css3-anim-fill-mode div1"> I love these css tutorials. </p>
          <p className="css3-anim-fill-mode div2"> I love these css tutorials. </p>
          <p className="css3-anim-fill-mode div3"> I love these css tutorials. </p>
          <p className="css3-anim-fill-mode div4 mb-5"> I love these css tutorials. </p>

          <h3>CSS3 Animation Play State</h3>
          <p>The <b>animation-play-state</b> CSS property defines whether an animation is running or paused.</p>
          <h5>Valid Values:</h5>
          <ul>
            <li><b>running</b>: default; the animation is playing</li>
            <li><b>paused</b>: the animation is paused</li>
          </ul>
          <pre className='mb-1'>
            <code>{syntax_9}</code>
          </pre>
          <div className="css3-anim-state running m-1"> My animation is currently playing. </div>
          <div className="css3-anim-state paused mb-5"> My animation is currently paused. </div>

          <h3>CSS3 Animation - Shorthand</h3>
          <p>The <b>animation</b> CSS is a shorthand for the following:</p>
          <ul>
            <li><b>animation-name</b></li>
            <li><b>animation-duration</b></li>
            <li><b>animation-timing-function</b></li>
            <li><b>animation-delay</b></li>
            <li><b>animation-iteration-count</b></li>
            <li><b>animation-direction</b></li>
            <li><b>animation-fill-mode</b></li>
            <li><b>animation-play-mode</b></li>
          </ul>
          <p>It is recommended to always use the <b>animation</b> property rather than set its individual sub-properties.</p>
          <p>The code below..</p>
          <pre className='mb-4'>
            <code>{syntax_10}</code>
          </pre>

          <p>can we shortened to:</p>
          <pre className='mb-1'>
            <code>{syntax_11}</code>
          </pre>
          <div className="css3-anim-shortened mb-4"></div>

          <p><b>Note!</b> Only the <b>animation-name</b> and <b>animation-duration</b> CSS property are required.</p>


		      <div className="container mt-5 mb-4 d-flex justify-content-between">
            <Link className="btn btn-primary" to="/css-tutorials/css3-transitions"><Adl /> Previous</Link>
            <Link className="btn btn-primary" to="/css-tutorials/css3-multiple-columns">Next <Adr /></Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Css3_animations;