import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Choice from './Choice';
import AppBar from './AppBar';

export default class OrderSummary extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isCheckoutSelected: false
  //   }
  // }

  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    let {DB,orders,deleteAndChangeOrder,isOrderFinished,addAnotherOrder} = this.props;
    if (!isOrderFinished) {
      return <Redirect to="/order" />
    }
    return (
      <div className="order-summary">
        <AppBar {...this.props} />
        <h1 className="order-summary">Order Summary</h1>
        {orders.map((order,index) => {
          return (
            <div key={index}>
              <h2>Order {index + 1}</h2>
              <Choice
                choice={DB.shirts[order.shirt]}
                sizeText={DB.sizes[order.size].text}
                cutText={DB.cuts[order.cut].text}
                index={index}
                isOrderFinished={isOrderFinished}
                deleteAndChangeOrder={deleteAndChangeOrder}/>
            </div>
          )
        })}
        <button onClick={addAnotherOrder}>Add another order</button>
        <Link to="/customer-info"><button>Checkout</button></Link>
      </div>
    );
  }
}
