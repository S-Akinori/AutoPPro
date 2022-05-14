#include "./EnableOneClip/disableAllAudios.jsx";
#include "./EnableOneClip/variables.jsx";
#include './data/TextData.jsx' // var slicedTextData {row: number; column: number; text: string; boxSize: number;}[][]

var project = app.project;
var sequence = project.activeSequence
var videoTracks = sequence.videoTracks;

// Set your values. These are not track numbers of PPro but array indexes; not like V"1", V"2" ..., but like 0, 1, 2, ... 
var trackStart = 0
var trackEnd = 5
//end

var trackNums = trackEnd - trackStart
var breakPoints = []
var blockSize = 0;

// select texts to be left
for(var i = 0; i < slicedTextData.length; i++) {
  var textObjects = slicedTextData[i]
  for(var j = 0; j < textObjects.length; j++) {
    var track = videoTracks[j];
    var clipIndex = textObjects[j].row;
    var clip = track.clips[clipIndex]
    clip.setSelected(1,1)
  }
}

//select texts to be removed
for(var i = 0; i <= trackEnd; i++) {
  var track = videoTracks[i];
  var clips = track.clips
  for(var j = 0; j < clips.length; j++) {
    var clip = clips[j]
    clip.setSelected(!clip.isSelected(), 1)
  }
}
alert('Done')