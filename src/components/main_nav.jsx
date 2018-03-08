import React, {Component} from 'react';

export default class MainNav extends Component {
  render() {
    return (
      <div className="container">
       <div className="row align-items-center main_nav">

        <div className="col-2">
          <a className="navbar-brand logo" href="/"><img src={require('../assets/giant_greenLogo.png')} width="170%"/></a>
        </div>

        <div className="col-5 offset-md-5">
          <div className="row">
            <div className="col">
              <a href="/components">Components</a>
            </div>

            <div className="col">
              <a href="/styleguide">Style Guide</a>
            </div>

            <div className="col">
              <a href="/icons">Icons</a>
            </div>
          </div>
        </div>

      </div>
    </div>)
  }
}
