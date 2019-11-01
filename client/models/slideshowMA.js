import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();


//===========================================================================//

<script type="text/javascript" src="jquery.qrcode.min.js"></script>

<div id="qrcode">

jquery('#qrcode').qrcode("Here is your QR Code.");

</div>;

//===========================NPM QRCode Install==============================//
Inside your project folder do:

npm install --save qrcode
or, install it globally to use qrcode from the command line to save qrcode images or generate ones you can view in your terminal.

npm install -g qrcode

//==================================QR Code==================================//
// index.js -> bundle.js
var QRCode = require('qrcode')
var canvas = document.getElementById('canvas')
 
QRCode.toCanvas(canvas, 'sample text', function (error) {
  if (error) console.error(error)
  console.log('success!');
})
//============================================================================//


//======================Image to Slideshow Code ==============================//
<!DOCTYPE html>
<html>
  <head>
    <style>
  
    </style>
    <title>MUO Slideshow</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js" type="text/javascript"></script>
    <script type="text/javascript">
  
    </script>
//==================================== Slideshow Javascript Code ==================================//
<script>
$(document).ready(function() {
  $('#previous').on('click', function(){
    // Change to the previous image
    $('#im_' + currentImage).stop().fadeOut(1);
    decreaseImage();
    $('#im_' + currentImage).stop().fadeIn(1);
  }); 
  $('#next').on('click', function(){
    // Change to the next image
    $('#im_' + currentImage).stop().fadeOut(1);
    increaseImage();
    $('#im_' + currentImage).stop().fadeIn(1);
  }); 

  var currentImage = 1;
  var totalImages = 3;

  function increaseImage() {
    /* Increase currentImage by 1.
    * Resets to 1 if larger than totalImages
    */
    ++currentImage;
    if(currentImage > totalImages) {
      currentImage = 1;
    }
  }
  function decreaseImage() {
    /* Decrease currentImage by 1.
    * Resets to totalImages if smaller than 1
    */
    --currentImage;
    if(currentImage < 1) {
      currentImage = totalImages;
    }
  }
});

window.setInterval(function() {
  $('#previous').click();
}, 2500);

</script>
//==================================== END Slideshow JS Code =====================================//


  </head>
  <body>
    <div id="showContainer">

      <div class="imageContainer" id="im_1">
        <img src="Images/1.jpg" />
        <div class="caption">
          Windmill
        </div>
      </div>

      <div class="imageContainer" id="im_2">
        <img src="Images/2.jpg" />
        <div class="caption">
          Plant
        </div>
      </div>

      <div class="imageContainer" id="im_3">
        <img src="Images/3.jpg" />
        <div class="caption">
          Dog
        </div>
      </div>

      <div class="navButton" id="previous">&#10094;</div>
      <div class="navButton" id="next">&#10095;</div>
    </div>
  </body>
</html>
//====================================================================================//
