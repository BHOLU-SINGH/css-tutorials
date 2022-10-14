import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Adl from "../Adl";
import Adr from "../Adr";


const Css3_multiple_columns = () => {
const syntax_1 = `  <integer>`
const syntax_2 = `  div{
   column-count: 2;
  }
`
const syntax_3 = `  div{
   column-count: 3;
   column-width: 10px;
  }
`
const syntax_4 = `  div{
   columns: 10px 3;
  }
`
const syntax_5 = `  div{
   column-count: 3;
   column-rule-style: double;
   column-rule-width: 5px;
   column-rule-color: red;
  } 
`
const syntax_6 = `  div{
  column-count: 3;
  column-rule: 5px groove blue;
}
`
const syntax_7 = `  <h3>`
const syntax_8 = `  div{
   column-count: 3;
  }
  h3{
   column-span: all;
   text-align: center;
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
          <h3>CSS3 Multiple Columns</h3>
          <p>With CSS3, you can make a multi-column layout of text inside an element.</p>
          <p>In this lesson you will learn about the following CSS properties:</p>
          <ul>
            <li><b>column-count</b></li>
            <li><b>column-width</b></li>
            <li><b>columns</b></li>
            <li><b>column-gap</b></li>
            <li><b>column-rule-style</b></li>
            <li><b>column-rule-width</b></li>
            <li><b>column-rule-color</b></li>
            <li><b>column-rule</b></li>
            <li><b>column-span</b></li>
          </ul>
          <h3>CSS3 Creating Multiple Columns</h3>
          <p>To create a multi-column layout of text you need to use the <b>column-count</b> CSS property.</p>
          <p>The <b>column-count</b> CSS property breaks an element's content into the specified number of columns.</p>
          <p>Its value should be an <b>{syntax_1}</b>.</p>
          <pre className='mb-1'>
            <code>{syntax_2}</code>
          </pre>
          <div className='mb-5' style={{columnCount: "2"}}> I love these css tutorials. Because these tutorials are very helpful to learn css quickly. I love these css tutorials. Because these tutorials are very helpful to learn css quickly. </div>
          
          <h3>CSS3 Setting Column Width</h3>
          <p>The <b>column-width</b> CSS property sets the width of each column.</p>
          <pre className='mb-1'>
            <code>{syntax_3}</code>
          </pre>
          <div className="sett-colmn-width mb-5"> I love these css tutorials. Because these tutorials are very helpful to learn css quickly. I love these css tutorials. Because these tutorials are very helpful to learn css quickly. I love these css tutorials. Because these tutorials are very helpful to learn css quickly.</div><br/>
          <p style={{color: "#000"}}><b> Note! </b> Always set appropriate width for your columns' content or else the text will be rendered ugly. </p>
          <p>The code above can be shortened with the help of the <b>columns</b> CSS property.</p>
          <p>It sets the column width and count of an element.</p>
          <pre className='mb-1'>
            <code>{syntax_4}</code>
          </pre>
          <div className="sett-colmn-width2 mb-5"> I love these css tutorials. Because these tutorials are very helpful to learn css quickly. I love these css tutorials. Because these tutorials are very helpful to learn css quickly. I love these css tutorials. Because these tutorials are very helpful to learn css quickly. I love these css tutorials. Because these tutorials are very helpful to learn css quickly. </div>
          <h3>CSS3 Styling Column Rules</h3>
          <p>We can style the column rules in a multi-column layout by changing its style, width and color.</p>
          <p>The <b>column-rule-style</b> CSS property sets the style of the line drawn between columns in a multi-column layout.</p>
          <h5>Valid Values:</h5>
          <ul>
            <li><b>none</b></li>
            <li><b>hidden</b></li>
            <li><b>dotted</b></li>
            <li><b>dashed</b></li>
            <li><b>solid</b></li>
            <li><b>double</b></li>
            <li><b>groove</b></li>
            <li><b>ridge</b></li>
            <li><b>inset</b></li>
            <li><b>outset</b></li>
          </ul>
          <p>The <b>column-rule-width</b> CSS property sets the width of the line drawn between columns in a multi-column layout.</p>
          <p>The <b>column-rule-color</b> CSS property sets the color of the line drawn between columns in a multi-column layout.</p>
          <pre className='mb-1'>
            <code>{syntax_5}</code>
          </pre>
          <div className="style-colmn-rule mb-5"> I love these css tutorials. Because these tutorials are very helpful to learn css quickly. I love these css tutorials. Because these tutorials are very helpful to learn css quickly. I love these css tutorials. Because these tutorials are very helpful to learn css quickly. I love these css tutorials. Because these tutorials are very helpful to learn css quickly. </div>
          <p>We can shorten the code above with the help of the <b>column-rule</b>.</p>
          <p>It is a shorthand for:</p>
          <ul>
            <li><b>column-rule-style</b></li>
            <li><b>column-rule-width</b></li>
            <li><b>column-rule-color</b></li>
          </ul>
          <p>The order of the values does not matter.</p>
          <p>Here is an example:</p>
          <pre className='mb-1'>
            <code>{syntax_6}</code>
          </pre>
          <div className="style-colmn-rule2 mb-5"> I love these css tutorials. Because these tutorials are very helpful to learn css quickly. I love these css tutorials. Because these tutorials are very helpful to learn css quickly. I love these css tutorials. Because these tutorials are very helpful to learn css quickly. I love these css tutorials. Because these tutorials are very helpful to learn css quickly. </div>

          <h3>CSS3 Specifying An Element Span In A Column</h3>
          <p>The <b>column-span</b> sets how many columns an element should span inside a multi-column layout.</p>
          <h5>Valid Values:</h5>
          <ul>
            <li><b>none</b>: the element does not span multiple columns</li>
            <li><b>all</b>: the element spans across all columns</li>
          </ul>
          <p>The examples below shows an <b>{syntax_7}</b> element which spans three columns.</p>
          <pre className='mb-2'>
            <code>{syntax_8}</code>
          </pre>
          <h3 className="css3-m-col-heading"> CSS Tutorials </h3>
          <div className="specifying-element"> I love these css tutorials. Because these tutorials are very helpful to learn css quickly. I love these css tutorials. Because these tutorials are very helpful to learn css quickly. I love these css tutorials. Because these tutorials are very helpful to learn css quickly. </div>


		      <div className="container mt-5 mb-4 d-flex justify-content-between">
            <Link className="btn btn-primary" to="/css-tutorials/css3-animations"><Adl /> Previous</Link>
            <Link className="btn btn-primary" to="/css-tutorials/css3-user-interface">Next <Adr /></Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Css3_multiple_columns;