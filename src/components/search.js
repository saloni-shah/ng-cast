angular.module('video-player')

.component('search', {
  bindings: {
    update: '<'
  },
  controller: function(youTube) {
    this.search = () => {
      youTube.searchlive(this.input, this.update);
    };
    // this.search = function(){
    //   console.log(this);
    //   youTube.searchlive(this.input, this.update);
    // };
  },
  templateUrl: 'src/templates/search.html'
});
