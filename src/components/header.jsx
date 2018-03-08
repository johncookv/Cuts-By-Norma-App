import React, { Component } from 'react';

export default class Header extends Component{
  render(){
    return(
      <header>
        <div className="container">
          <div className="row">
            <div className="col">
              <span className="text-muted">Header</span>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
