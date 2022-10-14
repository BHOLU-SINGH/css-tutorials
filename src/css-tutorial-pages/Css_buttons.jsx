import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Adl from "../Adl";
import Adr from "../Adr";

const Css_buttons = () => {
const syntax_1 = `
  button{
    font-family: sans-serif;
  }
  #button1{
    background-color: rgb(23, 52, 89);
    color: #f8f9f9;
  }
  #button2{
    background-color: #903C56;
    color: #f8f9f9;
  }
  #button3{
    background-color: #404242;
    color: #f8f9f9;
  }
`
const syntax_2 = `
  button{
    font-family: sans-serif;
    border: none;
  }
  #button1{
    background-color: rgb(23, 52, 89);
    color: #f8f9f9;
  }
  #button2{
    background-color: #903C56;
    color: #f8f9f9;
  }
  #button3{
    background-color: #404242;
    color: #f8f9f9;
  }
`
const syntax_3 = `
  button{
    font-family: sans-serif;
    border: none;
    padding: 15px 30px;
  }
  #button1{
    background-color: rgb(23, 52, 89);
    color: #f8f9f9;
  }
  #button2{
    background-color: #903C56;
    color: #f8f9f9;
  }
  #button3{
    background-color: #404242;
    color: #f8f9f9;
  }
`
const syntax_4 = `
  button{
    font-family: sans-serif;
    border: none;
    padding: 15px 30px;
    margin: 5px;
   font-size: 20px;
  }
  #button1{
    background-color: rgb(23, 52, 89);
    color: #f8f9f9;
  }
  #button2{
    background-color: #903C56;
    color: #f8f9f9;
  }
  #button3{
    background-color: #404242;
    color: #f8f9f9;
  }
`
const syntax_5 = `
  button{
    outline: none;
    font-family: sans-serif;
    border: none;
    padding: 15px 30px;
    margin: 5px;
    background-color: rgb(23, 52, 89);
    color: #f8f9f9;
  }
`
const syntax_6 = `
  button{
    font-family: sans-serif;
    border: none;
    padding: 15px 30px;
    font-size: 20px;
    outline: none;
    margin: 5px;
    background: transparent;
  }
  #button1{
    color: rgb(23, 52, 89);
    border:4px solid rgb(23, 52, 89);
  }
  #button2{
    color: #903C56;
    border:4px solid #903C56;
  }
  #button3{
    color: #404242;
    border:4px solid #404242;
  }
`
const syntax_7 = `<length>`
const syntax_8 = `<percentage>`
const syntax_9 = `
  button{
    font-family: sans-serif;
    border: none;
    padding: 15px 30px;
    font-size: 20px;
    outline: none;
    border-radius: 5px;
  }
  #button1{
    color: rgb(23, 52, 89);
    color: #f8f9f9;
  }
  #button2{
    background: transparent;
    color: #903C56;
    border:4px solid #903C56;
  }
`
const syntax_10 = `
  button{
    font-family: sans-serif;
    border: none;
    padding: 15px 30px;
    font-size: 20px;
    outline: none;
    margin: 10px;
  }
  #button1{
    background-color: rgb(23, 52, 89);
    color: #f8f9f9;
    box-shadow: .5px .5px 1px 2px #000000;
  }
  #button2{
    background: transparent;
    color: #903C56;
    border:4px solid #903C56;
    box-shadow: .5px .5px 1px 2px #000000;
  }
`
const syntax_11 = `
  button{
    font-family: sans-serif;
    border: none;
    padding: 15px 30px;
    font-size: 20px;
    outline: none;
    margin: 10px;
    -webkit-transition-duration: 1s; /* for Safari */
    transition-duration: 1s;
  }
  #button1{
    background-color: rgb(23, 52, 89);
    color: #f8f9f9;
    box-shadow: .5px .5px 1px 2px #000000;
  }
  #button2{
    background-color: transparent;
    color: #903C56;
    border: 4px solid #903C56;
    box-shadow: .5px .5px 1px 2px #000000;
  }
  #button1:hover{
    background-color: #f8f9f9;
    color: rgb(23, 52, 89);
    box-shadow: 1px 1px 2px 3px #000000;
    cursor: pointer;
  }
  #button2:hover {
    background-color: #903C56;
    color: #f8f9f9;
    border: 4px solid #903C56;
    box-shadow: 1px 1px 2px 3px #000000;
    cursor: pointer;
  }
`
const syntax_12 = `
  button.disabled{
    outline: none;
    font-family: sans-serif;
    border: none;
    padding: 15px 30px;
    font-size: 20px;
    background-color: rgb(23, 52, 89);
    color: #f8f9f9;
    cursor: not-allowed;
    opacity: 0.6;
  }
`
const syntax_13 = `
  .button-group button{
    border: none;
    font-family: sans-serif;
    padding: 10px 20px;
    font-size: 18px;
    background: transparent;
    color: #f8f9f9;
    background: #903C56;
    border: 1px solid #78969D;
    -webkit-transition-duration: 1s; /* for Safari */
    transition-duration: 1s;
    float: left;
  }
  .button-group button:hover{
    color: #903C56;
    background: #f8f9f9;
  }
`
const syntax_14 = `
  .button-group button{
    font-family: sans-serif;
    border: none;
    padding: 10px 20px;
    font-size: 18px;
    outline: none;
    background: transparent;
    color: #f8f9f9;
    background: #903C56;
    border: 1px solid #78969D;
    -webkit-transition-duration: 1s; /* for Safari */
    transition-duration: 1s;
    display: block;
  }
  .button-group button:hover{
    color: #903C56;
    background: #f8f9f9;
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
         <h3>CSS Buttons</h3>
    		<p>In this lesson we will learn how to style HTML buttons.</p>
         <h3>CSS Buttons - Colors</h3>
         <p>We can use the <b>color</b> CSS property to change the color of the text inside the button.</p>
         <p>To change the background color of a button, we can use the <b>background-color</b> CSS property.</p>
         <pre className='bottom'>
            <code>{syntax_1}</code>
         </pre>
         <button className='css-btn-syn-1' style={{backgroundColor: "rgb(23, 52, 89)"}}>Button1</button>
         &nbsp;
         <button className='css-btn-syn-1' style={{backgroundColor: "#903C56"}}>Button2</button>
         &nbsp;
         <button className='css-btn-syn-1' style={{backgroundColor: "#404242"}}>Button3</button>
         <h3>CSS Buttons - No Border</h3>
         <p>To remove the default border of a button we need to set the <b>border</b> CSS property to <b>none</b>.</p>
         <pre className='bottom'>
            <code>{syntax_2}</code>
         </pre>
         <button className='css-btn-syn-1' style={{border: "none", backgroundColor: "rgb(23, 52, 89)"}}>Button1</button>
         &nbsp;
         <button className='css-btn-syn-1' style={{border: "none", backgroundColor: "#903C56"}}>Button2</button>
         &nbsp;
         <button className='css-btn-syn-1' style={{border: "none", backgroundColor: "#404242"}}>Button3</button>
         <h3>CSS Buttons - Padding</h3>
         <p>To increase the padding of a button we need to use the <b>padding</b> CSS property.</p>
         <pre className='bottom'>
            <code>{syntax_3}</code>
         </pre>
         <button className='css-btn-syn-3' style={{backgroundColor: "rgb(23, 52, 89)"}}>Button1</button>
         <button className='css-btn-syn-3' style={{backgroundColor: "#903C56"}}>Button2</button>
         <button className='css-btn-syn-3' style={{backgroundColor: "#404242"}}>Button3</button>
         <h3>CSS Buttons - Font Size</h3>
         <p>To increase the font size of a button we need to use the <b>font-size</b> CSS property.</p>
         <pre className='bottom'>
            <code>{syntax_4}</code>
         </pre>
         <button className='css-btn-syn-4' style={{backgroundColor: "rgb(23, 52, 89)"}}>Button1</button>
         <button className='css-btn-syn-4' style={{backgroundColor: "#903C56"}}>Button2</button><button className='css-btn-syn-4' style={{backgroundColor: "#404242"}}>Button3</button>
         <h3>CSS Buttons - Removing Outline</h3>
         <p>Did you try to click the buttons on our examples? Did you see the outline?</p>
         <p>We can remove those outlines by setting the <b>outline</b> CSS property to <b>none</b>.</p>
         <pre className='bottom'>
            <code>{syntax_5}</code>
         </pre>
         <button className='css-btn-syn-3 mb-5' style={{margin: "5px", backgroundColor: "rgb(23, 52, 89)"}}>Button</button>
         <h3>CSS Buttons - Transparent Background with Borders</h3>
         <p>It may be a good idea to remove the background of a button and have colorful text and borders.</p>
         <pre className='bottom'>
            <code>{syntax_6}</code>
         </pre>
         <button className='css-btn-syn-4 css-btn-syn-6' style={{color: "rgb(23, 52, 89)", border: "4px solid rgb(23, 52, 89)"}}>Button1</button>
         <button className='css-btn-syn-4 css-btn-syn-6' style={{color: "#903C56", border: "4px solid #903C56"}}>Button2</button>
         <button className='css-btn-syn-4 css-btn-syn-6' style={{color: "#404242", border: "4px solid #404242"}}>Button3</button>
         <h3>CSS Buttons - Rounded Corners</h3>
         <p>We can use the <b>border-radius</b> CSS property to make buttons with rounded corners.</p>
         <p>The value should be a <b>{syntax_7}</b> or a <b>{syntax_8}</b>.</p>
         <pre className='bottom'>
            <code>{syntax_9}</code>
         </pre>
         <button className='css-btn-syn-9 mb-5' style={{backgroundColor: "rgb(23, 52, 89)", color: "#f8f9f9"}}>Button1</button>
         <button className='css-btn-syn-9 mb-5' style={{background: "transparent", color: "#903C56", border: "4px solid #903C56", marginLeft: "5px"}}>Button2</button>
         <h3>CSS Buttons - Box Shadows</h3>
         <p>To make a button more beautiful we can add box shadows.</p>
         <p>We can achieve this by using the <b>box-shadow</b> CSS property.</p>
         <pre className='bottom'>
            <code>{syntax_10}</code>
         </pre>
         <button className='css-btn-syn-4 mb-5' style={{outline: "none", margin: "10px", backgroundColor: "rgb(23, 52, 89)", color: "#f8f9f9", boxShadow: ".5px .5px 1px 2px #000000"}}>Button1</button>
         <button className='css-btn-syn-4 mb-5' style={{outline: "none", margin: "10px", background: "transparent", color: "#903C56", border: "4px solid #903C56", boxShadow: ".5px .5px 1px 2px #000000"}}>Button2</button>
         <h3>CSS Buttons - Mouse Over Effects</h3>
         <p>We can use the <b>:hover</b> selector to add an effect when  we move the mouse over a button.</p>
         <p>Then we need to use the <b>transition-duration</b> property to specify the duration of the effect.</p>
         <p>To change the icon of the cursor during the effect, use the <b>cursor</b> CSS property.</p>
         <pre className='bottom'>
            <code>{syntax_11}</code>
         </pre>
         <button class="css-btn-mouse-over css-btn-mouse-over-btn1 mb-5">Button1</button>
         <button class="css-btn-mouse-over css-btn-mouse-over-btn2 mb-5">Button2</button>
         <h3>CSS Buttons - Disabled</h3>
         <p>To make a button disabled in CSS we need to set the <b>cursor</b> CSS property to <b>not-allowed</b></p>
         <p>Use the <b>opacity</b> CSS property to make the button look like disabled.</p>
         <pre className='button'>
            <code>{syntax_12}</code>
         </pre>
         <button className='css-btn-disabled mb-5' style={{cursor: "not-allowed"}}>Button</button>
         <h3>CSS Button Group</h3>
         <p>To make a button group we simply need the <b>float: left;</b> CSS declaration.</p>
         <pre className='bottom'>
            <code>{syntax_13}</code>
         </pre>
         <div className="css-btn-btn-group mb-5">
            <button className="css-btn">button1</button>
            <button className="css-btn">button2</button>
            <button className="css-btn">button3</button>
         </div>
         <h3>CSS Button Group - Vertical</h3>
         <p>To make a button group we simply need the <b>display: block;</b> CSS declaration.</p>
         <p>It makes the button elements act like block-level elements.</p>
         <pre className='bottom'>
            <code>{syntax_14}</code>
         </pre>
         <div class="css-btn-vertical-btn-group mb-5">
            <button>button1</button>
            <button>button2</button>
            <button>button3</button>
         </div>


		   <div class="container mt-4 mb-4 d-flex justify-content-between">
            <Link class="btn btn-primary" to="/css-tutorials/css-ouline"><Adl /> Previous</Link>
            <Link class="btn btn-primary" to="/css-tutorials/css-images">Next <Adr /></Link>
         </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Css_buttons;