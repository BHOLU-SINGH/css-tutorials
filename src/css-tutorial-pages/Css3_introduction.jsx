import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Adl from "../Adl";
import Adr from "../Adr";


const Css3_introduction = () => {
  return(
    <>
    <Menu />
    <div className="container-fluid mt-2">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9 mt-2 p-3 bg-light">
          <h3>CSS3 Introduction</h3>
          <p>CSS3 is the latest and current standard of CSS. It is completely backwards-compatible with earlier versions of CSS e.g. CSS2.</p>
          <p>It is also the latest evolution of the Cascading Style Sheets language and aims to extend CSS2.</p>
          <p>The following are the modules of CSS3 that extend and/or ammend CSS2:</p>
          <ul>
            <li>Colors</li>
            <li>Selectors</li>
            <li>Style Attributes</li>
            <li>Box Model</li>
            <li>Backgrounds and Borders</li>
            <li>Rounded Corners</li>
            <li>Image Values and Replaced Content</li>
            <li>Text Effects</li>
            <li>2D/3D Transformations</li>
            <li>Transitions or Animations</li>
            <li>Media Queries</li>
            <li>Flexible Boxes</li>
            <li>Multiple Column Layout</li>
            <li>User Interface</li>
          </ul>
          <p><b>Note!</b> We have all the lessons of the CSS3 modules mentioned above, so keep learning.</p>

		      <div className="container mt-4 mb-4 d-flex justify-content-between">
            <Link className="btn btn-primary" to="/css-tutorials/css-opacity"><Adl /> Previous</Link>
            <Link className="btn btn-primary" to="/css-tutorials/css3-rounded-corners">Next <Adr /></Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Css3_introduction;