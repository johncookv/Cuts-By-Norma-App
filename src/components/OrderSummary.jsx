import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Choice from './Choice';

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
    let {DB,orders,updateOrder,deleteAndChangeOrder,isOrderFinished,addAnotherOrder} = this.props;
    if (!isOrderFinished) {
      return <Redirect to="/order" />
    }
    return (
      <div className="order-summary">
        <h1 className="order-summary">Order Summary</h1>
        {orders.map((order,index) => {
          return (
            <div key={index}>
              <h3>Order {index + 1}</h3>
              <h2>Shirt</h2>
              <Choice
                choice={DB.shirts[order.shirt]}
                index={`shirt${index}`}
                isOrderFinished={isOrderFinished}
                updateOrder={updateOrder} />
              <h2>Size</h2>
              <Choice
                choice={DB.sizes[order.size]}
                index={`size${index}`}
                isOrderFinished={isOrderFinished}
                updateOrder={updateOrder} />

              <h2>Cut</h2>
              <Choice
                choice={DB.cuts[order.cut]}
                index={`cut${index}`}
                isOrderFinished={isOrderFinished}
                updateOrder={updateOrder} />
              <button onClick={() => deleteAndChangeOrder(index)}>Update this order</button>
            </div>
          )
        })}
        <button onClick={addAnotherOrder}>Add another order</button>
        <Link to="/customer-info"><button>Checkout</button></Link>
      </div>
    );
  }
}
