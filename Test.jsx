#include "./EnableOneClip/disableAllAudios.jsx";
#include "./EnableOneClip/variables.jsx";

var project = app.project;
var sequence = project.activeSequence
var videoTracks = sequence.videoTracks;
var audioTracks = sequence.audioTracks;
var VTrack = videoTracks[0]
var ATrack = audioTracks[0]
var VClip = VTrack.clips[0]
var AClip = ATrack.clips[0]
var components = VClip.components;

var componentIndex = 2
var propertyIndex = 0

var component = components[componentIndex]
var properties = component.properties
var property = properties[propertyIndex]

// for(var i = 0; i < components.length; i++) {
//   alert(components[i].displayName);
// }

// for(var i = 0; i < properties.length; i++) {
//   alert(properties[i].displayName + ': ' + properties[i].getValue().toString());
// }
// property.setValue([0.5,0.5], 1)
var posY = 150;
var multiplier = 5/5400

property.setValue([0, posY*multiplier], 1)
alert(property.displayName + ': ' + property.getValue());
