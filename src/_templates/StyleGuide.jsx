import React, { Component } from 'react';

export default class StyleGuide extends Component{
  render(){
    return(
      <div className="container">
        <div className="row">
         <div className="col">

           <h1 className="display-4">Styleguide</h1>
           <p className="lead">Basic global display, typography, and link styles and colors</p>
           <h2>Typography</h2>
           <ul>
             <li>Keep number of fonts to a minimum for loading speed as well as editing/qa (goal: maximum 8 font styles)</li>
             <li>Leverage <a href="https://fonts.google.com/" target="_blank" rel="noopener noreferrer">Google Fonts</a> customized to include their variations</li>
             <li>In initial design phase only use fonts that are web-safe / web representative: https://www.cssfontstack.com/  When client has a specified font that is not web-safe we can embed it in images and recommend a web-font replacement for live text.</li>
             <li>Enable fontswap for hosted fonts with fallback font for a faster meaningful content rendering</li>
           </ul>

           <section>
             <h3>Headings</h3>
             <p>HTML headings, <code className="highlighter-rouge">&lt;h1&gt;</code> through <code className="highlighter-rouge">&lt;h6&gt;</code>, are available.</p>
               <table className="table">
                <tbody>
                  <tr>
                    <td><h1>h1. Bootstrap heading</h1></td>
                  </tr>
                  <tr>
                    <td><h2>h2. Bootstrap heading</h2></td>
                  </tr>
                  <tr>
                    <td><h3>h3. Bootstrap heading</h3></td>
                  </tr>
                  <tr>
                    <td><h4>h4. Bootstrap heading</h4></td>
                  </tr>
                  <tr>
                    <td><h5>h5. Bootstrap heading</h5></td>
                  </tr>
                  <tr>
                    <td><h6>h6. Bootstrap heading</h6></td>
                  </tr>
                 </tbody>
                </table>
            </section>

            <section>
              <h3>Links Styles</h3>
              <a href="http://">Home</a> | <a href="http://">Patients</a> | <a href="http://">Safety</a> | <a href="http://">Resources</a>
              <br />
              <br />
            </section>

            <section>
              <h3>Body Copy</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a nunc nec est tempor porttitor. Etiam nec neque id lacus blandit ornare vitae id risus. Nulla bibendum gravida posuere. Nullam porta sed eros sed tincidunt. Cras facilisis urna orci, id congue lectus gravida non. Fusce non placerat dolor. Maecenas et dictum neque. Pellentesque augue neque, faucibus et nunc eget, vestibulum hendrerit justo. Vivamus congue vulputate commodo. Etiam facilisis sed ante in semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p>
                Cras porttitor porta sem eget malesuada. Aenean at faucibus leo. Pellentesque a neque et nunc scelerisque suscipit. Quisque at odio id orci placerat finibus. Praesent at diam et quam lacinia consectetur. Nullam pulvinar justo ut est ultrices dignissim. Ut sed orci sit amet enim convallis interdum. Nulla felis magna, fringilla ac ornare non, dictum id tellus. Donec non accumsan est. Fusce id dui ac ante varius accumsan. Pellentesque rutrum nisl sed tellus fermentum, bibendum posuere lacus lobortis.
              </p>
            </section>

            <section className="footnote">
              <h3>Footnotes</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a nunc nec est tempor porttitor. Etiam nec neque id lacus blandit ornare vitae id risus. Nulla bibendum gravida posuere. Nullam porta sed eros sed tincidunt. Cras facilisis urna orci, id congue lectus gravida non. Fusce non placerat dolor. Maecenas et dictum neque. Pellentesque augue neque, faucibus et nunc eget, vestibulum hendrerit justo. Vivamus congue vulputate commodo. Etiam facilisis sed ante in semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </section>

            <section className="references">
              <h3>References</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a nunc nec est tempor porttitor. Etiam nec neque id lacus blandit ornare vitae id risus. Nulla bibendum gravida posuere. Nullam porta sed eros sed tincidunt. Cras facilisis urna orci, id congue lectus gravida non. Fusce non placerat dolor. Maecenas et dictum neque. Pellentesque augue neque, faucibus et nunc eget, vestibulum hendrerit justo. Vivamus congue vulputate commodo. Etiam facilisis sed ante in semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </section>

            <section>
              <h3>List Styles</h3>
              <ul>
                <li>Netus et malesuada fames ac. Egestas quis ipsum</li>
                <li>Suspendisse ultrices gravida dictum</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit, sed do</li>
              </ul>
            </section>

            <section>
              <h2>Colors</h2>
              <br />
            </section>

            <section>
              <h3>Swatches</h3>
              <ul>
                <li>Netus et malesuada fames ac. Egestas quis ipsum</li>
                <li>Suspendisse ultrices gravida dictum</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit, sed do</li>
              </ul>
            </section>

            <br />

            <section>
              <h2>Example</h2>
              <h3>Nulla a nunc nec est tempor porttitor</h3>

              <div className="row">
                <div className="col-md">
                   <h4>Lorem ipsum dolor </h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a nunc nec est tempor porttitor. Etiam nec neque id lacus blandit ornare vitae id risus. Nulla bibendum gravida posuere. Nullam
                </div>
                <div className="col-md">
                   <h4>Lorem  sit amet</h4>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a nunc nec est tempor porttitor. Etiam nec neque id lacus blandit ornare vitae id risus. Nulla bibendum gravida posuere. Nullam
                </div>
                <div className="col-md">
                    <h4>Lorem i sit amet</h4>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a nunc nec est tempor porttitor. Etiam nec neque id lacus blandit ornare vitae id risus. Nulla bibendum gravida posuere. Nullam
                </div>
              </div>
            </section>

            <br />
            <br />
            <br />
            <br />
            
          </div>
        </div>
      </div>
    )
  }
}
