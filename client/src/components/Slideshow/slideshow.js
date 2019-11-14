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
  console.log(images)
    return (
      <div className="slide-container">
        <Zoom {...zoomOutProperties}>
          {
            images.map((each, index) => {
              console.log("each",each)
              return (

                  <img 
                    key={index} 
                    style={{maxWidth: "100px", height: "auto"}} 
                    src={each.picture_url} 
                  />

                )
            })
          }
        </Zoom>
      </div>
    )
}

export default Slideshow;