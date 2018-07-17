import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import firebase from '../config/firebase';


export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
    }
  }

  componentDidMount() {
    const customersRef = firebase.database().ref('customers');
    customersRef.on('value', (snapshot) => {
      let customers = snapshot.val();
      let newState = [];
      for (let customer in customers) {
        newState.push({
          first: customers[customer].first,
          last: customers[customer].last,
          address: customers[customer].address,
          phone: customers[customer].phone,
          fb: customers[customer].fb,
          instagram: customers[customer].instagram,
          twitter: customers[customer].twitter,
          other: customers[customer].other,
          orders: customers[customer].orders,
        })
      }
      this.setState({ customers: newState });
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
        <div className="container">
          {this.state.customers.length === 0 ?
            <h1>Loading...</h1>
            :
            <div>
              <h1>List of customers</h1>
              <hr className="my-4" />
              {this.state.customers.map((customer, index) => {
                return (
                  <div onClick={() => this.props.customerOnClick(customer)} key={`row-${index}`} className="row">
                    <div key={`col1-${index}`} className="col-1">
                      {index + 1}.
                    </div>
                    <div key={`col2-${index}`} className="col">
                      {`${customer.first} ${customer.last}`}
                    </div>
                  </div>
                )
              })}
              <Link to="/" onClick={this.props.reset}><button>Go Home</button></Link>
            </div>
          }
        </div>

      </div>
    )
  }
}
