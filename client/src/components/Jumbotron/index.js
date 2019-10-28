import React from 'react';

function Jumbotron({ fluid, children }) {
    return(
        
        <div className={`jumbotron${fluid ? "-fluid" : ""}, bg-secondary`}>

            {children}

            <h1 className="display-4">Hello, world!</h1>

            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            
            <hr className="my-4 " />
            
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            
            <div className="btn btn-primary btn-lg" role="button">Learn more</div>
        
        </div>
        
    )

}

export default Jumbotron;