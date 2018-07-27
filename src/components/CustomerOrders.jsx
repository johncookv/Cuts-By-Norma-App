import React, {Component,Fragment} from 'react';
import {Redirect} from 'react-router-dom';
import Choice from './Choice';
import AppBar from './AppBar'
import firebase from '../config/firebase';

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isGalleryDisplayed: false,
      images: [],
      isOrderFulfilled: false,
    }
    this.handleFulfilled = this.handleFulfilled.bind(this);
    this.backToCustomersOnClick = this.backToCustomersOnClick.bind(this);
  }

  handleFulfilled(e) {
    let isFulfilled = (e.target.value === "isFulfilled");
    this.setState({ isOrderFulfilled: isFulfilled });
  }

  backToCustomersOnClick = () => {
    if (this.state.isOrderFulfilled !== this.props.isCustomerFulfilled) {
      if (this.state.isOrderFulfilled) {

        // remove customer from unfulfilled
        const unfulfilledRef = firebase.database().ref(`unfulfilled/${this.props.customer.id}`);
        unfulfilledRef.remove();
        // add customer to fulfilled
        const fulfilledRef = firebase.database().ref('fulfilled');
        fulfilledRef.push(this.props.customer);
      }
      // TODO implement a way to "uncross out" a customer
      // else {
      //
      // }

    }
    this.props.backToCustomers();
  }

  render() {
    const {customer, DB, isOrderFinished, isCustomerSelected, isCustomerFulfilled, isGalleryDisplayed} = this.props;
    const address = customer.address
    if (!isCustomerSelected) {
      return <Redirect to="/customers" />
    }
    return (
      <div className={`${isGalleryDisplayed ? "no-scroll" : ""} customers`}>
        <AppBar {...this.props} />
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>{customer.first} {customer.last}</h1>
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <th scope="row">Phone</th>
                    <td>{customer.phone}</td>
                  </tr>
                  {address.street1 !== "" &&
                    <tr>
                      <th scope="row">Address</th>
                      <td>{address.street1}, {address.street2 !== null ? address.street2 : ""} ${address.city}, {address.state}, {address.zip}</td>
                    </tr>
                  }
                  {customer.fb !== "" &&
                    <tr>
                      <th scope="row">Facebook</th>
                      <td>{customer.fb}</td>
                    </tr>
                  }
                  {customer.instagram !== "" &&
                    <tr>
                      <th scope="row">Instagram</th>
                      <td>{customer.instagram}</td>
                    </tr>
                  }
                  {customer.twitter !== "" &&
                    <tr>
                      <th scope="row">Twitter</th>
                      <td>{customer.twitter}</td>
                    </tr>
                  }
                  {customer.other !== "" &&
                    <tr>
                      <th scope="row">Other</th>
                      <td>{customer.other}</td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
          <div className="col">
            {customer.orders.map((order, index) => {
              return (
                <div key={index}>
                  <h2>Order {index + 1}</h2>
                  <Choice
                    choice={DB.shirts[order.shirt]}
                    sizeText={DB.sizes[order.size].text}
                    cut={DB.cuts[order.cut]}
                    index={index}
                    isOrderFinished={isOrderFinished}
                    ownShirtImage={order.ownShirtImage}
                    launchGallery={this.props.launchGallery}
                    isCustomerSelected={isCustomerSelected}/>
                </div>
              )
            })}
            {!isCustomerFulfilled &&
              <Fragment>
                <label>Has the order been fulfilled?</label>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="isOrderFulfilled" id="isFulfilled" value="isFulfilled" checked={this.state.isOrderFulfilled} onChange={this.handleFulfilled} />
                  <label className="form-check-label" htmlFor="ship">
                    Yes
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="isOrderFulfilled" id="isNotFulfilled" value="isNotFulfilled" checked={!this.state.isOrderFulfilled} onChange={this.handleFulfilled} />
                  <label className="form-check-label" htmlFor="noship">
                    No
                  </label>
                </div>
              </Fragment>
            }
            <button onClick={this.backToCustomersOnClick}>Back to Customer List</button>
          </div>
          </div>
        </div>
      </div>
    )
  }
}
