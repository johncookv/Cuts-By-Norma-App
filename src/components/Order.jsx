import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
// import {Close} from '@material-ui/icons'
import Choice from './Choice';
import AppBar from './AppBar'

import '../../node_modules/react-image-gallery/styles/css/image-gallery.css'

export default class Order extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isGalleryDisplayed: false,
      images: [],
      isOwnShirtSelected: false,
    }
    this.launchGallery = this.launchGallery.bind(this);
  }

  // componentDidMount() {
  //   window.scrollTo(0,0);
  // }

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
    let {DB, isOrderStarted, isOwnShirtSelected, currentStep, updateOrder, isOrderFinished} = this.props;
    let stepInfo = DB.stepList[currentStep];
    if (isOwnShirtSelected) {
      return <Redirect to="/own-shirt" />
    }

    if (isOrderFinished) {
      return <Redirect to="/order-summary" />
    }

    if (!isOrderStarted) {
      return <Redirect to="/" />
    }
    return (
      <div className={`${this.state.isGalleryDisplayed ? "no-scroll" : ""} order`}>
        <AppBar isGalleryDisplayed={this.state.isGalleryDisplayed} {...this.props} />
        <h1>{stepInfo.text}</h1>
        <main className="choice-container">

        {stepInfo.choices.map((choice, index) => {
          return (
            <Choice
              choice={choice}
              index={index}
              updateOrder={updateOrder}
              launchGallery={this.launchGallery}
              {...this.props}/>
          );
        })}
        </main>
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
