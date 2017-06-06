angular.module('video-player')
.component('videoList', {
  //console.log(videos);
  bindings: {
    videos: '<'
  },
  controller: function(){
    //console.log(this);
  },
  templateUrl: '../src/templates/videoList.html'
});
