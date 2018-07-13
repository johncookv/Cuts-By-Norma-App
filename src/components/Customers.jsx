import React, {Component} from 'react';
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
      // let newState = [];
      // for (let customer in customers) {
      //   newState.push(this.state.customers)
      // }
      this.setState({ customers: customers });
    })
  }

  render() {
    let customersString = JSON.stringify(this.state.customers);
    return (
      <div>
        <h1>List of customers</h1>
        <div>{customersString}</div>
      </div>
    )
  }
}
