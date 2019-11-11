import React from 'react';
import './style.css'

function Jumbotron({ fluid, children }) {
    return(
        
        <div className={`jumbotron${fluid ? "-fluid" : ""},`}>

            {children}
        
        </div>
        
    )

}

export default Jumbotron;