function disableAllAudios(tracks) {
  for(var i = 0; i < tracks.length; i++) {
    var track = tracks[i];
    var clips = track.clips
    for(var j = 0; j < clips.length; j++) {
      var clip = clips[j];
      clip.setSelected(1, 1)
      clip.disabled = true;
    }
  }
}