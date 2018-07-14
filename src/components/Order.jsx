import React, {Component} from 'react';
import Choice from './Choice';
import ImageGallery from 'react-image-gallery';
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css'

export default class Order extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isGalleryDisplayed: false,
      images: [],
    }
    this.launchGallery = this.launchGallery.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      window.scrollTo(0,0);
    }
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
    let {DB, currentStep, updateOrder, isOrderFinished, launchWebcam} = this.props;
    let stepInfo = DB.stepList[currentStep];
    return (
      <div className={`${this.state.isGalleryDisplayed ? "no-scroll" : ""} order`}>
        <h1>{stepInfo.text}</h1>
        <main className="choice-container">

        {stepInfo.choices.map((choice, index) => {
          return (
            <Choice
              key={index}
              choice={choice}
              index={index}
              updateOrder={updateOrder}
              isOrderFinished={isOrderFinished}
              launchGallery={this.launchGallery}
              launchWebcam={launchWebcam} />
          );
        })}
        </main>
        {this.state.isGalleryDisplayed &&
          <div className="modal-container" onClick={this.closeGallery}>
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
