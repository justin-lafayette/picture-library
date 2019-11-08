import React from 'react';
import { Zoom } from 'react-slideshow-image';


// class Slideshow extends Component {


// const images = [
//   'images/slide_2.jpg',
//   'images/slide_3.jpg',
//   'images/slide_4.jpg',
//   'images/slide_5.jpg',
//   'images/slide_6.jpg',
//   'images/slide_7.jpg'
// ];

// //===================== THIS LOOP =====================//
// imageLoop = ()=> {
//   const images = [];
//   for (let i = 0; i < this.props.level; i++) {
//     images.push(<span className='images' key={i}></span>);
//     return images;
//   }
 
//   //==================== OR THIS ONE ====================//
  
//   return this.props.level.map((item, index) => (
//     <span className="indent" key={index}>
//         {index}
//     </span>
//   ));

// }
// //======================================================//

// zoomOutProperties = {
//   duration: 5000,
//   transitionDuration: 500,
//   infinite: true,
//   indicators: true,
//   scale: 0.4,
//   arrows: true
// }
  function Slideshow(props) {
    console.log(props)
    return (
      <div className="slide-container">
        <Zoom {...props.zoomOutProperties}>
          {
            props.images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
          }
        </Zoom>
      </div>
    );
  }
// }

export default Slideshow;