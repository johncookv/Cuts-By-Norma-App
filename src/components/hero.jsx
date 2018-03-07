import React, {Component} from 'react';


export default class Hero extends Component {
  render() {
    return (
      <div className="jumbotron">

        <h1 className="display-4">Giant Website Foundation Style Guide</h1>
        <p className="lead">Giant’s foundational style guide serves as a starting point for every website project. The style guide is a compilation of UX and Coding best practices. Using the style guide gives teams a head start and saves time and money by creating efficiencies throughout the process</p>

        <div className="row">
          <div className="col">
            <a className="btn btn-lg btn-success" href="/" role="button">Components</a>
          </div>

          <div className="col">
            <a className="btn btn-lg btn-success" href="/typography" role="button">Typography</a>
          </div>

          <div className="col">
            <a className="btn btn-lg btn-success" href="/icons" role="button">Icons</a>
          </div>
        </div>

    </div>
   )
  }
}
