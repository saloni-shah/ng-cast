angular.module('video-player')
.component('videoList', {
  //console.log(videos);
  bindings: {
    videos: '<',
    currentVideo: '<',
    handleClick: '<'
  },
  controller: function() {
    //console.log(this);   
  },
  templateUrl: '../src/templates/videoList.html'
});
