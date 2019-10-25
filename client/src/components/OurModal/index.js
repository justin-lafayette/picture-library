import React from "react";

function OurModal(props) {
    return(

        <div>

            {/* <button onClick={props.openModal}>Open Modal</button> */}

            <h2>Modal Title</h2>

            <button onClick={props.closeModal}>Close Modal</button>

            <div>Modal body</div>

            <form>

                <input />

                <button>tab navigation</button>
                
                <button>stays</button>
                
                <button>inside</button>
                
                <button>the modal</button>

            </form>

        </div>
    );
};

export default OurModal;