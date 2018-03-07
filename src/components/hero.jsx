import React, { Component } from 'react';

export default class Hero extends Component{
  render(){
    return(
      <div className="jumbotron">
        <h1 className="display-3">Giant Starter Kit</h1>
        <p className="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        <p><a className="btn btn-lg btn-success" href="#" role="button">Call to Action</a></p>
      </div>
    )
  }
}
