angular.module('video-player')

.component('app', {
  controller: function() {
    this.videos = window.exampleVideoData;
    this.video = window.exampleVideoData[0];
    this.handleClick = (video) => {
      this.video = video;
    };
  },
  templateUrl: '../src/templates/app.html'
});
 