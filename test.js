// load the library
var taglib = require('taglib');

for (var i = 0; i < 1000; i++) {
  // asynchronous API
  taglib.read("song.mp3", function(err, tag, audio) {
  });
}