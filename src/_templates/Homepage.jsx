import React, { Component } from 'react';
import Hero from '../components/hero';

export default class Homepage extends Component{
  render(){
    return(
      <div>
        <Hero />

        <h2>Homepage Content</h2>
        <h3>Nulla a nunc nec est tempor porttitor</h3>

        <div className="row">
          <div className="col">
             <h4>Lorem ipsum dolor </h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a nunc nec est tempor porttitor. Etiam nec neque id lacus blandit ornare vitae id risus. Nulla bibendum gravida posuere. Nullam
          </div>
          <div className="col">
             <h4>Lorem  sit amet</h4>
              Prta sed eros sed tincidunt. Cras facilisis urna orci, id congue lectus gravida non. Fusce non placerat dolor. Maecenas et dictum neque. Pellentesque augue neque, faucibus et nunc eget, vestibulum hendrerit justo. Vivamus congue vulputate commodo. Etiam facilisis sed ante in semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className="col">
              <h4>Lorem i sit amet</h4>
              Id lacus blandit ornare vitae id risus. Nulla bibendum gravida posuere. Nullam porta sed eros sed tincidunt. Cras facilisis urna orci, id congue lectus gravida non. Fusce non placerat dolor. Maecenas et dictum neque. Pellentesque augue neque, faucibus et nunc eget, vestibulum hendrerit justo. Vivamus congue vulputate commodo. Etiam facilisis sed ante
          </div>
        </div>

      </div>
    )
  }
}
