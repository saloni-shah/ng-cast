angular.module('video-player')
.service('youTube', function($http) {
  // TODO
  this.searchlive = function(searchVal, callback) {
    $http.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: window.YOUTUBE_API_KEY,
        type: 'video',
        maxResults: '6',
        part: 'id,snippet',
        q: searchVal
      }
    }).then( function (data) {
      console.log('successs');
      //console.log(data.data.items);
      callback(data.data.items);
    }, function () {
      console.log('error');
    });
  };
});
