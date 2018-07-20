import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import Choice from './Choice';
import AppBar from './AppBar'

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isGalleryDisplayed: false,
      images: [],
    }
    this.launchGallery = this.launchGallery.bind(this);
  }

  launchGallery(isImages = true, images) {
    if (isImages) {
      this.setState({
        isGalleryDisplayed: true,
        images: images
      });
    }
  }

  closeGallery = () => {
    this.setState({ isGalleryDisplayed: false });
  }

  render() {
    const {customer, DB, isOrderFinished, isCustomerSelected, backToCustomers} = this.props;
    const address = customer.address
    if (!isCustomerSelected) {
      return <Redirect to="/customers" />
    }
    console.log(customer.orders)
    return (
      <div className={`${this.state.isGalleryDisplayed ? "no-scroll" : ""} customers`}>
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
                    launchGallery={this.launchGallery}/>
                </div>
              )
            })}
            <Link to="/admin" onClick={backToCustomers}><button>Back to Customer List</button></Link>
          </div>
          </div>
        </div>
        {this.state.isGalleryDisplayed &&
          <div className="modal-container">
            <div className="close-container" onClick={this.closeGallery}>CLOSE&nbsp;&nbsp;<span>X</span></div>
            <ImageGallery
              items={this.state.images}
              showFullscreenButton={false}
              showPlayButton={false}
              preventDefaultTouchmoveEvent={true}/>
          </div>
        }
      </div>
    )
  }
}
