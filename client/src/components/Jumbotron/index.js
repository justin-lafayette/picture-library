import React from 'react';

function Jumbotron({ fluid, children }) {
    return(
        
        <div className={`jumbotron${fluid ? "-fluid" : ""},`}>

            {children}
        
        </div>
        
    )

}

export default Jumbotron;