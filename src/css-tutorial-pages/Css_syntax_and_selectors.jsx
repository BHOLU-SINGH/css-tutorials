import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Adl from "../Adl";
import Adr from "../Adr";

const Css_syntax_and_selectors = () => {
  const syntax_1 = `
    ---------------------------------
    |div{                           |
    |    background-color: black;   |
    |    width: 200px;              |
    |    height: 200px;             |
    |}                              |
    ---------------------------------
  `
  const syntax_2 = `
    ------
    |div |{
    ------                               |
        background-color: black;
        width: 200px;   
        height: 200px;
    }
  `
  const syntax_3 = `
  { and a closing curly brace }
  `
  const syntax_4 = `
       __--------------------------
  div |{                          |
      |background-color: black;   |
      |width: 200px;              |
   ___|height: 200px;             |
  |}                              |
  ---------------------------------
`
const syntax_5 = `
    ---------------------------------
    |div{                           |
    |    background-color: black;   |
    |    width: 200px;              |
    |    height: 200px;             |
    |}                              |
    ---------------------------------
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
                <h3>CSS Syntax and Selectors</h3>
                <p>A <strong>CSS ruleset/rele</strong> is composed of a <strong>selector</strong> and a <strong>declaration block</strong>.</p>
                <pre>
                    <code>{syntax_1}</code>
                </pre>
                <p>The <strong>selector</strong> or a <strong>group of selectors</strong> targets the elements we want to style.</p>
                <pre>
                    <code>{syntax_2}</code>
                </pre>
                <p>The <strong>declaration blocks</strong> are grouped in blocks. Each declaration block contains CSS declarations which are wrapped by an opening curly brace{syntax_3}.</p>
                <pre>
                    <code>{syntax_4}</code>
                </pre>
                <p><strong>CSS declarations</strong> or <strong>declarations</strong> are contained inside a declaration block. Each declaration has to be separated by a semicolon <strong>;</strong> otherwise the codes won't work.</p>
                <p>It is allowed not to put a semicolon in the last declaration.</p>
                <pre>
                    <code>{syntax_5}</code>
                </pre>


                <div class="container mt-4 mb-4 d-flex justify-content-between">
                    <Link class="btn btn-primary" to="/"><Adl /> Previous</Link>
                    <Link class="btn btn-primary" to="/css-tutorials/css-inserting">Next <Adr /></Link>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Css_syntax_and_selectors;