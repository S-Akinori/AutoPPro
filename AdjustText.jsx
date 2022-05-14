#include "./EnableOneClip/disableAllAudios.jsx";
#include "./EnableOneClip/variables.jsx";

var project = app.project;
var sequence = project.activeSequence
var audioTracks = sequence.audioTracks;
var videoTracks = sequence.videoTracks;
var audioTrack = audioTracks[0]
var videoTrack = videoTracks[0] // set a texts track
var audioClips = audioTrack.clips;
var videoClips = videoTrack.clips;

for(var i = 0; i < audioClips.length; i++) {
  var start = audioClips[i].start;
  var end = audioClips[i].end;
  videoClips[i].start = start
  videoClips[i].end = end
}
alert('Done')