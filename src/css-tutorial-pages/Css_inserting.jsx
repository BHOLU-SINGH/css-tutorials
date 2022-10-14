import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Adl from "../Adl";
import Adr from "../Adr";

const Css_inserting = () => {
const syntax_1 = `
  <style>
  `
const syntax_2 = `
  <head>
  `
const syntax_3 = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Try it yourself</title>
	<style type="text/css">
	  p{
	    color: red;
	  }
	</style>
  </head>
  <body>
    <p> These tutorials are free for all. </p>
  </body>
  </html>
  `
const syntax_4 = `
  <link>
`
const syntax_5 = `
  body{
    background-color: brown;
  }
  p{
	color: white;
  }
`
const syntax_6 = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Try it yourself</title>
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  <body>
    <p> Hello World! I Love These Tutorials. </p>
  </body>
  </html>
`
const syntax_7 = `
  <p style="font-size: 50px; color: fuchsia;"> I Love Free Tutorials! </p>
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
                <h3>CSS Inserting</h3>
                <p>There are three simple ways to insert CSS into an HTML document.</p>
    			<ul>
    				<li>Internal Style Sheet</li>
    				<li>External Style Sheet</li>
    				<li>Inline Styling</li>
    			</ul>
    			<h5>Internal Style Sheet</h5>
				<p>An internal style sheet is useful when a single HTML document has its unique styles.</p>
				<p>With this, CSS rulesets/rules should be included in the <strong>{syntax_1}</strong> element.</p>
				<p>The <strong>{syntax_1}</strong> element should only be enclosed inside the <strong>{syntax_2}</strong> element.</p>
				<p>For following best practices we can use the <strong>type</strong> attribute to define the MIME type of the <strong>{syntax_1}</strong> tag.</p>
				<p>The <strong>text/css</strong> value indicates that the content is CSS.</p>
				<p><strong>Example:</strong></p>
				<pre>
					<code>{syntax_3}</code>
				</pre>
				<h5>External Style Sheet</h5>
    			<p>An external style sheet can be very useful when multiple HTML pages have the same styles.</p>
    			<p>This can be achieved by having an external style sheet file.</p>
    			<p>An external style sheet file must be saved with a <strong>.css</strong> extension e.g. <strong>filename.css </strong>.</p>
    			<p>Then we need to use the <strong>{syntax_4}</strong> element to include the file in our HTML page.</p>
    			<p>There should be no <strong>{syntax_1}</strong> element inside a CSS file!</p>
    			<p><strong>Example:</strong></p>
    			<p>The <strong>style.css</strong> file contains the following codes. </p>
				<pre>
					<code>{syntax_5}</code>
				</pre>
				<p>Now that we have our external style sheet file. The next step is to include it in our HTML page.</p>
				<p>We can simply do it by defining its file path using the <strong>{syntax_4}</strong> element with its <strong>href</strong> attribute.</p>
				<pre>
					<code>{syntax_6}</code>
				</pre>
				<p>In the example shown above, the <strong>style.css</strong> file and the HTML file are saved in the app's directory.</p>
				<p>You can try it in your storage as well. Just follow these steps.</p>
				<ol>
					<li>Create a folder in your root directory.</li>
					<li>Save the HTML file in that folder.</li>
					<li>Save the <strong>style.css</strong> file in that folder.</li>
					<li>Run/Open the HTML file using any browser.</li>
				</ol>
    			<h5>Inline Styling</h5>
    			<p>Inline styling is useful for styling a single element.</p>
				<p>It is done by using the <strong>style</strong> attribute.</p>
				<p>Its value contains CSS declarations.</p>
				{syntax_7}


				<div class="container mt-4 mb-4 d-flex justify-content-between">
                    <Link class="btn btn-primary" to="/css-tutorials/css-syntax-and-selectors"><Adl /> Previous</Link>
                    <Link class="btn btn-primary" to="/css-tutorials/css-colors">Next <Adr /></Link>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Css_inserting;