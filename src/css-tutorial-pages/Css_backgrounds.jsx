import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Adl from "../Adl";
import Adr from "../Adr";

const Css_backgrounds = () => {
const syntax_1 = `
  body{
    background-color: gold;
  }
`
const syntax_2 = `
  h1{
    background-color: yellow;
  }
  p{
	background-color: pink;
  }
  div{
	background-color: grey;
	width: 200px;
	height: 200px;
  }
`
const syntax_3 = `
  body{
	background-image: url("nature.jpg");
  }
 `
const syntax_4 = `
  body{
	background-image: url("nature.jpg");
  }
`
const syntax_5 = `
  body{
	background-image: url("nature.jpg");
	background-repeat: repeat-x;
  }
`
const syntax_6 = `
  body{
	background-image: url("nature.jpg");
	background-repeat: repeat-y;
  }
`
const syntax_7 = `
  body{
	background-image: url("nature.jpg");
	background-repeat: no-repeat;
  }
`
const syntax_8 = `
<percentage>
`

const syntax_9 = `
  body{
	background-color: red;
	background-image: url("nature.jpg"); 
	background-repeat: no-repeat;
	background-attachment: fixed ;
	background-position: top right;
  }
`
const syntax_10 = `
  body{
	background: red url("avatar.png") no-repeat fixed top right;
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
            <div className="col-md-9 mt-2 p-3">
				<h3>CSS Backgrounds</h3>
    			<p>Elements backgrounds can be filled with a color or image, clipped and/or resized, and otherwise be modified.</p>
    			<p>CSS background properties:</p>
    			<ul>
    				<li><b>background-color</b></li>
					<li><b>background-image</b></li>
					<li><b>background-repeat</b></li>
					<li><b>background-attachment</b></li>
					<li><b>background-position</b></li>
    			</ul>
    			<h3>Background Color</h3>
    			<p>We can specify a background color for an element using the <b>background-color</b> property.</p>
    			<p>The value can be any valid CSS Color or CSS3 Color.</p>
    			<p>Changing the background color of a whole page:</p>
				<pre>
					<code>{syntax_1}</code>
				</pre>
				<p>Changing the background color of elements:</p>
				<pre>
					<code>{syntax_2}</code>
				</pre>
				<h3>Background Image</h3>
				<p>The <b>background-image</b> property sets one or more images as background of an element.</p>
				<p>The format of its value should be: <b>url("image.jpg")</b>. Single quotes and no quotes also work e.g. <b>url('image.jpg')</b> and <b>url(image.jpg)</b></p>
				<p>The text contained in the quotes are file paths. If you don't know about them yet learn them here.</p>
				<pre>
					<code>{syntax_3}</code>
				</pre>
				<p><b>Note!</b> Do not use any background color or image that will disturb the text on your web page. Always keep everything readable.</p>
				<h3>Background Image Repeat</h3>
				<p>CSS automatically resets background images horizontally and vertically.</p>
				<p>Take a look at an example below.</p>
				<pre>
					<code>{syntax_4}</code>
				</pre>
				<p>To only repeat the background image horizontally or vertically we can use the <b>background-repeat</b> property.</p>
				<p><b>Horizontally-repeating</b> background image.</p>
				<pre>
					<code>{syntax_5}</code>
				</pre>
				<p><b>Vertically-repeating</b> background image.</p>
				<pre>
					<code>{syntax_6}</code>
				</pre>
				<h5>Background Image - no-repeat</h5>
				<p>The <b>no-repeat</b> value of the <b>background-repeat</b> property stops a background image from repeating.</p>
				<pre>
					<code>{syntax_7}</code>
				</pre>
				<h3>Background Image - Set Position</h3>
				<p>We can set the initial position of a background image using the <b>background-position</b> property.</p>
				<p>Valid Values:</p>
				<ul>
					<li><b>top</b></li>
					<li><b>bottom</b></li>
					<li><b>left</b></li>
					<li><b>right</b></li>
					<li><b>center</b></li>
					<li>combination of the ones mentioned above ( <b>top</b> and <b>bottom</b> and <b>left</b> and <b>right</b> can not be combined)</li>
					<li>{syntax_8}</li>
					<li>edge offset values</li>
					<li><b>inherit</b></li>
					<li><b>initial</b></li>
					<li><b>unset</b></li>
				</ul>
				<h3>Background Attachment</h3>
				<p>The <b>background-attachment</b> property sets whether a background images position is fixed within the viewport, or scrolls with its containing block.</p>
				<p>Valid Values:</p>
				<ul>
					<li><b>scroll</b> : background is fixed relative to the element itself and does not scroll with its contents</li>
					<li><b>fixed</b> : background is fixed relative to the viewport. Even if an element has a scrolling mechanism, the background does not move with the element</li>
					<li><b>local</b> : background is fixed relative to the elements contents. If the element has a scrolling mechanism, the background scrolls with the elements contents, and the background painting area and background positioning area are relative to the scrollable area of the element rather than to the border framing them</li>
					<li><b>scroll, local</b></li>
					<li><b>local, scroll</b></li>
				</ul>
				<h3>Background - Shorthand Property</h3>
				<p>We can specify all CSS background properties in one single property using its shorthand property.</p>
				<p>The <b>background</b> property is a shorthand for the following CSS properties:</p>
				<ul>
					<li><b>background-color</b></li>
					<li><b>background-image</b></li>
					<li><b>background-repeat</b></li>
					<li><b>background- attachment</b></li>
					<li><b>background-position</b></li>
				</ul>
				<h5>Example:</h5>
				<p>A CSS Background with the following properties...</p>
				<pre>
					<code>{syntax_9}</code>
				</pre>
				<p>... can be shortened to:</p>
				<pre>
					<code>{syntax_10}</code>
				</pre>
				<p><b>Note!</b> You can ommit values. Ommited values will be set to their initial values.</p>


				<div class="container mt-4 mb-4 d-flex justify-content-between">
                    <Link class="btn btn-primary" to="/css-tutorials/css-colors"><Adl /> Previous</Link>
                    <Link class="btn btn-primary" to="/css-tutorials/css-borders">Next <Adr /></Link>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Css_backgrounds;