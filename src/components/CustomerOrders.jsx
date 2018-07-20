import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import Choice from './Choice';
// TODO
// Button to go back to customers page
// List out customer info
// Show order
export default function(props) {
  const {customer, DB, isOrderFinished, isCustomerSelected, backToCustomers} = props;
  const address = customer.address
  if (!isCustomerSelected) {
    return <Redirect to="/customers" />
  }
  console.log(customer.orders)
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>{customer.first} {customer.last}</h1>
          <table class="table table-striped">
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
                ownShirtImage={order.ownShirtImage}/>
            </div>
          )
        })}
        <Link to="/admin" onClick={backToCustomers}><button>Back to Customer List</button></Link>
      </div>
      </div>
    </div>
  )
}
