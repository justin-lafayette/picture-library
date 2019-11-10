import React from 'react';
import { Zoom } from 'react-slideshow-image';
import {findAll} from '../../../controller/picturesController';
 
const images = [
  'images/img_6319.jpg',
  'images/img_6329.jpg',
  'images/img_6351.jpg',
  'images/img_6369.jpg',
  'images/img_6406.jpg',
  'images/img_6421.jpg',
  'images/img_6427.jpg',
  'images/img_6430.jpg'
];

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
 
const Slideshow = () => {
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