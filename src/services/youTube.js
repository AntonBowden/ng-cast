angular.module('video-player')
.service('youTube', function($http) {

  this.search = function(query, callback) {
    var rootUrl = 'https://www.googleapis.com/youtube/v3/search';
    var params = `?key=${window.YOUTUBE_API_KEY}&type=video&videoEmbeddable=true&part=snippet&maxResults=5`;

    $http({
      method: 'GET',
      url: `${rootUrl}${params}&q=${query}`
    }).then(function(data, status) {
      callback(data.data.items);
    }).catch(function(data) {
      console.log('Error loading YouTube data:', data);
    });
  };

});
