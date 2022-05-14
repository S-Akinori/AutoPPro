#include "./EnableOneClip/disableAllAudios.jsx";
#include "./EnableOneClip/variables.jsx";
#include './data/TextData.jsx' // var slicedTextData {row: number; column: number; text: string; boxSize: number;}[][]

var project = app.project;
var sequence = project.activeSequence
var videoTracks = sequence.videoTracks;
var audioTracks = sequence.audioTracks;
var breakPoints = []

// Set your values. These are not track numbers of PPro but array indexes; not like V"1", V"2" ..., but like 0, 1, 2, ... 
var trackStart = 0
var trackEnd = 5
var audioTrackIndex = 0
// end

var audioTrack = audioTracks[audioTrackIndex];
var currentAudioIndex = -1

var componentIndex = 2 // vector motion index
var propertyIndex = 0 // vector motion position index
var multiplier = 5/5400
for(var i = 0; i < slicedTextData.length; i++) {
  var posY = -20.00;
  var posX = 0
  var textObjects = slicedTextData[i];
  for(var j = 0; j < textObjects.length; j++) {
    var textObj = textObjects[j];
    var track = videoTracks[j];
    var clip = track.clips[textObj.clip];
    var component = clip.components[componentIndex];
    var property = component.properties[propertyIndex]
    property.setValue([posX * multiplier, posY * multiplier], 1)
    if(textObj.boxSize > 1) {
      posY += 170 * 1.5
    } else {
      posY += 170
    }
  }
}

alert('Done')