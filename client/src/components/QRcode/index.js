import React from 'react';
import ReactDOM from 'react-dom';
import QRCode from 'react-qr-code';

ReactDOM.render(
  <QRCode value="Event" />,
  document.getElementById('Container')
);

// function htmlEncode (value){
//     return $('<div/>').text(value).html();
//   }
  
  // $(function() {
  //   $("#generate").click(function() {
  //     $(".qr-code").attr("src", "https://chart.googleapis.com/chart?cht=qr&chl=" + htmlEncode($("#content").val()) + "&chs=160x160&chld=L|0");
  //   });
  // });


  