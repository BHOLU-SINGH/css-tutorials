import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Adl from "../Adl";
import Adr from "../Adr";

const Css_icons = () => {
const syntax_1 = `<span>`
const syntax_2 = `<i>`
const syntax_3 = `<link>`
const syntax_4 = `<url>`
const syntax_5 = `<head>`
const syntax_6 = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Font Awesome Icons</title>
    <link rel="stylesheet" href="https://cdnjs.cIoudfIare.com/ajax/Iibs/font-awesome/4.7.O/css/font-awesome.css" />
  </head>
  <body>
    <i class="fa fa-android"></i>
    <i class="fa fa-anchor"></i>
    <i class="fa fa-save"></i>
    <i class="fa fa-file"></i>
    <i class="fa fa-warning"></i>
    <i class="fa fa-heart"></i>
    <p><b>Note!</b> This demo requires internet connection.</p>
  </body>
  </html>
`
const syntax_7 = `<href>`
const syntax_8 = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Bootstrap Icons</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
  </head>
  <body>
    <i class="glyphicon glyphicon-ok"></i>
    <i class="glyphicon glyphicon-arrow-left"></i>
    <i class="glyphicon glyphicon-arrow-right"></i>
    <i class="glyphicon glyphicon-eye-close"></i>
    <i class="glyphicon glyphicon-warning-sign"></i>
    <i class="glyphicon glyphicon-wrench"></i>
    <p><b>Note!</b> This demo requires internet connection.</p>
  </body>
  </html>
`
const syntax_9 = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Material Icons</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?fami1y=Material+Icons" />
  </head>
  <body>
    <i class="material-icons">favorite</i>
    <i class="material-icons">android</i>
    <i class="material-icons">face</i>
    <i class="material-icons">done</i>
    <i class="material-icons">description</i>
    <i class="material-icons">grade</i>
    <p><b>Note!</b> This demo requires internet connection.</p>
  </body>
  </html>
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
          <h3>CSS Icons</h3>
    		  <p>We can add icons to our HTML page by using icon libraries such as Font Awesome, Bootstrap Icons and Material Icons by Google.</p>
          <p>To add icons we should use HTML inline elements e.g. <b>{syntax_1}</b> or <b>{syntax_2}</b>.</p>
          <h3>Font Awesome Icons</h3>
          <p>To use Font Awesome icons we need to include the library to our HTML page using the <b>{syntax_3}</b> tag with its <b>href</b> attribute containing the <b style={{textDecoration: "underline"}}>{syntax_4}</b> of the library.</p>
          <p>The <b>{syntax_3}</b> tag should be inside the <b>{syntax_5}</b> element.</p>
          <pre>
            <code>{syntax_6}</code>
          </pre>
          <p>Find all free Font Awesome icons here: <a href="#">Font Awesome Icons</a></p>
          <h3>Bootstrap Icons</h3>
          <p>To use Bootstrap icons we need to include the library (it's a CSS library) to our HTML page using the <b>{syntax_3}</b> tag with its <b>{syntax_7}</b> attribute containing the <b style={{textDecoration: "underline"}}>{syntax_4}</b> of the library.</p>
          <p>The <b>{syntax_3}</b> tag should be inside the <b>{syntax_5}</b> element.</p>
          <pre>
            <code>{syntax_8}</code>
          </pre>
          <p>Find all Bootstrap's icons here: <a href="#">Bootstrap's Icons</a></p>
          <h3>Material Icons</h3>
          <p>To use Material Icons we need to include the library (it's a CSS library) to our HTML page using the <b>{syntax_3}</b> tag with its <b>{syntax_7}</b> attribute containing the <b style={{textDecoration: "underline"}}>{syntax_4}</b> of the library.</p>
          <p>The <b>{syntax_3}</b> tag should be inside the <b>{syntax_5}</b> element.</p>
          <pre>
            <code>{syntax_9}</code>
          </pre>
          <p>Find all Material Icons here: <a href="#">Material Icons</a></p>
               

		      <div class="container mt-4 mb-4 d-flex justify-content-between">
            <Link class="btn btn-primary" to="/css-tutorials/css-fonts"><Adl /> Previous</Link>
            <Link class="btn btn-primary" to="/css-tutorials/css-links">Next <Adr /></Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Css_icons;