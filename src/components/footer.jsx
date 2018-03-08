import React, { Component } from 'react';

export default class Footer extends Component{
  render(){
    return(
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <span className="text-muted">Place sticky footer content here.</span>
            </div>  
          </div>
        </div>
      </footer>
    )
  }
}
