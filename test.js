// fs used by musicmetadata
var fs = require('fs');
// taglib setup
var taglib = require('taglib');
// musicmetadata setup
var mm = require('musicmetadata');
// id3_reader setup
var id3_reader = require('id3_reader');
// id3js setup
var id3 = require('id3js');

// general variables
var track = "song.mp3";

// run them all individually
taglib.read(track, function(err, tag, audio) {
  console.log('taglib');
  console.log(tag);
  console.log(audio);
});

var parser = mm(fs.createReadStream(track), { duration: true });
parser.on('metadata', function (result) {
  console.log('musicmetadata');
  console.log(result);
});

id3({ file: track, type: id3.OPEN_LOCAL}, function(err, tags) {
  console.log('id3js');
  console.log(tags);
});

id3_reader.read(track, function(success, msg, data) {
  data.tags.attached_picture = null;
  console.log(data);
});
