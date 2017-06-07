angular.module('video-player')

.component('app', {
  controller: function() {
    this.videos = window.exampleVideoData;
    this.video = window.exampleVideoData[0];
    this.handleClick = (video) => {
      this.video = video;
    };
    // this.handleClick = function(video){
    //   this.video = video;
    // }.bind(this);
    this.update = (videos) => {
      this.videos = videos;
      this.video = videos[0];
    };
  },
  templateUrl: '../src/templates/app.html'
});
 