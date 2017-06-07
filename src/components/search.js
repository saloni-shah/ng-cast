angular.module('video-player')

.component('search', {
  bindings: {
    update: '<'
  },
  controller: function(youTube) {
    this.search = () => {
      //console.log('hi', this.update);
      youTube.searchlive(this.input, this.update);
      //
    };
  },
  templateUrl: 'src/templates/search.html'
});
