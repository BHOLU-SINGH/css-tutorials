import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Adl from "../Adl";
import Adr from "../Adr";

const Css_tables = () => {
const syntax_1 = `
  table, th, td{
    border: 1px solid black;
  }
`
const syntax_2 = `
  table{
    border-collapse: collapse;
  }
  table, th, td{
    border: 1px solid black;
  }
`
const syntax_3 = `
  table{
    border-collapse: collapse;
  }
  table, th, td{
    border: 1px solid black;
  }
  th, td{
    padding: 5px;
  }
`
const syntax_4 = `
  table{
    border-collapse: collapse;
    font-family: sans-serif;
  }
  table, th, td{
    border: 1px solid black;
  }
  th, td{
    padding: 5px;
  }
  /* the selector below targets th elements inside the thead element and td elements inside the tbody element */
  thead th, tbody td{
    text-align: center;
  }
  /* the selector below targets td elements inside the t foot element */
  tfoot td{
    text-align: right;
  }
`
const syntax_5 = `<th>`
const syntax_6 = `
  table{
    table-layout: fixed;
    width: 100%;
    border-collapse: collapse;
    font-family: sans-serif;
  }
  table, th, td{
    border: 1px solid black;
  }
  th, td{
    padding: 5px;
    text-align: center;
  }
  /* selects the first th element */
  thead th:nth-child(1){
    width: 30%;
  }
  /* selects the second th element */
  thead th:nth-child(2){
    width: 30%;
  }
  /* selects the third th elements */
  thead th:nth-child(3){
    width: 40%;
  }
`
const syntax_7 = `
  table{
    border-collapse: collapse;
    color: white;
    font-family: sans-serif;
  }
  table, th, td{
    border: 1px solid black;
    text-align: center;
  }
  th, td{
    padding: 5px;
  }
  /* selects odd rows */
  tr:nth-child(odd){
    background: #173459;
  }
  /* selects even rows */
  tr:nth-child(even){
    background: #903C56;
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
         <h3>CSS Tables</h3>
    		<p>With CSS, we can greatly improve the looks of HTML Tables.</p>
         <h3>CSS Table Borders</h3>
         <p>We can add borders to a table using the <b>border</b> CSS property. Here is an example:</p>
         <pre>
            <code>{syntax_1}</code>
         </pre>
         <p>Was that an ugly table? Yes, because of the ugly-looking multiple borders. Don't worry we can fix that!</p>
         <h3>CSS Collapsing Table Borders</h3>
         <p>The <b>border-collapse: collapse</b> CSS declaration collapses table borders into one.</p>
         <pre>
            <code>{syntax_2}</code>
         </pre>
         <h3>CSS Table Padding</h3>
         <p>To add space between a table cell's border and content we can use the <b>padding</b> CSS property.</p>
         <pre>
            <code>{syntax_3}</code>
         </pre>
         <h3>CSS Table Aligning Text Content</h3>
         <p>We can align text inside the table cells using the text-align CSS property.</p>
         <pre>
            <code>{syntax_4}</code>
         </pre>
         <h3>CSS Table - Layout and Width</h3>
         <p>By default, the width of table columns resizes according to their content, this makes the tables produce strange results.</p>
         <p>It's generally a good idea to set the <b>table-layout</b> property to <b>fixed</b> as it makes the table behave more predictable.</p>
         <p>With that we can size the columns by setting the table's heading widths.</p>
         <p>In the example below we will use the <b>:nth-child</b> <a href="#">pseudo-class</a> to individually select the <b>{syntax_5}</b> elements.</p>
         <p>We also need to set the <b>width</b> of the table for this to work.</p>
         <pre>
            <code>{syntax_6}</code>
         </pre>
         <h3>CSS Table - Striped Rows</h3>
         <p>We can have alternating rows of color to make table data easier to parse and read.</p>
         <p>To do this we need to select both even and odd rows then style them differently.</p>
         <p>Again, we are going to use the <b>:nth-child</b> <a href="#">pseudo-class</a></p>
         <pre>
            <code>{syntax_7}</code>
         </pre>
               

		   <div class="container mt-4 mb-4 d-flex justify-content-between">
            <Link class="btn btn-primary" to="/css-tutorials/css-lists"><Adl /> Previous</Link>
            <Link class="btn btn-primary" to="/css-tutorials/css-outline">Next <Adr /></Link>
         </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Css_tables;