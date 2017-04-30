angular.module('video-player')
.directive('videoListEntry', function() {
  return {
    scope: {
      video: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {
      console.log('Video list entry:', this);
      this.onClick = (video) => {
        $scope.$parent.$parent.$parent.ctrl.selectVideo(video);
      };
    },

    templateUrl: 'src/templates/videoListEntry.html'
  };
});
