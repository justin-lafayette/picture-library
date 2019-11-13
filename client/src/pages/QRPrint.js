import React from "react"

const QRPrintPage = (props) => {
    return (
        <div>
            <img src={"http://api.qrserver.com/v1/create-qr-code/?data=" + props.match.params.qrCode} alt="qr code"></img>
            <div>{props.match.params.eventName}</div>
        </div>
    );
}

export default QRPrintPage;