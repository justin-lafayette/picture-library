import React from "react"



const QRPrintPage = (props) => {
    return (

        <container>
            <div className="jumbotron" style={{padding: 5, marginLeft: 350, marginRight: 350, marginTop: 0, border: 0, backgroundColor: "rgba(255, 255, 255, 0.75)"}}>
        <div>
            <img src={"http://api.qrserver.com/v1/create-qr-code/?data=" + props.match.params.qrCode} alt="qr code" style= {{marginTop: 40, 
            height: 500, width: 500, marginLeft: 250, padding: 15}}></img>
            <div style={{textAlign: "center", fontSize: 50}}>{props.match.params.eventName}</div>
        </div>
        </div>
        </container>
    );
}

export default QRPrintPage;