// var app = function(){
//
//   var request = require('superagent');
//
//   var clientID = 'e15c000c39a367b25832',
//       clientSecret = 'b229b34c4b89a1b10a2c26afe6022d7e',
//       apiUrl = 'https://api.artsy.net/api/tokens/xapp_token',
//       xappToken;
//
//   request
//     .post(apiUrl)
//     .send({ client_id: clientID, client_secret: clientSecret })
//     .end(function(res) {
//       xappToken = res.body.token;
//     });
//
//
// }
