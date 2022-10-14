import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "./Error404"
import Home from "./Home";
import Menu from "./Menu";
import Css_syntax_and_selectors from "./css-tutorial-pages/Css_syntax_and_selectors";
import Css_inserting from "./css-tutorial-pages/Css_inserting";
import Css_colors from "./css-tutorial-pages/Css_colors";
import Css_backgrounds from "./css-tutorial-pages/Css_backgrounds";
import Css_borders from "./css-tutorial-pages/Css_borders";
import Css_margins from "./css-tutorial-pages/Css_margins";
import Css_padding from "./css-tutorial-pages/Css_padding";
import Css_width_and_height from "./css-tutorial-pages/Css_width_and_height";
import Css_box_models from "./css-tutorial-pages/Css_box_models";
import Css_text from "./css-tutorial-pages/Css_text";
import Css_fonts from "./css-tutorial-pages/Css_fonts";
import Css_icons from "./css-tutorial-pages/Css_icons";
import Css_links from "./css-tutorial-pages/Css_links";
import Css_lists from "./css-tutorial-pages/Css_lists";
import Css_tables from "./css-tutorial-pages/Css_tables";
import Css_outline from "./css-tutorial-pages/Css_outline";
import Css_buttons from "./css-tutorial-pages/Css_buttons";
import Css_images from "./css-tutorial-pages/Css_images";
import Css_layout_the_display_property from "./css-tutorial-pages/Css_layout_the_display_property";
import Css_layout_width_and_max_width from "./css-tutorial-pages/Css_layout_width_and_max_width";
import Css_layout_positioning from "./css-tutorial-pages/Css_layout_positioning";
import Css_layout_overflow from "./css-tutorial-pages/Css_layout_overflow";
import Css_layout_float_and_clear from "./css-tutorial-pages/Css_layout_float_and_clear";
import Css_layout_inline_block from "./css-tutorial-pages/Css_layout_inline_block";
import Css_layout_horizontal_and_vertical_align from "./css-tutorial-pages/Css_layout_horizontal_and_vertical_align";
import Css_combinators from "./css-tutorial-pages/Css_combinators";
import Css_pseudo_classes from "./css-tutorial-pages/Css_pseudo_classes";
import Css_pseudo_elements from "./css-tutorial-pages/Css_pseudo_elements";
import Css_attribute_selectors from "./css-tutorial-pages/Css_attribute_selectors";
import Css_opacity from "./css-tutorial-pages/Css_opacity";
import Css3_introduction from "./css-tutorial-pages/Css3_introduction";
import Css3_rounded_corners from "./css-tutorial-pages/Css3_rounded_corners";
import Css3_border_images from "./css-tutorial-pages/Css3_border_images";
import Css3_colors from "./css-tutorial-pages/Css3_colors";
import Css3_backgrounds from "./css-tutorial-pages/Css3_backgrounds";
import Css3_gradients from "./css-tutorial-pages/Css3_gradients";
import Css3_shadow_effects from "./css-tutorial-pages/Css3_shadow_effects";
import Css3_text from "./css-tutorial-pages/Css3_text";
import Css3_web_fonts from "./css-tutorial-pages/Css3_web_fonts";
import Css3_2d_transforms from "./css-tutorial-pages/Css3_2d_transforms";
import Css3_3d_transforms from "./css-tutorial-pages/Css3_3d_transforms";
import Css3_transitions from "./css-tutorial-pages/Css3_transitions";
import Css3_animations from "./css-tutorial-pages/Css3_animations";
import Css3_multiple_columns from "./css-tutorial-pages/Css3_multiple_columns";
// import Css3_user_interface from "./css-tutorial-pages/Css3_user_interface";
// import Css3_box_sizing from "./css-tutorial-pages/Css3_box_sizing";
// import Css3_flexible_boxes from "./css-tutorial-pages/Css3_flexible_boxes";
// import Css3_media_queries from "./css-tutorial-pages/Css3_media_queries";
// import Web_design_css_dropdowns from "./css-tutorial-pages/Web_design_css_dropdowns";
// import Web_design_css_navigation_bar from "./css-tutorial-pages/Web_design_css_navigation_bar";
// import Web_design_css_footer from "./css-tutorial-pages/Web_design_css_footer";
// import Web_design_css_pagination from "./css-tutorial-pages/Web_design_css_pagination";
// import Web_design_css_breadcrumbs from "./css-tutorial-pages/Web_design_css_breadcrumbs";
// import Web_design_css_tooltops from "./css-tutorial-pages/Web_design_css_tooltops";
// import Web_design_css_lightbox from "./css-tutorial-pages/Web_design_css_lightbox";
// import Web_design_css_gallery from "./css-tutorial-pages/Web_design_css_gallery";
// import Web_design_css_image_sprites from "./css-tutorial-pages/Web_design_css_image_sprites";
// import Web_design_css_accordion from "./css-tutorial-pages/Web_design_css_accordion";
// import Web_design_css_forms from "./css-tutorial-pages/Web_design_css_forms";
// import Web_design_css_counters from "./css-tutorial-pages/Web_design_css_counters";
// import Responsive_web_design_introduction from "./css-tutorial-pages/Responsive_web_design_introduction";
// import Responsive_web_design_viewport from "./css-tutorial-pages/Responsive_web_design_viewport";
// import Responsive_web_design_grid_view from "./css-tutorial-pages/Responsive_web_design_grid_view";
// import Responsive_web_design_media_queries from "./css-tutorial-pages/Responsive_web_design_media_queries";
// import Responsive_web_design_images from "./css-tutorial-pages/Responsive_web_design_images";
// import Responsive_web_design_videos from "./css-tutorial-pages/Responsive_web_design_videos";
// import Responsive_web_design_frameworks from "./css-tutorial-pages/Responsive_web_design_frameworks";
// import What_are_css_data_types from "./css-tutorial-pages/What_are_css_data_types";
// import Css_integer from "./css-tutorial-pages/Css_integer";
// import Css_number from "./css-tutorial-pages/Css_number";
// import Css_length from "./css-tutorial-pages/Css_length";
// import Css_percentage from "./css-tutorial-pages/Css_percentage";
// import Css_string from "./css-tutorial-pages/Css_string";
// import Css_color from "./css-tutorial-pages/Css_color";
// import Css_url from "./css-tutorial-pages/Css_url";
// import Css_angle from "./css-tutorial-pages/Css_angle";


