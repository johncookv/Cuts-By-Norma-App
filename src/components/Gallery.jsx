import React from 'react';
import ImageGallery from 'react-image-gallery';

const gallery = (props) => {
  return (
    <div className={props.isGalleryDisplayed ? "modal-container" : "d-none"}>
      <div className="close-container" onClick={props.closeGallery}>CLOSE&nbsp;&nbsp;<span>X</span></div>
      <ImageGallery
        items={props.items}
        showFullscreenButton={false}
        showPlayButton={false}
        preventDefaultTouchmoveEvent={true}/>
    </div>
  )
}

export default gallery;
