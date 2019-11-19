import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './style.css'

export default function ControlledCarousel(props) {

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };

    console.log(props)

    return(
        <Carousel 
            activeIndex={index} 
            direction={direction} 
            onSelect={handleSelect}
            interval="5000"
            pauseOnHover="true"
        >
            {props.images.map((each, index) =>{
                return(
                    <Carousel.Item key={index}>
                        <img
                            style={{maxWidth: "500px", height: "auto"}}
                            className="d-block"
                            src={each.picture_url}
                            alt={each.title}
                        />
                    </Carousel.Item>
                );
            })}
        </Carousel>
    )
}