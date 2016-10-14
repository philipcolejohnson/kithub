Lesson.factory('QuillService', ['$document', 
    function($document) {

  console.log( $document.find("#editor")[0])
  var editor = new SimpleMDE({ 
    element: $document.find("#editor")[0]
  });

  return editor;

}]);