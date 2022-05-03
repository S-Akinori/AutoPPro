#include "./EnableOneClip/disableAllAudios.jsx";
#include "./EnableOneClip/variables.jsx";

var project = app.project;
var sequence = project.activeSequence
var audioTracks = sequence.audioTracks;

// var thisTrack = audioTracks[0];
// var clips = thisTrack.clips;
// var thisClip = clips[0];

// modified spread sheet columns for clipsIndexes
// var clipsIndexes = columns.map(function(value) {
//   return value - 1;
// })

disableAllAudios(audioTracks);

var clipIndex = 0;
for(var i = 0; i < columns.length; i++) {
  var trackIndex = columns[i] - 1
  var track = audioTracks[trackIndex];
  var clip = track.clips[clipIndex]
  clip.disabled = false;
  clip.setSelected(0, 1)
  clipIndex++;
}

// var videoTracks = sequence.videoTracks;
// var thisTrack = audioTracks[0];
// var clips = thisTrack.clips;
// var thisClip = clips[0];
// var component = thisClip.components[0]
// var properties = component.properties;
// for(var i = 0; i < properties.length; i++) {
//   alert(properties[i].displayName + ': ' +  properties[i].getValue().toString())
// }

// alert(app.project.getGraphicsWhiteLuminance().toString())

// for(var i = 0; i < clips.length; i++) {
//   var start = clips[i].start.seconds.toString();
//   alert(start)
// }