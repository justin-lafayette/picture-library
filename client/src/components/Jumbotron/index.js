import React from "react";

import "./style.css";
import { Button } from "react-bootstrap";
// import Jumbotron from 'react-bootstrap/Jumbotron';
// function Jumbotron({ fluid, children }) {
//     return(
        
//         <div className={`jumbotron${fluid ? "-fluid" : ""},`}>

function Jumbotron(props) {

  return (
     <div>
       {/* <Jumbotron> */}
        <h1></h1>
        <p>
          
        </p>
         <div>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </div>
      {/* </Jumbotron> */}
      {/* <div>
        <div class="frame" style="height: 25px;">
        <img src="capture.png" alt="" />
      </div> */}
    </div>
  );
}
// function Jumbotron({ fluid, children }) {
//   return (
//     <div className={`jumbotron${fluid ? "-fluid" : ""}, bg-secondary`}>
//       {children}

//       <h1 className={'${className}'}>Fluid jumbotron</h1>
//       <p>
//         This is a modified jumbotron that occupies the entire horizontal space
//         of its parent.
//       </p>
//     </div>
//   );
// }

export default Jumbotron;
