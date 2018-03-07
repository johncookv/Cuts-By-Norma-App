import React, { Component } from 'react';

export default class MainNav extends Component{
  render(){
    return(

      <div className="container">
        <div className="row justify-content-between main_nav">

          <div className="col-2">
            <a className="navbar-brand" href="/"><img src={require('../assets/giant_greenLogo.png')} width="170%" /></a>
          </div>

          <div className="col-5">
             <nav className="navbar navbar-toggleable-md">

              <ul className="navbar-nav mr-auto ">
                <li className="nav-item active">
                  <a className="nav-link" href="/components">Components</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/styleguide">Style Guide</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/icons">Icons</a>
                </li>
              </ul>
             </nav>
          </div>
        </div>
      </div>
    )
  }
}
