import React from 'react';

function App() {
	return (
	  <div className="Qrcode">
		<header className="QRCode">
	

		<html>
		<head>
		<title>I'm an EXAMPLE.  Replace me, please.</title>
		</head>
		<body>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js"></script>

		<script type="text/javascript" src="../jquery.qrcode.min.js"></script>
		<script type="text/javascript" src="../src/jquery.qrcode.js"></script>
		<script type="text/javascript" src="../src/qrcode.js"></script>

		<p>Render in table</p>
		<div id="qrcodeTable"></div>
		<p>Render in canvas</p> 
		<div id="qrcodeCanvas"></div>
		<script>
			//jQuery('#qrcode').qrcode("this plugin is great");
			jQuery('#qrcodeTable').qrcode({
				render	: "table",
				text	: "http://jetienne.com"
			});	
			jQuery('#qrcodeCanvas').qrcode({
				text	: "http://jetienne.com"
			});	
		</script>

		</body>
		</html>
		</div>
);
}


export default Qrcode;