import React, {Component,Fragment} from 'react';
import {Redirect} from 'react-router-dom';
import firebase from '../config/firebase';
import AppBar from './AppBar'


export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unfulfilled: [],
      fulfilled: [],
    }
  }

  componentDidMount() {
    const unfulfilledRef = firebase.database().ref('unfulfilled');
    unfulfilledRef.on('value', (snapshot) => {
      let unfulfilled = snapshot.val();
      let unfulfilledState = [];
      for (let customer in unfulfilled) {
        unfulfilledState.push({
          id: customer,
          first: unfulfilled[customer].first,
          last: unfulfilled[customer].last,
          address: unfulfilled[customer].address,
          phone: unfulfilled[customer].phone,
          fb: unfulfilled[customer].fb,
          instagram: unfulfilled[customer].instagram,
          twitter: unfulfilled[customer].twitter,
          other: unfulfilled[customer].other,
          orders: unfulfilled[customer].orders,
        })
      }
      this.setState({
        unfulfilled: unfulfilledState,
      });
    })
      const fulfilledRef = firebase.database().ref('fulfilled');
      fulfilledRef.on('value', (snapshot) => {
        let fulfilled = snapshot.val();
        let fulfilledState = [];
        for (let customer in fulfilled) {
          fulfilledState.push({
            id: fulfilled[customer].id,
            first: fulfilled[customer].first,
            last: fulfilled[customer].last,
            address: fulfilled[customer].address,
            phone: fulfilled[customer].phone,
            fb: fulfilled[customer].fb,
            instagram: fulfilled[customer].instagram,
            twitter: fulfilled[customer].twitter,
            other: fulfilled[customer].other,
            orders: fulfilled[customer].orders,
          })
        }
      this.setState({
        fulfilled: fulfilledState,
      });
    })
  }

  render() {
    // if (!this.props.isOrderStarted) {
    //   return <Redirect to="/" />
    // }
    if (this.props.isCustomerSelected) {
      return <Redirect to="/customer-orders" />
    }
    return (
      <div className="customers">
        <AppBar {...this.props} />

        {/* map through customers in unfulfilled */}
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Customers with unfulfilled orders</h1>
              {this.state.unfulfilled.length === 0 ?
                <Fragment>
                  <h2>Loading...</h2>
                </Fragment>
                :
                <div>
                  <hr className="my-4" />
                  {this.state.unfulfilled.map((customer, index) => {
                    return (
                      <div onClick={() => this.props.customerOnClick(customer, false)} key={`row-${index}`} className="row">
                        <div key={`col1-${index}`} className="col-1">
                          {index + 1}.
                        </div>
                        <div key={`col2-${index}`} className="col">
                          {`${customer.first} ${customer.last}`}
                        </div>
                      </div>
                    )
                  })}
                </div>
              }
            </div>
          </div>
        </div>

        {/* map through customers in fulfilled */}
        <div className="container">
          <div className="row fulfilled">
            <div className="col">
              <h1>Customers with fulfilled orders</h1>
              {this.state.fulfilled.length === 0 ?
                <Fragment>
                  <h2>Loading...</h2>
                </Fragment>
                :
                <div>
                  <hr className="my-4" />
                  {this.state.fulfilled.map((customer, index) => {
                    return (
                      <div onClick={() => this.props.customerOnClick(customer, true)} key={`row-${index}`} className="row">
                        <ul>
                          <li>
                            {`${customer.first} ${customer.last}`}
                          </li>
                        </ul>
                      </div>
                    )
                  })}
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
