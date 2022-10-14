import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Adl from "../Adl";
import Adr from "../Adr";

const Css_links = () => {
const syntax_1 = `
  a:link{
    text-decoration: none;
  }
  a:visited{
    text-decoration: none;
  }
`
const syntax_2 = `
  a:link{
    background-color: lightgreen;
  }
  a:visited{
    background-color: lightgreen;
  }
`
const syntax_3 = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Adding Icons to Links</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?fami1y=Material+Icons" />
  </head>
  <body>
    <p>Go to <a href="http://www.example.com">Example.com<i class="material-icons">launch</i></a></p>
    <p><b>Note!</b> This demo requires internet connection.</p>
  </body>
  </html>
`
const syntax_4 = `
  a{
    outline: none;
    text-decoration: none;
    font-family: sans-serif;
    background-color: lightgreen;
  }
  a:link{
    color: black;
  }
  a:visited{
    background: lightgrey;
  }
  a:focus{
    border: 1px solid red;
    background: lightgrey;
  }
  a:hover{
    border: 1px solid #f8f9f9;
    background: #173459;
    color: White;
  }
  a:active{
    text-decoration: none;
    border: 1px solid lightgrey;
    background: #d9534f;
    color: White;
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
         <h3>CSS Links</h3>
    		<p>In CSS, we can style links by changing its properties (color, background-color, text-decoration etc.)</p>
         <h3>Link Defaults</h3>
         <h5>By default:</h5>
         <ul>
            <li>links are underlined</li>
            <li>unvisited links are blue</li>
            <li>visited links are purple</li>
            <li>hovering a link makes the mouse a little hand icon</li>
            <li>focused links have an outline around them</li>
            <li>active links are red</li>
         </ul>
         <p>With CSS, of course we can change those properties or style them.</p>
         <h3>Styling Links</h3>
         <p>Before we can start styling links we first need to understand the concept of link states.</p>
         <h3>Link States</h3>
         <p>Link states are different states that a link can exist in which can be styled using <a href="#">pseudo-classes</a></p>
         <ul>
            <li><b>Link (unvisited)</b>: pseudo-class is <b>:link</b> ; the default state, it isnt in any other state</li>
            <li><b>Visited</b>: pseudo-class is <b>:visited</b> ; a visited link (exists in browser's history)</li>
            <li><b>Hover</b>: pseudo-class is <b>:hover</b> ; a link that is being hovered (mouse over)</li>
            <li><b>Focus</b>: pseudo-class is <b>:focus</b> ; a link when it is being focused e.g. focused by pressing the Tab key</li>
            <li><b>Active</b>: pseudo-class is <b>:active</b> ; a link when it is being activated or clicked on </li>
         </ul>
         <h3>Link's Text Decoration</h3>
         <p>You may want to change or remove a link's text decoration which is an underline by default.</p>
         <p>We can achieve it by using the <b>text-decoration</b> CSS property.</p>
         <pre>
            <code>{syntax_1}</code>
         </pre>
         <h3>Link's Background Color</h3>
         <p>You may want to add a link's background color.</p>
         <p>We can achieve it by using the <b>background-color</b> CSS property.</p>
         <pre>
            <code>{syntax_2}</code>
         </pre>
         <h3>Adding Icons to Links</h3>
         <p>It's a good idea to add icons to links. For example if the link will open in a new tab.</p>
         <pre>
            <code>{syntax_3}</code>
         </pre>
         <h3>Styling Links - Advanced</h3>
         <p>Here is an example of advanced way of styling links in CSS:</p>
         <p><b>Note!</b> In the CSS definition, the <b>:hover</b> pseudo-class should come after the <b>:link</b> and <b>:visited</b> pseudo-classes. And the <b>:active</b> pseudo-class must come after the <b>:hover</b> pseudo-class.</p>
         <pre>
            <code>{syntax_4}</code>
         </pre>
         <p>Was that link not looking good? Yes, maybe!</p>
         <p>So I challenge you to style it yourself and be creative.</p>
         <p>You can try experimenting by changing the colors and backgrounds, adding borders and padding etc.</p>
               

		    <div class="container mt-4 mb-4 d-flex justify-content-between">
            <Link class="btn btn-primary" to="/css-tutorials/css-icons"><Adl /> Previous</Link>
            <Link class="btn btn-primary" to="/css-tutorials/css-lists">Next <Adr /></Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Css_links;