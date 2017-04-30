angular.module('video-player')

.directive('app', function() {
  return {
    scope: {},
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function(youTube) {
      console.log('App:', this);
      this.videos = [];
      this.currentVideo = {};
      this.selectVideo = (video) => {
        this.currentVideo = video;
      };
      this.searchResults = (results) => {
        this.videos = results;
        this.currentVideo = this.videos[0];
      };

      youTube.search('nba', function(videos) {
        this.videos = videos;
        this.currentVideo = this.videos[0];
      }.bind(this));
    },
    templateUrl: 'src/templates/app.html'
  };
});