const App = () => {
  // const interger = `<integer>`
  //   const number = `<number>`
  //   const length = `<length>`
  //   const percentage = `<percentage>`
  //   const string = `<string>`
  //   const color = `<color>`
  //   const url = `<url>`
  //   const angle = `<angle>`
  return (
      <BrowserRouter>
        <Routes><Route path="*" element={<Error404 />} />
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/css-tutorials/css-syntax-and-selectors" element={<Css_syntax_and_selectors />} />
          <Route path="/css-tutorials/css-inserting" element={<Css_inserting />} />
          <Route path="/css-tutorials/css-colors" element={<Css_colors />} />
          <Route path="/css-tutorials/css-backgrounds" element={<Css_backgrounds />} />
          <Route path="/css-tutorials/css-borders" element={<Css_borders />} />
          <Route path="/css-tutorials/css-margins" element={<Css_margins />} />
          <Route path="/css-tutorials/css-padding" element={<Css_padding />} />
          <Route path="/css-tutorials/css-width-and-height" element={<Css_width_and_height />} />
          <Route path="/css-tutorials/css-box-models" element={<Css_box_models />} />
          <Route path="/css-tutorials/css-text" element={<Css_text />} />
          <Route path="/css-tutorials/css-fonts" element={<Css_fonts />} />
          <Route path="/css-tutorials/css-icons" element={<Css_icons />} />
          <Route path="/css-tutorials/css-links" element={<Css_links />} />
          <Route path="/css-tutorials/css-lists" element={<Css_lists />} />
          <Route path="/css-tutorials/css-tables" element={<Css_tables />} />
          <Route path="/css-tutorials/css-outline" element={<Css_outline />} />
          <Route path="/css-tutorials/css-buttons" element={<Css_buttons />} />
          <Route path="/css-tutorials/css-images" element={<Css_images />} />
          <Route path="/css-tutorials/css-layout-the-display-property" element={<Css_layout_the_display_property />} />
          <Route path="/css-tutorials/css-layout-width-and-max-width" element={<Css_layout_width_and_max_width />} />
          <Route path="/css-tutorials/css-layout-positioning" element={<Css_layout_positioning />} />
          <Route path="/css-tutorials/css-layout-overflow" element={<Css_layout_overflow />} />
          <Route path="/css-tutorials/css-layout-float-and-clear" element={<Css_layout_float_and_clear />} />
          <Route path="/css-tutorials/css-layout-inline-block" element={<Css_layout_inline_block />} />
          <Route path="/css-tutorials/css-layout-horizontal-and-vertical-align" element={<Css_layout_horizontal_and_vertical_align />} />
          <Route path="/css-tutorials/css-combinators" element={<Css_combinators />} />
          <Route path="/css-tutorials/css-pseudo-classes" element={<Css_pseudo_classes />} />
          <Route path="/css-tutorials/css-pseudo-elements" element={<Css_pseudo_elements />} />
          <Route path="/css-tutorials/css-attribute-selectors" element={<Css_attribute_selectors />} />
          <Route path="/css-tutorials/css-opacity" element={<Css_opacity />} />
          <Route path="/css-tutorials/css3-introduction" element={<Css3_introduction />} />
          <Route path="/css-tutorials/css3-rounded-corners" element={<Css3_rounded_corners />} />
          <Route path="/css-tutorials/css3-border-images" element={<Css3_border_images />} />
          <Route path="/css-tutorials/css3-colors" element={<Css3_colors />} />
          <Route path="/css-tutorials/css3-backgrounds" element={<Css3_backgrounds />} />
          <Route path="/css-tutorials/css3-gradients" element={<Css3_gradients />} />
          <Route path="/css-tutorials/css3-shadow-effects" element={<Css3_shadow_effects />} />
          <Route path="/css-tutorials/css3-text" element={<Css3_text />} />
          <Route path="/css-tutorials/css3-web-fonts" element={<Css3_web_fonts />} />
          <Route path="/css-tutorials/css3-2d-transforms" element={<Css3_2d_transforms />} />
          <Route path="/css-tutorials/css3-3d-transforms" element={<Css3_3d_transforms />} />
          <Route path="/css-tutorials/css3-transitions" element={<Css3_transitions />} />
          <Route path="/css-tutorials/css3-animations" element={<Css3_animations />} />
          <Route path="/css-tutorials/css3-multiple-columns" element={<Css3_multiple_columns />} />
          {/* <Route path="/css-tutorials/css3-user-interface" element={<Css3_user_interface />} />
          <Route path="/css-tutorials/css3-box-sizing" element={<Css3_box_sizing />} />
          <Route path="/css-tutorials/css3-flexible-boxes" element={<Css3_flexible_boxes />} />
          <Route path="/css-tutorials/css3-media-queries" element={<Css3_media_queries />} />
          <Route path="/css-tutorials/web-design-css-dropdowns" element={<Web_design_css_dropdowns />} />
          <Route path="/css-tutorials/web-design-css-navigation-bar" element={<Web_design_css_navigation_bar />} />
          <Route path="/css-tutorials/web-design-css-footer" element={<Web_design_css_footer />} />
          <Route path="/css-tutorials/web-design-css-pagination" element={<Web_design_css_pagination />} />
          <Route path="/css-tutorials/web-design-css-breadcrumbs" element={<Web_design_css_breadcrumbs />} />
          <Route path="/css-tutorials/web-design-css-tooltops" element={<Web_design_css_tooltops />} />
          <Route path="/css-tutorials/web-design-css-lightbox" element={<Web_design_css_lightbox />} />
          <Route path="/css-tutorials/web-design-css-image-gallery" element={<Web_design_css_gallery />} />
          <Route path="/css-tutorials/web-design-css-image-sprites" element={<Web_design_css_image_sprites />} />
          <Route path="/css-tutorials/web-design-css-accordion" element={<Web_design_css_accordion />} />
          <Route path="/css-tutorials/web-design-css-forms" element={<Web_design_css_forms />} />
          <Route path="/css-tutorials/web-design-css-counters" element={<Web_design_css_counters />} />
          <Route path="/css-tutorials/responsive-web-design-introduction" element={<Responsive_web_design_introduction />} />
          <Route path="/css-tutorials/responsive-web-design-viewport" element={<Responsive_web_design_viewport />} />
          <Route path="/css-tutorials/responsive-web-design-grid-view" element={<Responsive_web_design_grid_view />} />
          <Route path="/css-tutorials/responsive-web-design-media-queries" element={<Responsive_web_design_media_queries />} />
          <Route path="/css-tutorials/responsive-web-design-Images" element={<Responsive_web_design_images />} />
          <Route path="/css-tutorials/responsive-web-design-videos" element={<Responsive_web_design_videos />} />
          <Route path="/css-tutorials/responsive-web-design-Frameworks" element={<Responsive_web_design_frameworks />} />
          <p><strong> CSS Basic DataTypes </strong></p>
          <Route path="/css-tutorials/what-are-css-data-types" element={<What_are_css_data_types />} />
          <Route path="/css-tutorials/css-integer" element={<Css_integer />} />
          <Route path="/css-tutorials/css-number" element={<Css_number />} />
          <Route path="/css-tutorials/css-length" element={<Css_length />} />
          <Route path="/css-tutorials/css-percentage" element={<Css_percentage />} />
          <Route path="/css-tutorials/css-string" element={<Css_string />} />
          <Route path="/css-tutorials/css-color" element={<Css_color />} />
          <Route path="/css-tutorials/css-url" element={<Css_url />} />
          <Route path="/css-tutorials/css-angle" element={<Css_angle />} /> */}
        </Routes>
      </BrowserRouter>
  );
};

export default App