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
          <Link to="/admin"><img src={require("../assets/images/cbn-logo.svg")} alt="Cuts by Norma logo"/></Link>
          <h1 className="display-4 text-center mt-3">Ordering App</h1>
          <p className="lead text-center">Order your shirt and/or cut now!</p>
          {/* <hr className="my-4" />
          <p>Norma will contact you as soon as your shirt is ready!</p> */}
          <p className="lead d-flex justify-content-center">
            <Link to="/order" onClick={startOrder}><button className="btn btn-primary btn-lg">Start order</button></Link>
          </p>
        </div>
      </div>
     )
  }
}
