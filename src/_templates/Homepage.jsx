import React from 'react';

export default function homepage(props) {

  const {startOrder} = props;

  return (
		<div className="container homepage">
      <div className="jumbotron">
        <h1 className="display-4" onClick={props.authenticate}>Cuts By Norma Ordering App</h1>
        <p className="lead">Order your shirt and/or cut now!</p>
        <hr className="my-4" />
        <p>Norma will contact you as soon as your shirt is ready!</p>
        <p className="lead">
          <button className="btn btn-primary btn-lg" onClick={startOrder}>Start order</button>
        </p>
      </div>
    </div>
   )
}
