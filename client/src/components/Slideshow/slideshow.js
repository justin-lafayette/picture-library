import React from 'react';
import { Zoom } from 'react-slideshow-image';
// import {findAll} from '../../../controller/picturesController';

//===================== THIS LOOP =====================//

// var images = [];
// for (var i = 0; i < this.props.level; i++) {
//   images.push(<span className='images' key={i}></span>);
// }
// return images;
 
//==================== OR THIS ONE ====================//

// return this.props.level.map((item, index) => (
//   <span className="indent" key={index}>
//       {index}
//   </span>
// ));
//======================================================//

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
}
 
function Slideshow(props) {
  const images = props.images
    return (
      <div className="slide-container">
        <Zoom {...zoomOutProperties}>
          {
            images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
          }
        </Zoom>
      </div>
    )
}

export default Slideshow;