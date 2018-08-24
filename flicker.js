module.exports = (function Flickr() {
  "use strict";

var fs = require("fs")
var flickr = new Flickr({
  api_key: "1234ABCD1234ABCD1234ABCD1234ABCD"
});


flickr.photos.search({
  text: "red+panda"
}, function(err, result) {
  if(err) { throw new Error(err); }
  // do something with result

  console.log("flicker",result);
});
