import React, { Component } from 'react';
import Hero from '../components/hero';

export default class Homepage extends Component{
  render(){
    return(
      <div>
        <Hero />
        <h2>Homepage Content</h2>
        <h3>Nulla a nunc nec est tempor porttitor</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a nunc nec est tempor porttitor. Etiam nec neque id lacus blandit ornare vitae id risus. Nulla bibendum gravida posuere. Nullam porta sed eros sed tincidunt. Cras facilisis urna orci, id congue lectus gravida non. Fusce non placerat dolor. Maecenas et dictum neque. Pellentesque augue neque, faucibus et nunc eget, vestibulum hendrerit justo. Vivamus congue vulputate commodo. Etiam facilisis sed ante in semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p>
          Cras porttitor porta sem eget malesuada. Aenean at faucibus leo. Pellentesque a neque et nunc scelerisque suscipit. Quisque at odio id orci placerat finibus. Praesent at diam et quam lacinia consectetur. Nullam pulvinar justo ut est ultrices dignissim. Ut sed orci sit amet enim convallis interdum. Nulla felis magna, fringilla ac ornare non, dictum id tellus. Donec non accumsan est. Fusce id dui ac ante varius accumsan. Pellentesque rutrum nisl sed tellus fermentum, bibendum posuere lacus lobortis.
        </p>
      </div>
    )
  }
}
