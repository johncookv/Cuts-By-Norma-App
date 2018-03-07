import React, { Component } from 'react';

export default class MainNav extends Component{
  render(){
    return(
      <nav className="navbar navbar-toggleable-md">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <a className="navbar-brand" href="/">Giant Starter Kit</a>

              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/typography">Typography</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/icons">Icons</a>
                </li>

              </ul>

          </nav>
    )
  }
}
