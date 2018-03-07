import React, { Component } from 'react';

export default class Typography extends Component{
  render(){
    return(
      <div>
        <h1>Typography and Colors</h1>
        <p>Basic global display, typography, and link styles</p>

        <section>
          <h2> Headings</h2>
          <p>HTML headings, <code class="highlighter-rouge">&lt;h1&gt;</code> through <code class="highlighter-rouge">&lt;h6&gt;</code>, are available.</p>
            <table class="table">
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
           <h2>Links Styles</h2>
           <a href="#">Home</a> | <a href="#">Patients</a> | <a href="#">Safety</a> | <a href="#">Resources</a>
         </section>

         <section>
           <h2>Body Copy</h2>
           <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a nunc nec est tempor porttitor. Etiam nec neque id lacus blandit ornare vitae id risus. Nulla bibendum gravida posuere. Nullam porta sed eros sed tincidunt. Cras facilisis urna orci, id congue lectus gravida non. Fusce non placerat dolor. Maecenas et dictum neque. Pellentesque augue neque, faucibus et nunc eget, vestibulum hendrerit justo. Vivamus congue vulputate commodo. Etiam facilisis sed ante in semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           </p>
           <p>
             Cras porttitor porta sem eget malesuada. Aenean at faucibus leo. Pellentesque a neque et nunc scelerisque suscipit. Quisque at odio id orci placerat finibus. Praesent at diam et quam lacinia consectetur. Nullam pulvinar justo ut est ultrices dignissim. Ut sed orci sit amet enim convallis interdum. Nulla felis magna, fringilla ac ornare non, dictum id tellus. Donec non accumsan est. Fusce id dui ac ante varius accumsan. Pellentesque rutrum nisl sed tellus fermentum, bibendum posuere lacus lobortis.
           </p>
         </section>

         <section>
           <h2>Footnotes</h2>
           <p className="footnote">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a nunc nec est tempor porttitor. Etiam nec neque id lacus blandit ornare vitae id risus. Nulla bibendum gravida posuere. Nullam porta sed eros sed tincidunt. Cras facilisis urna orci, id congue lectus gravida non. Fusce non placerat dolor. Maecenas et dictum neque. Pellentesque augue neque, faucibus et nunc eget, vestibulum hendrerit justo. Vivamus congue vulputate commodo. Etiam facilisis sed ante in semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           </p>
         </section>

         <section>
           <h2>References</h2>
           <p className="references">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a nunc nec est tempor porttitor. Etiam nec neque id lacus blandit ornare vitae id risus. Nulla bibendum gravida posuere. Nullam porta sed eros sed tincidunt. Cras facilisis urna orci, id congue lectus gravida non. Fusce non placerat dolor. Maecenas et dictum neque. Pellentesque augue neque, faucibus et nunc eget, vestibulum hendrerit justo. Vivamus congue vulputate commodo. Etiam facilisis sed ante in semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           </p>
         </section>

         <section>
           <h2>List Styles</h2>
           <ul>
             <li>Netus et malesuada fames ac. Egestas quis ipsum</li>
             <li>Suspendisse ultrices gravida dictum</li>
             <li>Lorem ipsum dolor sit amet</li>
             <li>Consectetur adipiscing elit, sed do</li>
           </ul>
         </section>

         <section>
           <h2>Color Swatches</h2>
           <ul>
             <li>Netus et malesuada fames ac. Egestas quis ipsum</li>
             <li>Suspendisse ultrices gravida dictum</li>
             <li>Lorem ipsum dolor sit amet</li>
             <li>Consectetur adipiscing elit, sed do</li>
           </ul>
         </section>


      </div>


    )
  }
}
