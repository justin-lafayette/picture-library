import React from 'react';

export function Container({ fluid, children }) {
    return (

        <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>

    );
}

export function Row({ fluid, children }) {
    return(

        <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>

    );
}

export function Col({ num, center, children }) {
    return (

        <div
            className={getClassName(num, center)} 
        >
            {children}
        
        </div>

    );
}

function getClassName(num, center) {
    return `${num.split(" ").map(num => "col-" + num).join(" ")} ${center ? "text-center" : ""}`
}