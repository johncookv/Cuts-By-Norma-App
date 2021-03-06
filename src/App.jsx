import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Homepage from './_templates/Homepage';
import Order from './components/Order';
import OrderSummary from './components/OrderSummary';
import WebcamCapture from './components/WebcamCapture';
import CustomerForm from './components/CustomerForm';
import CustomerOrders from './components/CustomerOrders';
import Customers from './components/Customers';
import ThankYou from './components/ThankYou';
import FloatingPrice from './components/FloatingPrice';
import Gallery from './components/Gallery';
import {DB} from './js/DB';
import firebase from './config/firebase';
import CssBaseline from '@material-ui/core/CssBaseline';

const origState = {
  isCustomerInfoCompleted: false,
  isOrderStarted: false,
  isOrderFinished: false,
  isOwnShirtSelected: false,
  isCustomerSelected: false,
  isCustomerFulfilled: false,
  database: DB,
  currentOrderIndex: -1,
  currentStep: 0,
  totalPrice: 0,
  prevPrice: 0,
  isGalleryDisplayed: false,
  galleryImages: [],
  order: {
    shirt: null,
    cut: null,
    size: null,
    ownShirtImage: "",
    price: 0
  },
  customer: {
    first: null,
    last: null,
    address: {
      street1: "",
      street2: "",
      city: "",
      state: "",
      zip: "",
    },
    phone: null,
    fb: "",
    instagram: "",
    twitter: "",
    other: "",
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
    this.customerOnClick = this.customerOnClick.bind(this);
    this.updateSize = this.updateSize.bind(this);
    this.launchWebcam = this.launchWebcam.bind(this);
    this.launchGallery = this.launchGallery.bind(this);
    this.closeGallery = this.closeGallery.bind(this);
  }

  // done before component mounts
  componentWillMount() {

  }

  resetOrder = () => {
    let nullOrder = {
      shirt: null,
      cut: null,
      size: null,
      ownShirtImage: "",
      price: 0
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
      default:
        step = -1;
    }
    this.setState({ currentStep: step });

    if (step === -1) { // done with Order.jsx

      let index = this.state.currentOrderIndex;
      if (index === -1) { // if not updating an order
        this.setState({ totalPrice: this.state.totalPrice + order.price }, () => {
          this.pushToOrders(order);
        });
      } else { // update order at the correct index
        // copy customer with spread operator - https://stackoverflow.com/questions/43040721/how-to-update-a-nested-state-in-react
        // doesn't deep copy (so be careful with nested objects) - https://bambielli.com/til/2017-01-29-spread-operator-deep-copy/
        // seems to work here because I'm updating orders array within customer
        let customerCopy = {...this.state.customer};
        let ordersCopy = customerCopy.orders.slice();

        // subtract price of old order
        let newTotal = this.state.totalPrice - ordersCopy[index].price;

        // add price of new order
        newTotal = this.state.totalPrice + order.price;
        ordersCopy.splice(index, 1, order);
        customerCopy.orders = ordersCopy;
        this.setState({
          customer: customerCopy,
          totalPrice: newTotal
        });
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

  updateOrder(orderKey, choice, size, orderFinished = false) {
    let orderCopy = Object.assign({}, this.state.order);
    orderCopy[orderKey] = choice.choiceKey;
    if (size !== "") {
      orderCopy.size = size;
    }
    orderCopy.price = choice.price
    this.setState({ order: orderCopy });
    this.determineNextStep(orderCopy);
  }

  deleteAndChangeOrder(index) {
    let prevPrice = this.state.totalPrice;
    let newTotal = 0;
    if (this.state.totalPrice > 0) {
      newTotal = this.state.totalPrice - this.state.customer.orders[index].price;
    }
    this.setState({
      currentOrderIndex: index,
      isOrderFinished: false,
      currentStep: 0,
      totalPrice: newTotal,
      prevPrice: prevPrice
    });
  }

  launchWebcam(size) {
    let orderCopy = Object.assign({}, this.state.order);
    orderCopy.size = size;
    this.setState({
      isOwnShirtSelected: true,
      order: orderCopy
    });
    // navigator.mediaDevices.enumerateDevices().then(devices => console.log(devices))
  }

  updateOwnShirt(image) {
    let orderCopy = Object.assign({}, this.state.order);
    orderCopy.shirt = 'ownShirt';
    orderCopy.ownShirtImage = image;
    this.setState({
      order: orderCopy,
      isOwnShirtSelected: false,
      currentStep: 1,
    });
  }

  // pushToFirebase = () => {
  //   const customersRef = firebase.database().ref('customers');
  //   customersRef.push(this.state.customer);
  // }

  setCustomerInfo(info) {
    // this deep copies customer
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
    }, () => {
      // push to firebase after customer is updated
      const customersRef = firebase.database().ref('unfulfilled');
      customersRef.push(this.state.customer);
    })
  }

  completeOrder(info) {
    this.setCustomerInfo(info);
    // this.pushToFirebase();
  }

  reset = () => {
    let customerCopy = {...this.state.customer};
    customerCopy.orders.length = 0;
    this.setState(origState);
  }

  addAnotherOrder = () => {
    this.setState({
      isOrderFinished: false,
      currentStep: 0,
    })
  }

  customerOnClick(customer, isCustomerFulfilled) {
    this.setState({
      customer: customer,
      isCustomerSelected: true,
      isCustomerFulfilled: isCustomerFulfilled,
    });
  }

  backToCustomers = () => {
    this.setState({ isCustomerSelected: false });
  }

  updateSize(size) {
    let orderCopy = Object.assign({}, this.state.order);
    orderCopy.size = size;
    this.setState({ order: orderCopy });
  }

  // floatingPriceOnclick = () => {
  //   if (this.state.customer.orders.length >= 1) {
  //     this.setState({ isOrderFinished: true });
  //   }
  //   this.setState({ totalPrice: this.state.prevPrice });
  // }

  launchGallery(choice, imageCount, ownShirtImage = "") {
    let imagesArray = [];
    if (ownShirtImage !== "") {
      imagesArray[0] = {
        original: ownShirtImage,
        thumbnail: ownShirtImage
      };
    } else {
      for (let i = 0; i < imageCount; i++) {
        imagesArray.push(
          {
            original: require(`./assets/images/${choice}/${choice}-${i + 1}.jpg`),
            thumbnail: require(`./assets/images/${choice}/${choice}-${i + 1}.jpg`)
          }
        );
      }
    }
    this.setState({
      isGalleryDisplayed: true,
      galleryImages: imagesArray
    });
  }


  closeGallery = () => {
    this.setState({
      isGalleryDisplayed: false,
      galleryImages: []
    });
  }

  render() {
    return (
      <Fragment>
        <CssBaseline />
        <BrowserRouter>
          <div>
            <Route exact path="/" render={() =>
              <Homepage
                startOrder={this.startOrder}
                authenticate={this.authenticate}
                isOrderStarted={this.state.isOrderStarted} />} />
            <Route path="/order" render={() =>
              <Order
                DB={this.state.database}
                currentStep={this.state.currentStep}
                updateOrder={this.updateOrder}
                isOrderFinished={this.state.isOrderFinished}
                launchWebcam={this.launchWebcam}
                isOwnShirtSelected={this.state.isOwnShirtSelected}
                isOrderStarted={this.state.isOrderStarted}
                updateSize={this.updateSize}
                reset={this.reset}
                launchGallery={this.launchGallery}
                isGalleryDisplayed={this.state.isGalleryDisplayed}/>}/>
            <Route path="/order-summary" render={() =>
              <OrderSummary
                DB={this.state.database}
                orders={this.state.customer.orders}
                deleteAndChangeOrder={this.deleteAndChangeOrder}
                isOrderFinished={this.state.isOrderFinished}
                updateOrder={this.updateOrder}
                addAnotherOrder={this.addAnotherOrder}
                reset={this.reset}/>} />
            <Route path="/customer-info" render={() =>
              <CustomerForm
                completeOrder={this.completeOrder}
                customer={this.state.customer}å
                isOrderStarted={this.state.isOrderStarted}
                isCustomerInfoCompleted={this.state.isCustomerInfoCompleted}
                reset={this.reset}/>} />
            <Route path="/thanks" render={() =>
              <ThankYou
                reset={this.reset}
                isOrderStarted={this.state.isOrderStarted}/>}/>
            <Route path="/customers" render={() =>
              <Customers
                isOrderStarted={this.state.isOrderStarted}
                customerOnClick={this.customerOnClick}
                isCustomerSelected={this.state.isCustomerSelected}
                reset={this.reset}/>} />
            <Route path="/customer-orders" render={() =>
              <CustomerOrders
                customer={this.state.customer}
                DB={DB}
                isOrderFinished={true}
                backToCustomers={this.backToCustomers}
                isCustomerSelected={this.state.isCustomerSelected}
                reset={this.reset}
                isCustomerFulfilled={this.state.isCustomerFulfilled}
                launchGallery={this.launchGallery}
                isGalleryDisplayed={this.state.isGalleryDisplayed}/>} />
            <Route path="/own-shirt" render={() =>
              <WebcamCapture
                updateOwnShirt={this.updateOwnShirt}
                reset={this.reset}
                isOwnShirtSelected={this.state.isOwnShirtSelected}/>}/>
          </div>
        </BrowserRouter>
        <FloatingPrice
          price={this.state.totalPrice}
          isOrderStarted={this.state.isOrderStarted}
          floatingPriceOnclick={this.floatingPriceOnclick}/>
        <Gallery
          isGalleryDisplayed={this.state.isGalleryDisplayed}
          items={this.state.galleryImages}
          closeGallery={this.closeGallery}/>
      </Fragment>
    );
  }
}

export default App;
