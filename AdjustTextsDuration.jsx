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

//set break points; these are the last text endpoints each scene
for(var i = 0; i < slicedTextData.length; i++) {
  var textObjects = slicedTextData[i]
  currentAudioIndex += textObjects.length;
  var breakPoint = audioTrack.clips[currentAudioIndex].end.seconds;
  breakPoints.push(breakPoint)
}

var prevBreakPoint = 0;
for(var i = 0; i < breakPoints.length; i++) {
  var breakPoint = breakPoints[i]
  for(var j = trackStart; j <= trackEnd; j++) {
    var track = videoTracks[j]
    var clips = track.clips
    for(var k = 0; k < clips.length; k++) {
      var clip = clips[k]
      var endSecond = clip.end.seconds
      if(endSecond > prevBreakPoint && endSecond <= breakPoint) {
        var time = new Time()
        time.seconds = breakPoint;
        clip.end = time;
        break
      }
    }
  }
  prevBreakPoint = breakPoints[i]
}

alert('Done')