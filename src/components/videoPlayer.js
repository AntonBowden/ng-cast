angular.module('video-player')

.directive('videoPlayer', function() {
  return {
    scope: {},
    controllerAs: 'ctrl',
    bindToController: {
      video: '<'
    },
    controller: function($scope) {
      console.log('Video player:', this);
    },
    templateUrl: 'src/templates/videoPlayer.html'
  };
});
