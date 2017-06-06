angular.module('video-player')
.component('videoList', {
  //console.log(videos);
  bindings: {
    videos: '<'
  },
  controller: function() {
    //console.log(this);
    this.handleClick;
  },
  templateUrl: '../src/templates/videoList.html'
});
