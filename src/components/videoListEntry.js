angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    handleClick: '<'
  },
  controller: function() {
    
  },
  templateUrl: '../src/templates/videoListEntry.html'
});
