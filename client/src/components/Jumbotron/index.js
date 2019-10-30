import React from 'react';

function Jumbotron({ fluid, children }) {
    return(
        
        <div className={`jumbotron${fluid ? "-fluid" : ""}, bg-secondary`}>

            {children}
        
        </div>
        
    )

}

export default Jumbotron;