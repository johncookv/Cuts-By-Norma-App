import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
// import {Close} from '@material-ui/icons'
import Choice from './Choice';
import AppBar from './AppBar'

import '../../node_modules/react-image-gallery/styles/css/image-gallery.css'

export default class Order extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOwnShirtSelected: false,
    }
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    let {DB, isOrderStarted, isOwnShirtSelected, currentStep, updateOrder, isOrderFinished, launchGallery, isGalleryDisplayed} = this.props;
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
        <AppBar isGalleryDisplayed={isGalleryDisplayed} {...this.props} />
        <h1>{stepInfo.text}</h1>
        <main className="choice-container">

        {stepInfo.choices.map((choice, index) => {
          return (
            <Choice
              choice={choice}
              index={index}
              updateOrder={updateOrder}
              launchGallery={launchGallery}
              {...this.props}/>
          );
        })}
        </main>
      </div>
    )
  }
}
