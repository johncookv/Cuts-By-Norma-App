import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';

export default class Homepage extends Component {

  render() {
    const {startOrder,isOrderStarted} = this.props;
    if (isOrderStarted) {
      return <Redirect to="/order" />
    }

    return (
  		<div className="container homepage">
        <div className="jumbotron">
          <Link to="/admin"><h1 className="display-4">Cuts By Norma Ordering App</h1></Link>
          <p className="lead">Order your shirt and/or cut now!</p>
          <hr className="my-4" />
          <p>Norma will contact you as soon as your shirt is ready!</p>
          <p className="lead">
            <Link to="/order" onClick={startOrder}><button className="btn btn-primary btn-lg">Start order</button></Link>
          </p>
        </div>
      </div>
     )
  }
}
