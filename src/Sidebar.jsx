import React from 'react';
import { Link } from 'react-router-dom';
import Adr from './Adr';
import "./index.css";

const Sidebar = () => {

    const interger = `<integer>`
    const number = `<number>`
    const length = `<length>`
    const percentage = `<percentage>`
    const string = `<string>`
    const color = `<color>`
    const url = `<url>`
    const angle = `<angle>`

    return(
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button> */}
                <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{color: "#222"}}>
                    <ul class="navbar-nav me-auto mb-lg-0 d-flex flex-column" >
                        <Link to="/"><Adr /> CSS Introduction</Link>
                        <Link to="/css-tutorials/css-syntax-and-selectors"><Adr /> CSS Syntax and Selectors</Link>
                        <Link to="/css-tutorials/css-inserting"><Adr /> CSS Inserting</Link>
                        <Link to="/css-tutorials/css-colors"><Adr /> CSS Colors</Link>
                        <Link to="/css-tutorials/css-backgrounds"><Adr /> CSS Backgrounds</Link>
                        <Link to="/css-tutorials/css-borders"><Adr /> CSS Borders</Link>
                        <Link to="/css-tutorials/css-margins"><Adr /> CSS Margins</Link>
                        <Link to="/css-tutorials/css-padding"><Adr /> CSS Padding</Link>
                        <Link to="/css-tutorials/css-width-and-height"><Adr /> CSS Width and Height</Link>
                        <Link to="/css-tutorials/css-box-models"><Adr /> CSS Box Models</Link>
                        <Link to="/css-tutorials/css-text"><Adr /> CSS Text</Link>
                        <Link to="/css-tutorials/css-fonts"><Adr /> CSS Fonts</Link>
                        <Link to="/css-tutorials/css-icons"><Adr /> CSS Icons</Link>
                        <Link to="/css-tutorials/css-links"><Adr /> CSS Links</Link>
                        <Link to="/css-tutorials/css-lists"><Adr /> CSS Lists</Link>
                        <Link to="/css-tutorials/css-tables"><Adr /> CSS Tables</Link>
                        <Link to="/css-tutorials/css-outline"><Adr /> CSS Outline</Link>
                        <Link to="/css-tutorials/css-buttons"><Adr /> CSS Buttons</Link>
                        <Link to="/css-tutorials/css-images"><Adr /> CSS Images</Link>
                        <Link to="/css-tutorials/css-layout-the-display-property"><Adr /> CSS Layout- The display property</Link>
                        <Link to="/css-tutorials/css-layout-width-and-max-width"><Adr /> CSS Layout- width and max-width</Link>
                        <Link to="/css-tutorials/css-layout-positioning"><Adr /> CSS Layout- Positioning</Link>
                        <Link to="/css-tutorials/css-layout-overflow"><Adr /> CSS Layout- Overflow</Link>
                        <Link to="/css-tutorials/css-layout-float-and-clear"><Adr /> CSS Layout- float and clear</Link>
                        <Link to="/css-tutorials/css-layout-inline-block"><Adr /> CSS Layout- inline-block</Link>
                        <Link to="/css-tutorials/css-layout-horizontal-and-vertical-align"><Adr /> CSS Layout- Horizontal and Vertical Align</Link>
                        <Link to="/css-tutorials/css-combinators"><Adr /> CSS Conbinators</Link>
                        <Link to="/css-tutorials/css-pseudo-classes"><Adr /> CSS Pseudo-classes</Link>
                        <Link to="/css-tutorials/css-pseudo-elements"><Adr /> CSS Pseudo-elements</Link>
                        <Link to="/css-tutorials/css-attribute-selectors"><Adr /> CSS Attribute Selectors</Link>
                        <Link to="/css-tutorials/css-opacity"><Adr /> CSS Opacity</Link>
                        <Link to="/css-tutorials/css3-introduction"><Adr /> CSS3 Introduction</Link>
                        <Link to="/css-tutorials/css3-rounded-corners"><Adr /> CSS3 Rounded Corners</Link>
                        <Link to="/css-tutorials/css3-border-images"><Adr /> CSS3 Border Images</Link>
                        <Link to="/css-tutorials/css3-colors"><Adr /> CSS3 Colors</Link>
                        <Link to="/css-tutorials/css3-backgrounds"><Adr /> CSS3 Backgrounds</Link>
                        <Link to="/css-tutorials/css3-gradients"><Adr /> CSS3 Gradients</Link>
                        <Link to="/css-tutorials/css3-shadow-effects"><Adr /> CSS3 Shadow Effects</Link>
                        <Link to="/css-tutorials/css3-text"><Adr /> CSS3 Text</Link>
                        <Link to="/css-tutorials/css3-web-fonts"><Adr /> CSS3 Web Fonts</Link>
                        <Link to="/css-tutorials/css3-2d-transforms"><Adr /> CSS3 2D Transforms</Link>
                        <Link to="/css-tutorials/css3-3d-transforms"><Adr /> CSS3 3D Transforms</Link>
                        <Link to="/css-tutorials/css3-transitions"><Adr /> CSS3 Transitions</Link>
                        <Link to="/css-tutorials/css3-animations"><Adr /> CSS3 Animations</Link>
                        <Link to="/css-tutorials/css3-multiple-columns"><Adr /> CSS3 Multiple Columns</Link>
                        {/* <Link to="/css-tutorials/css3-user-interface"><Adr /> CSS3 User Interface</Link>
                        <Link to="/css-tutorials/css3-box-sizing"><Adr /> CSS3 Box Sizing</Link>
                        <Link to="/css-tutorials/css3-flexible-boxes"><Adr /> CSS3 Flexible Boxes</Link>
                        <Link to="/css-tutorials/css3-media-queries"><Adr /> CSS3 Media Queries</Link>
                        <Link to="/css-tutorials/web-design-css-dropdowns"><Adr /> Web Design- CSS Dropdowns</Link>
                        <Link to="/css-tutorials/web-design-css-navigation-bar"><Adr /> Web Design- CSS Navigation Bar</Link>
                        <Link to="/css-tutorials/web-design-css-footer"><Adr /> Web Design- CSS Footer</Link>
                        <Link to="/css-tutorials/web-design-css-pagination"><Adr /> Web Design- CSS Pagination</Link>
                        <Link to="/css-tutorials/web-design-css-breadcrumbs"><Adr /> Web Design- CSS Breadcrumbs</Link>
                        <Link to="/css-tutorials/web-design-css-tooltops"><Adr /> Web Design- CSS Tooltops</Link>
                        <Link to="/css-tutorials/web-design-css-lightbox"><Adr /> Web Design- CSS Lightbox</Link>
                        <Link to="/css-tutorials/web-design-css-image-gallery"><Adr /> Web Design- CSS Image Gallery</Link>
                        <Link to="/css-tutorials/web-design-css-image-sprites"><Adr /> Web Design- CSS Image Sprites</Link>
                        <Link to="/css-tutorials/web-design-css-accordion"><Adr /> Web Design- CSS Accordion</Link>
                        <Link to="/css-tutorials/web-design-css-forms"><Adr /> Web Design- CSS Forms</Link>
                        <Link to="/css-tutorials/web-design-css-counters"><Adr /> Web Design- CSS Counters</Link>
                        <Link to="/css-tutorials/responsive-web-design-introduction"><Adr /> Responsive Web Design- Introduction</Link>
                        <Link to="/css-tutorials/responsive-web-design-viewport"><Adr /> Responsive Web Design- Viewport</Link>
                        <Link to="/css-tutorials/responsive-web-design-grid-view"><Adr /> Responsive Web Design- Grid-View</Link>
                        <Link to="/css-tutorials/responsive-web-design-media-queries"><Adr /> Responsive Web Design- Media Queries</Link>
                        <Link to="/css-tutorials/responsive-web-design-Images"><Adr /> Responsive Web Design- Images</Link>
                        <Link to="/css-tutorials/responsive-web-design-videos"><Adr /> Responsive Web Design- Videos</Link>
                        <Link to="/css-tutorials/responsive-web-design-Frameworks"><Adr /> Responsive Web Design- Frameworks</Link>
                        <p><strong> CSS Basic DataTypes </strong></p>
                        <Link to="/css-tutorials/what-are-css-data-types"><Adr /> What are CSS data types?</Link>
                        <Link to="/css-tutorials/css-integer"><Adr /> CSS <strong>{interger}</strong></Link>
                        <Link to="/css-tutorials/css-number"><Adr /> CSS <strong>{number}</strong></Link>
                        <Link to="/css-tutorials/css-length"><Adr /> CSS <strong>{length}</strong></Link>
                        <Link to="/css-tutorials/css-percentage"><Adr /> CSS <strong>{percentage}</strong></Link>
                        <Link to="/css-tutorials/css-string"><Adr /> CSS <strong>{string}</strong></Link>
                        <Link to="/css-tutorials/css-color"><Adr /> CSS <strong>{color}</strong></Link>
                        <Link to="/css-tutorials/css-url"><Adr /> CSS <strong>{url}</strong></Link>
                        <Link to="/css-tutorials/css-angle"><Adr /> CSS <strong>{angle}</strong></Link> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Sidebar;