import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "./Sidebar";
import Menu from "./Menu";
import Adr from './Adr';

const Home = () => {

  const syntax = `
    body{
        background-color: black;
    }
    p{
        font-size: 20px;
        color: gold;
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
                <h3>CSS Introduction</h3>
                <h5>What is CSS?</h5>
                <ul>
                    <li>CSS stands for Cascading Stylesheet.</li>
                    <li>CSS is a stylesheet language used to describe the presentation of an HTML document.</li>
                    <li>CSS describes how elements should be rendered on screen.</li>
                </ul>
                <h5>CSS Prerequisites</h5>
                <p>Basic knowledge of working with files or file management.</p>
                <p>Basic understanding of HTML. In order to start learning CSS you have to have a basic understanding of HTML first. If your new to HTML you can install this app. <br /><a href="#">Learn HTML</a></p>
                <h5>Why Use CSS</h5>
                <p>defines styles of your web pages including design, layout and variations in display across devices and screen sizes.</p>
                <p>CSS can save you a lot of work. An external stylesheet saved as . css can be used to style multiple web pages all at once!</p>
                <h5>CSS Example</h5>
                <pre>
                    <code>{syntax}</code>
                </pre>
                <p>CSS is very fun to learn especially with our Try it Yourself Editor. So keep learning and enjoy!</p>

                <div class="container mt-4 mb-4 d-flex justify-content-between">
                    <Link class="btn btn-primary" to="/css-tutorials/css-syntax-and-selectors">Next <Adr /></Link>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Home;