import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import Choice from './Choice';
import AppBar from './AppBar';

export default class OrderSummary extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isGalleryDisplayed: false,
    }
    this.launchGallery = this.launchGallery.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }

  launchGallery(choice, imageCount) {
    let imagesArray = [];
    for (let i = 0; i < imageCount; i++) {
      imagesArray.push(
        {
          original: require(`../assets/images/${choice}/${choice}-${i + 1}.jpg`),
          thumbnail: require(`../assets/images/${choice}/${choice}-${i + 1}.jpg`)
        }
      );
    }
    this.setState({
      isGalleryDisplayed: true,
      images: imagesArray
    });
  }

  closeGallery = () => {
    this.setState({ isGalleryDisplayed: false });
  }

  render() {
    let {DB,orders,isOrderFinished,addAnotherOrder} = this.props;
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
                cut={DB.cuts[order.cut]}
                index={index}
                ownShirtImage={order.ownShirtImage}
                launchGallery={this.launchGallery}
                {...this.props}/>
            </div>
          )
        })}
        <button onClick={addAnotherOrder}>Add another order</button>
        <Link to="/customer-info"><button>Checkout</button></Link>

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
    );
  }
}
