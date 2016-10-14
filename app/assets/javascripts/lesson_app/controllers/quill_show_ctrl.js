Lesson.controller('QuillShowCtrl', ['$scope', 'QuillService', function($scope, QuillService) {

  $scope.editor = QuillService;

  $scope.editor.codemirror.on("change", function(){
    console.log($scope.editor.value());
  });

}]);
