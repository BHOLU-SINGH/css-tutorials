import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Adl from "../Adl";
import Adr from "../Adr";

const Css_colors = () => {
const syntax_1 = `
  #color-name{
    color: maroon;
  }
`
const syntax_2 = `
  #hex-color{
    color: #808000;
  }
`
const syntax_3 = `
rgb(<number>, <number>, <number>)
`
const syntax_4 = `
<number>
`
const syntax_5 = `
  #rgb-color{
    color: rgb(0, 0, 255);
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
				<h3>CSS Colors</h3>
    			<p>CSS colors are commonly specified using the following:</p>
    			<ul>
    				<li>Color Name</li>
    				<li>Hexadecimal Color Value</li>
    				<li>RGB Color Value</li>
    			</ul>
    			<h5>Color Name</h5>
    			<p>It defines any valid color by its color name e.g. <strong>white</strong>, <strong>black</strong></p>
    			<p><strong>Example:</strong></p>
				<pre>
					<code>{syntax_1}</code>
				</pre>
				<h5>Hexadecimal Color Value</h5>
    			<p>Also known as Hex Color Value. It defines any valid color by a hash followed by letters and/or numbers e.g. <strong>#ffffff</strong>, <strong>#000000</strong></p>
    			<p><strong>Example:</strong></p>
				<pre>
					<code>{syntax_2}</code>
				</pre>
				<h5>RGB Color Value</h5>
    			<p>RGB stands for Red, Green and Blue. It defines any valid color using the <strong>rgb()</strong> CSS function by this format: <strong>{syntax_3}</strong> e.g. <strong>rgb(255, 255, 255)</strong>, <strong>rgb(0, 0, 0)</strong> .</p>
    			<p><strong>Notes!</strong> The {syntax_4} value should only be from O to 255.</p>
    			<p>The numbers represent the intensity of the red, green and blue colors in that particular order.</p>
    			<p><strong>Example:</strong></p>
				<pre>
					<code>{syntax_5}</code>
				</pre>
				<h5>Most Common CSS Colors with Color Name, Hex and RGB Color Values</h5>
    			<table className="border css-color-table">
    				<tr><td> Color </td><td> Color Name </td><td> Hex Color Value </td><td> RGB Color Value </td></tr>
    				<tr>
    					<td className='color' style={{backgroundColor: "#ffffff"}}></td><td> White </td><td>#ffffff</td><td>rgb(255,255,255)</td>
    				</tr>
    				<tr>
    					<td className='color' style={{backgroundColor: "#c0c0c0"}}></td><td> Silver </td><td>#c0c0c0</td><td>rgb(192,192,192)</td>
    				</tr>    	
    				<tr>
    					<td className='color' style={{backgroundColor: "#808080"}}></td><td> Grey </td><td>#808080</td><td>rgb(128, 128, 128)</td>
    				</tr>
    				<tr>
    					<td className='color' style={{backgroundColor: "#000000"}}></td><td> Black </td><td>#000000</td><td>rgb(0, 0, 0)</td>
    				</tr>
    				<tr>
    					<td className='color' style={{backgroundColor: "#ff0000"}}></td><td> Red </td><td>#ff0000</td><td>rgb(255, 0, 0)</td>
    				</tr>
    				<tr>
    					<td className='color' style={{backgroundColor: "#800000"}}></td><td> Maroon </td><td>#800000</td><td>rgb(128, 0, 0)</td>
    				</tr>
    				<tr>
    					<td className='color' style={{backgroundColor: "#ffff00"}}></td><td> Yellow </td><td>#ffff00</td><td>rgb(255, 255, 0)</td>
    				</tr>
    				<tr>
    					<td className='color' style={{backgroundColor: "#808000"}}></td><td> Olive </td><td>#808000</td><td>rgb(128, 128, 0)</td>
    				</tr>
    				<tr>
    					<td className='color' style={{backgroundColor: "#00ff00"}}></td><td> Lime </td><td>#00ff00</td><td>rgb(0, 255, 0)</td>
    				</tr>
    				<tr>
    					<td className='color' style={{backgroundColor: "#008000"}}></td><td> Green </td><td>#008000</td><td>rgb(0, 128, 0)</td>
    				</tr>
    				<tr>
    					<td className='color' style={{backgroundColor: "#00ffff"}}></td><td> Aqua </td><td>#00ffff</td><td>rgb(0, 255, 255)</td>
    				</tr>
    				<tr>
    					<td className='color' style={{backgroundColor: "#008080"}}></td><td> Teal </td><td>#008080</td><td>rgb(0, 128, 128)</td>
    				</tr>
    				<tr>
    					<td className='color' style={{backgroundColor: "#0000ff"}}></td><td> Blue </td><td>#0000ff</td><td>rgb(0, 0, 255)</td>
    				</tr>
    				<tr>
    					<td className='color' style={{backgroundColor: "#000080"}}></td><td> Navy </td><td>#000080</td><td>rgb(0, 0, 1 28)</td>
    				</tr>
    				<tr>
    					<td className='color' style={{backgroundColor: "#ff00ff"}}></td><td> Fuchsia </td><td>#ff00ff</td><td>rgb(255, 0, 255)</td>
    				</tr>
    				<tr>
    					<td className='color' style={{backgroundColor: "#800080"}}></td><td> Purple </td><td>#800080</td><td>rgb(128, 0, 128)</td>
    				</tr>
    			</table>



				<div class="container mt-4 mb-4 d-flex justify-content-between">
                    <Link class="btn btn-primary" to="/css-tutorials/css-inserting"><Adl /> Previous</Link>
                    <Link class="btn btn-primary" to="/css-tutorials/css-backgrounds">Next <Adr /></Link>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Css_colors;