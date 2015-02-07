// load the benchmark library
var Benchmark = require('benchmark');
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

// setup the test suite
var suite = new Benchmark.Suite;

suite.add('taglib', {
  defer: true,
  fn: function(deferred) {
    taglib.read(track, function(err, tag, audio) {
      deferred.resolve();
    });
  }
})
.add('musicmetadata', {
  defer: true,
  fn: function(deferred) {
    var parser = mm(fs.createReadStream(track), { duration: true });

    parser.on('done', function(err){
      deferred.resolve();
    });
  }
})
.add('id3js', {
  defer: true,
  fn: function(deferred) {
   id3({ file: track, type: id3.OPEN_LOCAL}, function(err, tags) {
      deferred.resolve();
    });
  }
})
.add('id3_reader', {
  defer: true,
  fn: function(deferred) {
    id3_reader.read(track, function(err, data) {
      deferred.resolve();
    });
  }
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
});

suite.run({'async': false});
