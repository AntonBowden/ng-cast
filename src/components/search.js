angular.module('video-player')

.directive('search', function() {
  return {
    scope: {
      // result: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope, youTube) {
      console.log('Search:', this);
      this.service = youTube;
      this.result = (results) => {
        $scope.$parent.ctrl.searchResults(results);
      };
      this.onClick = (term) => {
        this.service.search(term, this.result);
        // if (term.length !== 0) {
        //   youTube.search(term, this.result);
        // }
      };
      var debouncedSearch = _.debounce(this.service.search, 500);
      this.onChange = (term) => {
        debouncedSearch(term, this.result);
      };
    },
    templateUrl: 'src/templates/search.html'
  };
});
