var express = require('express');
var app = express();
var apiCheck = require('./api.js');
var dbConnect = require('./dbConfig.js');


//APIKey Generator check api
app.get('/apicheck/:apikey', function(request, response) {
    var value = request.params.apikey;
    apiCheck.checkAPI(value)
      .then(function(result) { response.send(result); })
      .catch(function(err) { response.send(err); });
});


var ser = function(value) {
    var query = "SELECT * FROM tbl_api WHERE apikey = '" + value + "'";
    return new Promise(function (resolve, reject) {
       client.query(query, function(err, result) {         
           if (err) {
              return reject(err);
           } 
           console.log("success");
           res.end(result.rows);
       });
   });
};
app.listen(4000, function () {
    console.log('Server is running.. on Port 4000');
   });
module.exports.checkAPI = ser;