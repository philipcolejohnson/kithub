Lesson.controller('QuillShowCtrl', ['$scope', 'QuillService', function($scope, QuillService) {

  $scope.editor = QuillService.editor;


  $scope.editor.on('text-change', function(delta, oldDelta, source) {
    console.log( $scope.editor.getContents() )
    console.log(delta)
  });

}]);
