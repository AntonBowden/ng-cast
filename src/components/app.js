angular.module('video-player')

.directive('app', function() {
  return {
    scope: {},
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function() {
      console.log('App:', this);
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];
      this.selectVideo = function(video) {
        this.currentVideo = video;
      };
      this.searchResults = function() {};
    },
    templateUrl: 'src/templates/app.html'
  };
});
