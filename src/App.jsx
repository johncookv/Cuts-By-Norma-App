import React, { Component } from 'react';
import './App.css';
import Homepage from './_templates/Homepage';
import Order from './components/Order';
import OrderSummary from './components/OrderSummary';
import WebcamCapture from './components/WebcamCapture';
import CustomerInfo from './components/CustomerInfo';
import Customers from './components/Customers';
import {DB} from './js/DB';
import firebase from './config/firebase';

const origState = {
  isAdmin: false,
  isOrderStarted: false,
  isOrderFinished: false,
  isCameraLaunched: false,
  isCustomerInfoLaunched: false,
  database: DB,
  currentOrderIndex: -1,
  currentStep: 0,
  order: {
    shirt: null,
    size: null,
    cut: null,
  },
  customer: {
    first: null,
    last: null,
    address: {
      street1: null,
      street2: null,
      city: null,
      state: null,
      zip: null,
    },
    phone: null,
    fb: null,
    instagram: null,
    twitter: null,
    other: null,
    orders: [],
  }
}

class App extends Component {

  constructor(props){
    super(props);
    this.state = origState;

    this.updateOrder = this.updateOrder.bind(this);
    this.completeOrder = this.completeOrder.bind(this);
    this.addAnotherOrder = this.addAnotherOrder.bind(this);
    this.updateOwnShirt = this.updateOwnShirt.bind(this);
    this.deleteAndChangeOrder = this.deleteAndChangeOrder.bind(this);
  }

  // done before component mounts
  componentWillMount() {

  }

  authenticate = () => {
    this.setState({ isAdmin: true });
  }

  resetOrder = () => {
    let nullOrder = {
      shirt: null,
      size: null,
      cut: null
    }
    this.setState({ order: nullOrder });
  }

  pushToOrders(order) {
    this.state.customer.orders.push(order);
    this.resetOrder();
  }

  determineNextStep = (order) => {
    let objectArray = Object.values(order);
    let step;
    switch(objectArray.indexOf(null)) {
      case 0:
        step = 0;
        break;
      case 1:
        step = 1;
        break;
      case 2:
        step = 2;
        break;
      default:
        step = -1;
    }
    this.setState({ currentStep: step });
    if (step === -1) {
      let index = this.state.currentOrderIndex;
      if (index === -1) {
        this.pushToOrders(order);
      } else {
        // replace element at 'index' with the value of argument 'order'
        let ordersCopy = this.state.customer.orders.slice();
        ordersCopy.splice(index, 1, order);
        this.setState({ orders: ordersCopy });
        this.resetOrder();
      }
      this.setState({
        isOrderFinished: true,
        currentOrderIndex: -1,
      });
    }
  }

  startOrder = () => {
    this.determineNextStep(this.state.order);
    this.setState({
      isOrderStarted: true,
    });
  }

  updateOrder(orderKey, value, orderFinished = false) {
    let orderCopy = Object.assign({}, this.state.order);
    orderCopy[orderKey] = value;
    this.setState({ order: orderCopy });
    this.determineNextStep(orderCopy);
  }

  deleteAndChangeOrder(index) {
    console.log(this.state.order);
    this.setState({
      currentOrderIndex: index,
      isOrderFinished: false,
      currentStep: 0,
    });
  }

  launchWebcam = () => {
    this.setState({ isCameraLaunched: true });
  }

  updateOwnShirt(image) {
    let dbCopy = Object.assign({},this.state.database);
    dbCopy.shirts.ownShirt.image = image;
    let orderCopy = Object.assign({}, this.state.order);
    orderCopy.shirt = 'ownShirt';
    this.setState({
      database: dbCopy,
      order: orderCopy,
      isCameraLaunched: false,
    });
    this.determineNextStep(orderCopy);
  }

 launchCustomerInfo = () => {
    this.setState({ isCustomerInfoLaunched: true });
  }

  pushToFirebase = () => {
    console.log(this.state.customer)
    // const customersRef = firebase.database().ref('customers');
    // customersRef.push(this.state.customer);
  }

  setCustomerInfo(info) {
    let customerCopy = Object.assign({}, this.state.customer);
    customerCopy.first = info.first;
    customerCopy.last = info.last;
    customerCopy.address = info.address;
    customerCopy.phone = info.phone;
    customerCopy.fb = info.fb;
    customerCopy.instagram = info.instagram;
    customerCopy.twitter = info.twitter;
    customerCopy.other = info.other;
    this.setState({
      customer: customerCopy,
      isCustomerInfoCompleted: true
    })
  }

  completeOrder(info) {
    this.setCustomerInfo(info);
    this.pushToFirebase();
  }

  reset = () => {
    // this first set state is needed
    // to remove thank you page
    this.setState({
      isCustomerInfoCompleted: false
    })
    this.setState(origState);
  }

  addAnotherOrder = () => {
    console.log(this.state.order);
    this.setState({
      isOrderFinished: false,
      currentStep: 0,
    })
  }

  render() {
    return (
      <div>
        {!this.state.isOrderStarted && !this.state.isAdmin &&
          <Homepage
            startOrder={this.startOrder}
            authenticate={this.authenticate}/>
        }
        {this.state.isOrderStarted && !this.state.isOrderFinished && !this.state.isCameraLaunched &&
          <Order
            DB={this.state.database}
            currentStep={this.state.currentStep}
            updateOrder={this.updateOrder}
            isOrderFinished={this.state.isOrderFinished}
            launchWebcam={this.launchWebcam}/>
        }
        {this.state.isOrderFinished && !this.state.isCustomerInfoLaunched &&
          <OrderSummary
            DB={this.state.database}
            orders={this.state.customer.orders}
            deleteAndChangeOrder={this.deleteAndChangeOrder}
            isOrderFinished={this.state.isOrderFinished}
            updateOrder={this.updateOrder}
            launchCustomerInfo={this.launchCustomerInfo}
            addAnotherOrder={this.addAnotherOrder}/>
        }
        {this.state.isCameraLaunched &&
          <WebcamCapture
            updateOwnShirt={this.updateOwnShirt}/>
        }
        {this.state.isCustomerInfoLaunched && !this.state.isCustomerInfoCompleted &&
          <CustomerInfo
            completeOrder={this.completeOrder}
            customer={this.state.customer}/>
        }
        {this.state.isCustomerInfoCompleted &&
          <div>
            <h4>**Page under construction**</h4>
            <h1>Thanks for your order!</h1>
            {console.log(this.state.customer)}
            <button onClick={this.reset}>Start over</button>
          </div>
        }
        {/* ADMIN page */}
        {!this.state.isOrderStarted && this.state.isAdmin &&
          <Customers />
        }
      </div>
    );
  }
}

export default App;
