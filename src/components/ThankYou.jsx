import React from 'react';
import {Redirect} from 'react-router-dom';

export default function(props) {
  return (!props.isOrderStarted) ? <Redirect to="/" /> : (
    <div className="thanks">
      <div className="jumbotron">
        <h1 className="display-4">Thanks for your order!</h1>
        <p className="lead">Norma will contact you shortly!</p>
        <button onClick={props.reset}>Start over</button>
      </div>
    </div>

  )
}
