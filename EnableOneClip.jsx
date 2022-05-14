#include "./EnableOneClip/disableAllAudios.jsx";
#include "./EnableOneClip/variables.jsx";

var project = app.project;
var sequence = project.activeSequence
var audioTracks = sequence.audioTracks;

disableAllAudios(audioTracks);

var clipIndex = 0;
for(var i = 0; i < trackIndexes.length; i++) {
  var trackIndex = trackIndexes[i]
  var track = audioTracks[trackIndex];
  var clip = track.clips[clipIndex]
  clip.disabled = false;
  clip.setSelected(0, 1)
  clipIndex++;
}

alert('Done')