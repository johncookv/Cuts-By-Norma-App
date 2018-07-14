import React, {Component} from 'react';
import Webcam from 'react-webcam';

export default class WebcamCapture extends Component {
  setRef = (webcam) => {
    this.webcam = webcam;
  }

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.props.updateOwnShirt(imageSrc);
  };

  render() {
    return (
      <div className="webcam-capture">
        <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
        />
        <button onClick={this.capture}>Capture photo</button>
      </div>
    );
  }
}
