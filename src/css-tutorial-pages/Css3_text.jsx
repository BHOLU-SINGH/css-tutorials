import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Adl from "../Adl";
import Adr from "../Adr";


const Css3_text = () => {
const syntax_1 = `  overflow: hidden;
  white-space: nowrap;
`
const syntax_2 = `  p{
   text-overflow: clip; 
   width: 50%; 
   padding: 2px 5px; 
   background: lightgrey; 

   /* both are required */ 
   overflow: hidden; 
   white-space: nowrap;
  }
`
const syntax_3 = `  p{
   text-overflow: ellipse; 
   width: 50%; 
   padding: 2px 5px; 
   background: lightgrey;
  
   /* both are required */ 
   overflow: hidden; 
   white-space: nowrap;
  }
`
const syntax_4 = `  p{
   text-overflow: '$$$'; 
   width: 50%; 
   padding: 2px 5px; 
   background: lightgrey;
  
   /* both are required */ 
   overflow: hidden; 
   white-space: nowrap;
  }
`
const syntax_5 = `  .normal{
   word-wrap: normal;
  }
  .break-word{
   word-wrap: break-word;
  }
  p{
   width: 250px;
   border: 1px solid;
  }
`
const syntax_6 = `  .normal{
   word-wrap: normal;
  }
  .break-all{
   word-wrap: break-all;
  }
  .keep-all{
   word-wrap: keep-all;
  }
  .break-word{
   word-wrap: break-word;
  }
  p{
   padding: 3px;
   border: 1px solid;
   width: 250px;
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
          <h3>CSS3 Text</h3>
          <p>In CSS3, there are new ways to style text.</p>
          <p>In this lesson we'll study the following CSS3 properties:</p>
          <ul>
            <li><b>text-overflow</b></li>
            <li><b>word-wrap</b></li>
            <li><b>word-break</b></li>
          </ul>
          <h3>CSS3 Text overflow</h3>
          <p>The <b>text-overflow</b> CSS property sets how overflowing content (hidden) is signaled to users.</p>
          <h5>Valid Values:</h5>
          <ul>
            <li><b>clip</b></li>
            <li><b>ellipse</b></li>
            <li>custom text/character e.g. <b>'text'</b></li>
          </ul>
          <p>The text-overflow property doesnt force an overflow to occur. To make text overflow its container you have to set other CSS properties: <b>overflow</b> and <b>white-space</b>. For example:</p>
          <pre>
            <code>{syntax_1}</code>
          </pre>
          <h3>CSS3 Text Overflow - The clip Value</h3>
          <p>The hidden overflow content can be clipped with the <b>clip</b> value (default). It will truncate the text at the limit of the content area, therefore the truncation can happen in the middle of a character.</p>
          <pre className='mb-1'>
            <code>{syntax_2}</code>
          </pre>
          <p className="css3-text-p1 mb-5">I love these CSS Tutorials. These tutorials are very helpful to learn css.</p>

          <h3>CSS3 Text Overflow - The ellipsis Value</h3>
          <p>We can display an ellipsis to represent the clipped text.</p>
          <p><b>Note!</b> If there is not enough space to display the ellipsis, it is clipped.</p>
          <pre className='mb-1'>
            <code>{syntax_3}</code>
          </pre>
          <p className="css3-text-p1 mb-5" style={{textOverflow: "ellipsis"}}>I love these CSS Tutorials. These tutorials are very helpful to learn css.</p>

          <h3>CSS3 Text Overflow - Custom Value</h3>
          <p>We can display a custom text or character to represent the clipped text.</p>
          <pre className='mb-1'>
            <code>{syntax_4}</code>
          </pre>
          <p className="css3-text-p1 mb-5" style={{textOverflow: '$$$'}}>I love these CSS Tutorials. These tutorials are very helpful to learn css.</p><div><b>Note!</b> It is not supported in most browsers!</div>

          <h3>CSS3 Word wrap</h3>
          <p>The <b>word-wrap</b> CSS property allows long words to be broken and wrap onto the next line.</p>
          <h5>Valid Values:</h5>
          <ul>
            <li><b>normal</b> default; only breaks words at allowed break points</li>
            <li><b>break-word</b> allows long words (unbreakable) to be broken</li>
          </ul>
          <p>Here is an example:</p>
          <pre className='mb-1'>
            <code>{syntax_5}</code>
          </pre>
          {/* <h5>word-wrap: normal</h5>
          <p className="css3-text-p3 normal">abcdefghijklmnopqrstuvwxyzabcdefghijklmn</p>
          <h5>word-wrap: break-word</h5>
          <p className="css3-text-p3 mb-5 break-word">abcdefghijklmnopqrstuvwxyzabcdefghijklmn</p> */}
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h5>word-wrap: normal</h5>
                <p className="css3-text-p3 normal">abcdefghijklmnopqrstuvwxyzabcdefghijklmn</p>
              </div>
              <div className="col-md-6">
                <h5>word-wrap: break-word</h5>
                <p className="css3-text-p3 break-word">abcdefghijklmnopqrstuvwxyzabcdefghijklmn</p>
              </div>
            </div>
          </div>

          <h3>CSS3 Word Break</h3>
          <p>The <b>word-break</b> CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.</p>
          <h5>Valid Values:</h5>
          <ul>
            <li><b>normal</b>: uses the default line-break rule</li>
            <li><b>break-all</b>: prevents overflow by breaking long words (unbreakable) at any character</li>
            <li><b>keep-all</b>: word breaks should not be used for Chinese/Japanese/Korean (CJK) text, non-CJK text behavior is the same as for <b>normal</b></li>
            <li><b>break-word</b>: prevents overflow by breaking long words (unbreakable) at arbitrary points</li>
          </ul>
          <p>Here is an example:</p>
          <pre className='mb-1'>
            <code>{syntax_6}</code>
          </pre>
          {/* <p>word-wrap: normal</p>
          <p className="css3-text-p4 normal">abcdefghijklmnopqrstuvwxyzabcdefghijklmn</p>
          <p>word-wrap: break-all</p>
          <p className="css3-text-p4 break-all">abcdefghijklmnopqrstuvwxyzabcd<br/>efghijklmn</p>
          <p>word-wrap: keep-all</p>
          <p className="css3-text-p4 keep-all">abcdefghijklmnopqrstuvwxyzabcdefghijklmn</p>
          <p>word-wrap: break-word</p>
          <p className="css3-text-p4 mb-5 break-word">abcdefghijklmnopqrstuvwxyzabcdefghijklmn</p> */}
          <div className="container mb-0">
            <div className="row">
              <div className="col-md-6">
                <p className='mb-0'>word-wrap: normal</p>
                <p className="css3-text-p4 normal">abcdefghijklmnopqrstuvwxyzabcdefghijklmn</p>
              </div>
              <div className="col-md-6">
                <p className='mb-0'>word-wrap: break-all</p>
                <p className="css3-text-p4 break-all">abcdefghijklmnopqrstuvwxyzabcd<br/>efghijklmn</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <p className='mb-0'>word-wrap: keep-all</p>
                <p className="css3-text-p4 keep-all">abcdefghijklmnopqrstuvwxyzabcdefghijklmn</p>
              </div>
              <div className="col-md-6">
                <p className='mb-0'>word-wrap: break-word</p>
                <p className="css3-text-p4 break-word">abcdefghijklmnopqrstuvwxyzabcdefghijklmn</p>
              </div>
            </div>
          </div>


		      <div className="container mt-1 mb-4 d-flex justify-content-between">
            <Link className="btn btn-primary" to="/css-tutorials/css3-shadow-effects"><Adl /> Previous</Link>
            <Link className="btn btn-primary" to="/css-tutorials/css3-fonts">Next <Adr /></Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Css3_text;